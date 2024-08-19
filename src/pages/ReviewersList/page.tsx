import { useState } from 'react'
import { type Address } from 'viem'
import { Status } from '../../utils/types'
import {
	useReadReviewersGetReviewerListByStatus,
	useReadReviewersGetReviewerInfo,
} from '../../hooks/Reviewers'
import LoadingSpinner from '../../components/LoadingSpinner'
import WarningMessage from '../../components/WarningMessage'
import ReviewerItem from './components/ReviewerItem'
import SectionWrapper from '../../components/SectionWrapper'
import ReviewerDetails from './components/ReviewerDetails'

function ListPage() {
	const [selectedReviewer, setSelectedReviewer] = useState<Address | null>(
		null
	)

	const {
		data: activeReviewers,
		isLoading: isActiveLoading,
		isError: isActiveError,
	} = useReadReviewersGetReviewerListByStatus({
		args: [Status.Active],
	})

	const {
		data: doubtedReviewers,
		isLoading: isDoubtedLoading,
		isError: isDoubtedError,
	} = useReadReviewersGetReviewerListByStatus({
		args: [Status.Doubted],
	})

	const reviewers = [...(activeReviewers || []), ...(doubtedReviewers || [])]
	const isLoading = isActiveLoading || isDoubtedLoading
	const isError = isActiveError || isDoubtedError

	const {
		data: reviewerInfo,
		isLoading: isReviewerInfoLoading,
		isError: isReviewerInfoError,
	} = useReadReviewersGetReviewerInfo({
		args: selectedReviewer ? [selectedReviewer] : undefined,
	})

	const handleViewDetails = (reviewer: Address) => {
		setSelectedReviewer(reviewer)
	}

	return (
		<div>
			<SectionWrapper title="Reviewers List">
				{isLoading && <LoadingSpinner />}
				{isError && (
					<WarningMessage message="An error occurred. Please try again later." />
				)}

				{reviewers && (
					<ul className="divide-y divide-gray-200">
						{reviewers.map((reviewer, index) => (
							<ReviewerItem
								key={index}
								index={index}
								reviewer={reviewer}
								onViewDetails={handleViewDetails}
							/>
						))}
					</ul>
				)}
			</SectionWrapper>

			{selectedReviewer && (
				<SectionWrapper title="Reviewer Details">
					{isReviewerInfoLoading && <LoadingSpinner />}
					{isReviewerInfoError && (
						<WarningMessage message="An error occurred. Please try again later." />
					)}

					{reviewerInfo && (
						<ReviewerDetails
							address={selectedReviewer ?? '0x'}
							reviewerInfo={reviewerInfo}
						/>
					)}
				</SectionWrapper>
			)}
		</div>
	)
}

export default ListPage
