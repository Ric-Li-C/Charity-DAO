import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Reviewers
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x713265af5418174A15E95C72Bb6d837955B10E05)
 */
export const reviewersAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'intro', internalType: 'string', type: 'string' },
      { name: 'email', internalType: 'string', type: 'string' },
      { name: 'twitter', internalType: 'string', type: 'string' },
      { name: 'telegram', internalType: 'string', type: 'string' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'intro', internalType: 'string', type: 'string' },
      { name: 'email', internalType: 'string', type: 'string' },
      { name: 'twitter', internalType: 'string', type: 'string' },
      { name: 'telegram', internalType: 'string', type: 'string' },
    ],
    name: 'applyReviewer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'doubtedTarget', internalType: 'address', type: 'address' },
      { name: 'comment', internalType: 'string', type: 'string' },
    ],
    name: 'doubt',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'doubtedTarget', internalType: 'address', type: 'address' },
    ],
    name: 'getAllianceListByDoubted',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'doubtedReviewer', internalType: 'address', type: 'address' },
      { name: 'reviewer', internalType: 'address', type: 'address' },
    ],
    name: 'getDoubtDetails',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'doubtedTarget', internalType: 'address', type: 'address' },
    ],
    name: 'getOpposerListByDoubted',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'reviewerAddress', internalType: 'address', type: 'address' },
    ],
    name: 'getReviewerInfo',
    outputs: [
      {
        name: '',
        internalType: 'struct Reviewers.ReviewerInfo',
        type: 'tuple',
        components: [
          { name: 'name', internalType: 'string', type: 'string' },
          { name: 'intro', internalType: 'string', type: 'string' },
          { name: 'email', internalType: 'string', type: 'string' },
          { name: 'twitter', internalType: 'string', type: 'string' },
          { name: 'telegram', internalType: 'string', type: 'string' },
          {
            name: 'status',
            internalType: 'enum Reviewers.Status',
            type: 'uint8',
          },
          { name: 'applicationTime', internalType: 'uint256', type: 'uint256' },
          { name: 'quitReason', internalType: 'string', type: 'string' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getReviewerList',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'status', internalType: 'enum Reviewers.Status', type: 'uint8' },
    ],
    name: 'getReviewerListByStatus',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'reason', internalType: 'string', type: 'string' }],
    name: 'quitReviewer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'applicant', internalType: 'address', type: 'address' },
      { name: 'isApproved', internalType: 'bool', type: 'bool' },
      { name: 'comment', internalType: 'string', type: 'string' },
    ],
    name: 'review',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'doubtedTarget', internalType: 'address', type: 'address' },
      { name: 'isSupportive', internalType: 'bool', type: 'bool' },
      { name: 'comment', internalType: 'string', type: 'string' },
    ],
    name: 'reviewDoubt',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newRatio', internalType: 'uint256', type: 'uint256' }],
    name: 'updateDoubtPassRatio',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'intro', internalType: 'string', type: 'string' },
      { name: 'email', internalType: 'string', type: 'string' },
      { name: 'twitter', internalType: 'string', type: 'string' },
      { name: 'telegram', internalType: 'string', type: 'string' },
    ],
    name: 'updateInfo',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newRatio', internalType: 'uint256', type: 'uint256' }],
    name: 'updateReviewerPassRatio',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newTimeGap', internalType: 'uint256', type: 'uint256' }],
    name: 'updateTimeGap',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'applicant',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'name', internalType: 'string', type: 'string', indexed: false },
      { name: 'email', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'ApplicationApproved',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'applicant',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'name', internalType: 'string', type: 'string', indexed: false },
      { name: 'email', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'ApplicationDeclined',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'applicant',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'reviewer',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'isApproved',
        internalType: 'bool',
        type: 'bool',
        indexed: false,
      },
    ],
    name: 'ApplicationReviewed',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'target',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'DoubtClosed',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'target',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'applicant',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'DoubtRaised',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'target',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'reviewer',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'isSupportive',
        internalType: 'bool',
        type: 'bool',
        indexed: false,
      },
    ],
    name: 'DoubtReviewed',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'applicant',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'name', internalType: 'string', type: 'string', indexed: false },
      { name: 'email', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'NewApplication',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'applicant',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'name', internalType: 'string', type: 'string', indexed: false },
      { name: 'email', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'ReviewerExpelled',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'reviewer',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'name', internalType: 'string', type: 'string', indexed: false },
      { name: 'email', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'ReviewerInfoUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'applicant',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'name', internalType: 'string', type: 'string', indexed: false },
      { name: 'email', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'ReviewerQuitted',
  },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'reviewer', internalType: 'address', type: 'address' },
    ],
    name: 'AlreadyReviewed',
  },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'reviewer', internalType: 'address', type: 'address' },
    ],
    name: 'EmptyComment',
  },
  {
    type: 'error',
    inputs: [
      { name: 'applicant', internalType: 'address', type: 'address' },
      { name: 'status', internalType: 'enum Reviewers.Status', type: 'uint8' },
    ],
    name: 'ExistingReviewer',
  },
  {
    type: 'error',
    inputs: [
      { name: 'applicant', internalType: 'address', type: 'address' },
      { name: 'status', internalType: 'enum Reviewers.Status', type: 'uint8' },
    ],
    name: 'NotActiveReviewer',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'NotValidApplicant',
  },
  {
    type: 'error',
    inputs: [
      { name: 'applicant', internalType: 'address', type: 'address' },
      { name: 'status', internalType: 'enum Reviewers.Status', type: 'uint8' },
    ],
    name: 'NotValidReviewer',
  },
  {
    type: 'error',
    inputs: [{ name: 'target', internalType: 'address', type: 'address' }],
    name: 'NotValidTarget',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'OwnableInvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
  {
    type: 'error',
    inputs: [
      { name: 'applicant', internalType: 'address', type: 'address' },
      { name: 'applicationTime', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'TimeGapNotMet',
  },
] as const

/**
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x713265af5418174A15E95C72Bb6d837955B10E05)
 */
export const reviewersAddress = {
  11155111: '0x713265af5418174A15E95C72Bb6d837955B10E05',
} as const

/**
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x713265af5418174A15E95C72Bb6d837955B10E05)
 */
export const reviewersConfig = {
  address: reviewersAddress,
  abi: reviewersAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link reviewersAbi}__
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x713265af5418174A15E95C72Bb6d837955B10E05)
 */
export const useReadReviewers = /*#__PURE__*/ createUseReadContract({
  abi: reviewersAbi,
  address: reviewersAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link reviewersAbi}__ and `functionName` set to `"getAllianceListByDoubted"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x713265af5418174A15E95C72Bb6d837955B10E05)
 */
export const useReadReviewersGetAllianceListByDoubted =
  /*#__PURE__*/ createUseReadContract({
    abi: reviewersAbi,
    address: reviewersAddress,
    functionName: 'getAllianceListByDoubted',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link reviewersAbi}__ and `functionName` set to `"getDoubtDetails"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x713265af5418174A15E95C72Bb6d837955B10E05)
 */
export const useReadReviewersGetDoubtDetails =
  /*#__PURE__*/ createUseReadContract({
    abi: reviewersAbi,
    address: reviewersAddress,
    functionName: 'getDoubtDetails',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link reviewersAbi}__ and `functionName` set to `"getOpposerListByDoubted"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x713265af5418174A15E95C72Bb6d837955B10E05)
 */
export const useReadReviewersGetOpposerListByDoubted =
  /*#__PURE__*/ createUseReadContract({
    abi: reviewersAbi,
    address: reviewersAddress,
    functionName: 'getOpposerListByDoubted',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link reviewersAbi}__ and `functionName` set to `"getReviewerInfo"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x713265af5418174A15E95C72Bb6d837955B10E05)
 */
export const useReadReviewersGetReviewerInfo =
  /*#__PURE__*/ createUseReadContract({
    abi: reviewersAbi,
    address: reviewersAddress,
    functionName: 'getReviewerInfo',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link reviewersAbi}__ and `functionName` set to `"getReviewerList"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x713265af5418174A15E95C72Bb6d837955B10E05)
 */
export const useReadReviewersGetReviewerList =
  /*#__PURE__*/ createUseReadContract({
    abi: reviewersAbi,
    address: reviewersAddress,
    functionName: 'getReviewerList',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link reviewersAbi}__ and `functionName` set to `"getReviewerListByStatus"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x713265af5418174A15E95C72Bb6d837955B10E05)
 */
export const useReadReviewersGetReviewerListByStatus =
  /*#__PURE__*/ createUseReadContract({
    abi: reviewersAbi,
    address: reviewersAddress,
    functionName: 'getReviewerListByStatus',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link reviewersAbi}__ and `functionName` set to `"owner"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x713265af5418174A15E95C72Bb6d837955B10E05)
 */
export const useReadReviewersOwner = /*#__PURE__*/ createUseReadContract({
  abi: reviewersAbi,
  address: reviewersAddress,
  functionName: 'owner',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link reviewersAbi}__
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x713265af5418174A15E95C72Bb6d837955B10E05)
 */
export const useWriteReviewers = /*#__PURE__*/ createUseWriteContract({
  abi: reviewersAbi,
  address: reviewersAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link reviewersAbi}__ and `functionName` set to `"applyReviewer"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x713265af5418174A15E95C72Bb6d837955B10E05)
 */
export const useWriteReviewersApplyReviewer =
  /*#__PURE__*/ createUseWriteContract({
    abi: reviewersAbi,
    address: reviewersAddress,
    functionName: 'applyReviewer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link reviewersAbi}__ and `functionName` set to `"doubt"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x713265af5418174A15E95C72Bb6d837955B10E05)
 */
export const useWriteReviewersDoubt = /*#__PURE__*/ createUseWriteContract({
  abi: reviewersAbi,
  address: reviewersAddress,
  functionName: 'doubt',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link reviewersAbi}__ and `functionName` set to `"quitReviewer"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x713265af5418174A15E95C72Bb6d837955B10E05)
 */
export const useWriteReviewersQuitReviewer =
  /*#__PURE__*/ createUseWriteContract({
    abi: reviewersAbi,
    address: reviewersAddress,
    functionName: 'quitReviewer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link reviewersAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x713265af5418174A15E95C72Bb6d837955B10E05)
 */
export const useWriteReviewersRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: reviewersAbi,
    address: reviewersAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link reviewersAbi}__ and `functionName` set to `"review"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x713265af5418174A15E95C72Bb6d837955B10E05)
 */
export const useWriteReviewersReview = /*#__PURE__*/ createUseWriteContract({
  abi: reviewersAbi,
  address: reviewersAddress,
  functionName: 'review',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link reviewersAbi}__ and `functionName` set to `"reviewDoubt"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x713265af5418174A15E95C72Bb6d837955B10E05)
 */
export const useWriteReviewersReviewDoubt =
  /*#__PURE__*/ createUseWriteContract({
    abi: reviewersAbi,
    address: reviewersAddress,
    functionName: 'reviewDoubt',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link reviewersAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x713265af5418174A15E95C72Bb6d837955B10E05)
 */
export const useWriteReviewersTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: reviewersAbi,
    address: reviewersAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link reviewersAbi}__ and `functionName` set to `"updateDoubtPassRatio"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x713265af5418174A15E95C72Bb6d837955B10E05)
 */
export const useWriteReviewersUpdateDoubtPassRatio =
  /*#__PURE__*/ createUseWriteContract({
    abi: reviewersAbi,
    address: reviewersAddress,
    functionName: 'updateDoubtPassRatio',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link reviewersAbi}__ and `functionName` set to `"updateInfo"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x713265af5418174A15E95C72Bb6d837955B10E05)
 */
export const useWriteReviewersUpdateInfo = /*#__PURE__*/ createUseWriteContract(
  { abi: reviewersAbi, address: reviewersAddress, functionName: 'updateInfo' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link reviewersAbi}__ and `functionName` set to `"updateReviewerPassRatio"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x713265af5418174A15E95C72Bb6d837955B10E05)
 */
export const useWriteReviewersUpdateReviewerPassRatio =
  /*#__PURE__*/ createUseWriteContract({
    abi: reviewersAbi,
    address: reviewersAddress,
    functionName: 'updateReviewerPassRatio',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link reviewersAbi}__ and `functionName` set to `"updateTimeGap"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x713265af5418174A15E95C72Bb6d837955B10E05)
 */
export const useWriteReviewersUpdateTimeGap =
  /*#__PURE__*/ createUseWriteContract({
    abi: reviewersAbi,
    address: reviewersAddress,
    functionName: 'updateTimeGap',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link reviewersAbi}__
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x713265af5418174A15E95C72Bb6d837955B10E05)
 */
export const useSimulateReviewers = /*#__PURE__*/ createUseSimulateContract({
  abi: reviewersAbi,
  address: reviewersAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link reviewersAbi}__ and `functionName` set to `"applyReviewer"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x713265af5418174A15E95C72Bb6d837955B10E05)
 */
export const useSimulateReviewersApplyReviewer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: reviewersAbi,
    address: reviewersAddress,
    functionName: 'applyReviewer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link reviewersAbi}__ and `functionName` set to `"doubt"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x713265af5418174A15E95C72Bb6d837955B10E05)
 */
export const useSimulateReviewersDoubt =
  /*#__PURE__*/ createUseSimulateContract({
    abi: reviewersAbi,
    address: reviewersAddress,
    functionName: 'doubt',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link reviewersAbi}__ and `functionName` set to `"quitReviewer"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x713265af5418174A15E95C72Bb6d837955B10E05)
 */
export const useSimulateReviewersQuitReviewer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: reviewersAbi,
    address: reviewersAddress,
    functionName: 'quitReviewer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link reviewersAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x713265af5418174A15E95C72Bb6d837955B10E05)
 */
export const useSimulateReviewersRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: reviewersAbi,
    address: reviewersAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link reviewersAbi}__ and `functionName` set to `"review"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x713265af5418174A15E95C72Bb6d837955B10E05)
 */
export const useSimulateReviewersReview =
  /*#__PURE__*/ createUseSimulateContract({
    abi: reviewersAbi,
    address: reviewersAddress,
    functionName: 'review',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link reviewersAbi}__ and `functionName` set to `"reviewDoubt"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x713265af5418174A15E95C72Bb6d837955B10E05)
 */
export const useSimulateReviewersReviewDoubt =
  /*#__PURE__*/ createUseSimulateContract({
    abi: reviewersAbi,
    address: reviewersAddress,
    functionName: 'reviewDoubt',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link reviewersAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x713265af5418174A15E95C72Bb6d837955B10E05)
 */
export const useSimulateReviewersTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: reviewersAbi,
    address: reviewersAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link reviewersAbi}__ and `functionName` set to `"updateDoubtPassRatio"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x713265af5418174A15E95C72Bb6d837955B10E05)
 */
export const useSimulateReviewersUpdateDoubtPassRatio =
  /*#__PURE__*/ createUseSimulateContract({
    abi: reviewersAbi,
    address: reviewersAddress,
    functionName: 'updateDoubtPassRatio',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link reviewersAbi}__ and `functionName` set to `"updateInfo"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x713265af5418174A15E95C72Bb6d837955B10E05)
 */
export const useSimulateReviewersUpdateInfo =
  /*#__PURE__*/ createUseSimulateContract({
    abi: reviewersAbi,
    address: reviewersAddress,
    functionName: 'updateInfo',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link reviewersAbi}__ and `functionName` set to `"updateReviewerPassRatio"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x713265af5418174A15E95C72Bb6d837955B10E05)
 */
export const useSimulateReviewersUpdateReviewerPassRatio =
  /*#__PURE__*/ createUseSimulateContract({
    abi: reviewersAbi,
    address: reviewersAddress,
    functionName: 'updateReviewerPassRatio',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link reviewersAbi}__ and `functionName` set to `"updateTimeGap"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x713265af5418174A15E95C72Bb6d837955B10E05)
 */
export const useSimulateReviewersUpdateTimeGap =
  /*#__PURE__*/ createUseSimulateContract({
    abi: reviewersAbi,
    address: reviewersAddress,
    functionName: 'updateTimeGap',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link reviewersAbi}__
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x713265af5418174A15E95C72Bb6d837955B10E05)
 */
export const useWatchReviewersEvent = /*#__PURE__*/ createUseWatchContractEvent(
  { abi: reviewersAbi, address: reviewersAddress },
)

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link reviewersAbi}__ and `eventName` set to `"ApplicationApproved"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x713265af5418174A15E95C72Bb6d837955B10E05)
 */
export const useWatchReviewersApplicationApprovedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: reviewersAbi,
    address: reviewersAddress,
    eventName: 'ApplicationApproved',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link reviewersAbi}__ and `eventName` set to `"ApplicationDeclined"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x713265af5418174A15E95C72Bb6d837955B10E05)
 */
export const useWatchReviewersApplicationDeclinedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: reviewersAbi,
    address: reviewersAddress,
    eventName: 'ApplicationDeclined',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link reviewersAbi}__ and `eventName` set to `"ApplicationReviewed"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x713265af5418174A15E95C72Bb6d837955B10E05)
 */
export const useWatchReviewersApplicationReviewedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: reviewersAbi,
    address: reviewersAddress,
    eventName: 'ApplicationReviewed',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link reviewersAbi}__ and `eventName` set to `"DoubtClosed"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x713265af5418174A15E95C72Bb6d837955B10E05)
 */
export const useWatchReviewersDoubtClosedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: reviewersAbi,
    address: reviewersAddress,
    eventName: 'DoubtClosed',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link reviewersAbi}__ and `eventName` set to `"DoubtRaised"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x713265af5418174A15E95C72Bb6d837955B10E05)
 */
export const useWatchReviewersDoubtRaisedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: reviewersAbi,
    address: reviewersAddress,
    eventName: 'DoubtRaised',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link reviewersAbi}__ and `eventName` set to `"DoubtReviewed"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x713265af5418174A15E95C72Bb6d837955B10E05)
 */
export const useWatchReviewersDoubtReviewedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: reviewersAbi,
    address: reviewersAddress,
    eventName: 'DoubtReviewed',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link reviewersAbi}__ and `eventName` set to `"NewApplication"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x713265af5418174A15E95C72Bb6d837955B10E05)
 */
export const useWatchReviewersNewApplicationEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: reviewersAbi,
    address: reviewersAddress,
    eventName: 'NewApplication',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link reviewersAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x713265af5418174A15E95C72Bb6d837955B10E05)
 */
export const useWatchReviewersOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: reviewersAbi,
    address: reviewersAddress,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link reviewersAbi}__ and `eventName` set to `"ReviewerExpelled"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x713265af5418174A15E95C72Bb6d837955B10E05)
 */
export const useWatchReviewersReviewerExpelledEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: reviewersAbi,
    address: reviewersAddress,
    eventName: 'ReviewerExpelled',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link reviewersAbi}__ and `eventName` set to `"ReviewerInfoUpdated"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x713265af5418174A15E95C72Bb6d837955B10E05)
 */
export const useWatchReviewersReviewerInfoUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: reviewersAbi,
    address: reviewersAddress,
    eventName: 'ReviewerInfoUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link reviewersAbi}__ and `eventName` set to `"ReviewerQuitted"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x713265af5418174A15E95C72Bb6d837955B10E05)
 */
export const useWatchReviewersReviewerQuittedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: reviewersAbi,
    address: reviewersAddress,
    eventName: 'ReviewerQuitted',
  })
