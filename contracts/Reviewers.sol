// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

contract Reviewers is Ownable {
    ////////////////////////////////////////////////////////////////////////////////////
    // Errors
    ////////////////////////////////////////////////////////////////////////////////////
    error NotActiveReviewer(address applicant, Status status);
    error NotValidReviewer(address applicant, Status status);
    error ExistingReviewer(address applicant, Status status);
    error TimeGapNotMet(address applicant, uint256 applicationTime);
    error NotValidApplicant(address account);
    error AlreadyReviewed(address account, address reviewer);
    error EmptyComment(address account, address reviewer);
    error NotValidTarget(address target);

    ////////////////////////////////////////////////////////////////////////////////////
    // Storage
    ////////////////////////////////////////////////////////////////////////////////////
    enum Status {
        Pending,
        Declined,
        Active,
        Quitted,
        Doubted,
        Expelled
    }

    struct ReviewerInfo {
        string name;
        string intro;
        string email;
        string twitter;
        string telegram;
        Status status;
        uint applicationTime;
        string quitReason;
    }
    // _reviewer[address]
    mapping(address => ReviewerInfo) private _reviewer;
    address[] private _reviewersList;
    mapping(Status => address[]) private _reviewersListByStatus;

    // _reviewComment[Applicant address, Reviewer address]
    mapping(address => mapping(address => string)) private _reviewComment;
    address[] private _approversList;
    mapping(address => address[]) private _approversListByApplicant;
    address[] private _rejectersList;
    mapping(address => address[]) private _rejectersListByApplicant;

    // _doubtComment[Doubted Target address, Reviewer address]
    mapping(address => mapping(address => string)) private _doubtComment;
    // The `alliance` here means alliance of the doubt raiser (opposer of doubted target)
    address[] private _alliancesList;
    mapping(address => address[]) private _alliancesListByDoubted;
    // The `opposer` here means opposer of the doubt raiser (alliance of doubted target)
    address[] private _opposersList;
    mapping(address => address[]) private _opposersListByDoubted;

    uint private _timeGap = 31 days;
    uint private _reviewerPassRatio = 8000;
    uint private _doubtPassRatio = 8000;

    ////////////////////////////////////////////////////////////////////////////////////
    // Events
    ////////////////////////////////////////////////////////////////////////////////////
    event NewApplication(address indexed applicant, string name, string email);
    event ApplicationReviewed(
        address indexed applicant,
        address indexed reviewer,
        bool isApproved
    );
    event ApplicationApproved(
        address indexed applicant,
        string name,
        string email
    );
    event ApplicationDeclined(
        address indexed applicant,
        string name,
        string email
    );
    event ReviewerInfoUpdated(
        address indexed reviewer,
        string name,
        string email
    );
    event DoubtRaised(address indexed target, address indexed applicant);
    event DoubtReviewed(
        address indexed target,
        address indexed reviewer,
        bool isSupportive
    );
    event DoubtClosed(address indexed target);
    event ReviewerExpelled(
        address indexed applicant,
        string name,
        string email
    );
    event ReviewerQuitted(address indexed applicant, string name, string email);

    ////////////////////////////////////////////////////////////////////////////////////
    // Constructor
    ////////////////////////////////////////////////////////////////////////////////////
    // Initialize deployer as the first reviewer
    constructor(
        string memory name,
        string memory intro,
        string memory email,
        string memory twitter,
        string memory telegram
    ) Ownable(_msgSender()) {
        // Create a new reviewer
        ReviewerInfo memory newReviewer = ReviewerInfo({
            name: name,
            intro: intro,
            email: email,
            twitter: twitter,
            telegram: telegram,
            status: Status.Active,
            applicationTime: block.timestamp,
            quitReason: ""
        });

        _reviewer[_msgSender()] = newReviewer;
        _reviewersList.push(_msgSender());
        _reviewersListByStatus[Status.Active].push(_msgSender());

        emit ApplicationApproved(_msgSender(), name, email);
    }

    ////////////////////////////////////////////////////////////////////////////////////
    // Getter Functions
    ////////////////////////////////////////////////////////////////////////////////////
    function getReviewerList() external view returns (address[] memory) {
        return _reviewersList;
    }

    function getReviewerListByStatus(
        Status status
    ) external view returns (address[] memory) {
        return _reviewersListByStatus[status];
    }

    function getReviewerInfo(
        address reviewerAddress
    ) external view returns (ReviewerInfo memory) {
        return _reviewer[reviewerAddress];
    }

    function getDoubtDetails(
        address doubtedReviewer,
        address reviewer
    ) external view returns (string memory) {
        return _doubtComment[doubtedReviewer][reviewer];
    }

    // The `alliance` here means alliance of the doubt raiser (opposer of doubted target)
    function getAllianceListByDoubted(
        address doubtedTarget
    ) external view returns (address[] memory) {
        return _alliancesListByDoubted[doubtedTarget];
    }

    // The `opposer` here means opposer of the doubt raiser (alliance of doubted target)
    function getOpposerListByDoubted(
        address doubtedTarget
    ) external view returns (address[] memory) {
        return _opposersListByDoubted[doubtedTarget];
    }

    ////////////////////////////////////////////////////////////////////////////////////
    // Modifiers
    ////////////////////////////////////////////////////////////////////////////////////
    modifier onlyActiveReviewer(address account) {
        ReviewerInfo memory existingReviewer = _reviewer[account];
        if (existingReviewer.status != Status.Active) {
            revert NotActiveReviewer(account, existingReviewer.status);
        }
        _;
    }
    modifier onlyValidReviewer(address account) {
        ReviewerInfo memory existingReviewer = _reviewer[_msgSender()];
        if (
            existingReviewer.status != Status.Active &&
            existingReviewer.status != Status.Doubted
        ) {
            revert NotValidReviewer(_msgSender(), existingReviewer.status);
        }
        _;
    }

    ////////////////////////////////////////////////////////////////////////////////////
    // Main Functions
    ////////////////////////////////////////////////////////////////////////////////////
    // Only non-reviewer or those whose applications have been declined more than _timeGap (31 days by default)
    // can apply to be a reviewer.
    function applyReviewer(
        string memory name,
        string memory intro,
        string memory email,
        string memory twitter,
        string memory telegram
    ) external {
        // Check if the caller is an existing reviewer
        ReviewerInfo memory existingReviewer = _reviewer[_msgSender()];

        // Existing reviewers cannot apply, unless their status is Declined
        if (
            bytes(existingReviewer.email).length != 0 &&
            existingReviewer.status != Status.Declined
        ) {
            revert ExistingReviewer(_msgSender(), existingReviewer.status);
        }

        // If the existing reviewer's status is Declined, the current time must be greater than or equal to the last apply time plus the time gap
        if (
            existingReviewer.status == Status.Declined &&
            block.timestamp < existingReviewer.applicationTime + _timeGap
        ) {
            revert TimeGapNotMet(
                _msgSender(),
                existingReviewer.applicationTime
            );
        }

        // If the existing reviewer's status is Declined, reset pass / fail lists
        if (existingReviewer.status == Status.Declined) {
            // Reset the pass and fail reviewer list
            delete _approversListByApplicant[_msgSender()];
            delete _rejectersListByApplicant[_msgSender()];
        }

        // Create a new reviewer
        ReviewerInfo memory newReviewer = ReviewerInfo({
            name: name,
            intro: intro,
            email: email,
            twitter: twitter,
            telegram: telegram,
            status: Status.Pending,
            applicationTime: block.timestamp,
            quitReason: ""
        });

        // Add the new reviewer to the mapping and the arrays
        _reviewer[_msgSender()] = newReviewer;
        _reviewersList.push(_msgSender());
        _reviewersListByStatus[Status.Pending].push(_msgSender());

        // Emit NewApplication event
        emit NewApplication(_msgSender(), name, email);
    }

    // Only Acitve reviewer can review new applications
    // A new application will only pass when it reaches its pass ratio (including Active and Doubted reviewers)
    function review(
        address applicant,
        bool isApproved,
        string memory comment
    ) external onlyActiveReviewer(_msgSender()) {
        ReviewerInfo memory existingReviewer = _reviewer[applicant];

        // Check if applicant's status is Pending
        if (existingReviewer.status != Status.Pending) {
            revert NotValidApplicant(applicant);
        }

        // Check if the reviewer has already reviewed the applicant
        if (bytes(_reviewComment[applicant][_msgSender()]).length > 0) {
            revert AlreadyReviewed(applicant, _msgSender());
        }

        // Comment cannot be empty
        if (bytes(comment).length == 0) {
            revert EmptyComment(applicant, _msgSender());
        }

        _reviewComment[applicant][_msgSender()] = comment;

        emit ApplicationReviewed(applicant, _msgSender(), isApproved);

        if (isApproved) {
            _approversListByApplicant[applicant].push(_msgSender());

            uint passRatio = (_approversListByApplicant[applicant].length *
                10_000) /
                (_reviewersListByStatus[Status.Active].length +
                    _reviewersListByStatus[Status.Doubted].length);
            bool isPassed = passRatio >= _reviewerPassRatio;
            if (isPassed) {
                // Update the reviewer's status
                _reviewer[_msgSender()].status = Status.Active;

                emit ApplicationApproved(
                    applicant,
                    existingReviewer.name,
                    existingReviewer.email
                );
            }
        } else {
            _rejectersListByApplicant[applicant].push(_msgSender());

            uint failRatio = (_rejectersListByApplicant[applicant].length *
                10_000) /
                (_reviewersListByStatus[Status.Active].length +
                    _reviewersListByStatus[Status.Doubted].length);
            bool isFailed = failRatio >= 10_000 - _reviewerPassRatio;
            if (isFailed) {
                // Update the reviewer's status
                _reviewer[_msgSender()].status = Status.Declined;

                emit ApplicationDeclined(
                    applicant,
                    existingReviewer.name,
                    existingReviewer.email
                );
            }
        }
    }

    function _removeFromStatusList(address reviewer) private {
        Status status = _reviewer[reviewer].status;

        for (uint256 i = 0; i < _reviewersListByStatus[status].length; i++) {
            if (_reviewersListByStatus[status][i] == reviewer) {
                _reviewersListByStatus[status][i] = _reviewersListByStatus[
                    status
                ][_reviewersListByStatus[status].length - 1];
                _reviewersListByStatus[status].pop();
                break;
            }
        }
    }

    // Only Acitve / Doubted reviewer can update reviewer information (intro, twitter, telegram only)
    function updateInfo(
        string memory intro,
        string memory email,
        string memory twitter,
        string memory telegram
    ) external onlyValidReviewer(_msgSender()) {
        // Update the reviewer's intro, email, twitter, telegram
        _reviewer[_msgSender()].intro = intro;
        _reviewer[_msgSender()].email = email;
        _reviewer[_msgSender()].twitter = twitter;
        _reviewer[_msgSender()].telegram = telegram;

        // Emit ReviewerInfoUpdated event
        emit ReviewerInfoUpdated(
            _msgSender(),
            _reviewer[_msgSender()].name,
            _reviewer[_msgSender()].email
        );
    }

    // Only Acitve / Doubted reviewer can quit to be reviewer
    function quitReviewer(
        string memory reason
    ) external onlyValidReviewer(_msgSender()) {
        if (_reviewer[_msgSender()].status == Status.Doubted) {
            emit DoubtClosed(_msgSender());
        }

        // Remove the reviewer from the existing status list and add them to the Quitted status list
        _removeFromStatusList(_msgSender());
        _reviewersListByStatus[Status.Quitted].push(_msgSender());

        // Update the reviewer's status and reason
        _reviewer[_msgSender()].status = Status.Quitted;
        _reviewer[_msgSender()].quitReason = reason;

        // Emit ReviewerQuitted event
        emit ReviewerQuitted(
            _msgSender(),
            _reviewer[_msgSender()].name,
            _reviewer[_msgSender()].email
        );
    }

    // Only Acitve / Doubted reviewer can doubt another active reviewer
    function doubt(
        address doubtedTarget,
        string memory comment
    )
        external
        onlyValidReviewer(_msgSender())
        onlyActiveReviewer(doubtedTarget)
    {
        // Comment cannot be empty
        if (bytes(comment).length == 0) {
            revert EmptyComment(doubtedTarget, _msgSender());
        }

        _removeFromStatusList(doubtedTarget);
        _reviewersListByStatus[Status.Doubted].push(doubtedTarget);

        _alliancesListByDoubted[doubtedTarget].push(_msgSender());
        _doubtComment[doubtedTarget][_msgSender()] = comment;

        emit DoubtRaised(doubtedTarget, _msgSender());
    }

    // Only Acitve / Doubted reviewer can review a new doubt
    function reviewDoubt(
        address doubtedTarget,
        bool isSupportive,
        string memory comment
    ) external onlyValidReviewer(_msgSender()) {
        if (_reviewer[doubtedTarget].status != Status.Doubted) {
            revert NotValidTarget(doubtedTarget);
        }

        // Check if the reviewer has already reviewed the doubt
        if (bytes(_doubtComment[doubtedTarget][_msgSender()]).length > 0) {
            revert AlreadyReviewed(doubtedTarget, _msgSender());
        }

        // Comment cannot be empty
        if (bytes(comment).length == 0) {
            revert EmptyComment(_msgSender(), doubtedTarget);
        }

        _doubtComment[doubtedTarget][_msgSender()] = comment;

        emit DoubtReviewed(doubtedTarget, _msgSender(), isSupportive);

        if (isSupportive) {
            _alliancesListByDoubted[doubtedTarget].push(_msgSender());

            uint passRatio = (_alliancesListByDoubted[doubtedTarget].length *
                10_000) /
                (_reviewersListByStatus[Status.Active].length +
                    _reviewersListByStatus[Status.Doubted].length);
            bool isPassed = passRatio >= _doubtPassRatio;
            if (isPassed) {
                // Update the doubtedTarget's status
                _reviewer[doubtedTarget].status = Status.Expelled;

                emit ReviewerExpelled(
                    doubtedTarget,
                    _reviewer[doubtedTarget].name,
                    _reviewer[doubtedTarget].email
                );
            }
        } else {
            _opposersListByDoubted[doubtedTarget].push(_msgSender());

            uint failRatio = (_opposersListByDoubted[doubtedTarget].length *
                10_000) /
                (_reviewersListByStatus[Status.Active].length +
                    _reviewersListByStatus[Status.Doubted].length);
            bool isFailed = failRatio >= 10_000 - _doubtPassRatio;
            if (isFailed) {
                // Update the doubtedTarget's status
                _reviewer[doubtedTarget].status = Status.Active;

                emit DoubtClosed(doubtedTarget);
            }
        }
    }

    ////////////////////////////////////////////////////////////////////////////////////
    // Owner Setting Functions
    ////////////////////////////////////////////////////////////////////////////////////
    function updateTimeGap(uint256 newTimeGap) external onlyOwner {
        _timeGap = newTimeGap;
    }

    function updateReviewerPassRatio(uint newRatio) external onlyOwner {
        _reviewerPassRatio = newRatio;
    }

    function updateDoubtPassRatio(uint newRatio) external onlyOwner {
        _doubtPassRatio = newRatio;
    }
}
