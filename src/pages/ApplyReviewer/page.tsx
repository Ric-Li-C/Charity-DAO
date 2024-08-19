import { useAccount } from 'wagmi'
import { Status } from '../../utils/types'
import { useReadReviewersGetReviewerInfo } from '../../hooks/Reviewers'
import LoadingSpinner from '../../components/LoadingSpinner'
import WarningMessage from '../../components/WarningMessage'
import SectionWrapper from '../../components/SectionWrapper'
import ReviewerInfo from './components/ReviewerInfo'
import ApplyReviewer from './components/ApplyReviewer'

function ApplyPage() {
	const { address, isConnected } = useAccount()

	const {
		data: reviewerInfo,
		isLoading,
		isError,
	} = useReadReviewersGetReviewerInfo({
		args: [address || '0x'],
	})

	return (
		<div>
			{isConnected ? (
				isLoading ? (
					<SectionWrapper title="Apply to be a Reviewer">
						<LoadingSpinner />
					</SectionWrapper>
				) : isError ? (
					<SectionWrapper title="Apply to be a Reviewer">
						<WarningMessage message="An error occurred. Please try again later." />
					</SectionWrapper>
				) : reviewerInfo?.email &&
				  reviewerInfo?.status !== Status.Pending ? (
					<SectionWrapper title="You are already a Reviewer">
						<ReviewerInfo
							address={address ?? '0x'}
							reviewerInfo={reviewerInfo}
						/>
					</SectionWrapper>
				) : (
					<SectionWrapper title="Apply to be a Reviewer">
						<ApplyReviewer address={address ?? '0x'} />
					</SectionWrapper>
				)
			) : (
				<SectionWrapper title="Apply to be a Reviewer">
					<WarningMessage message="Please connect wallet first." />
				</SectionWrapper>
			)}
		</div>
	)
}

export default ApplyPage
