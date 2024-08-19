import { useAccount } from 'wagmi'
import { Status } from '../../utils/types'
import { useReadReviewersGetReviewerInfo } from '../../hooks/Reviewers'
import LoadingSpinner from '../../components/LoadingSpinner'
import WarningMessage from '../../components/WarningMessage'
import SectionWrapper from '../../components/SectionWrapper'
import UpdateInfo from './components/UpdateInfo'

function UpdatePage() {
	const { address, isConnected } = useAccount()

	const {
		data: reviewerInfo,
		isLoading,
		isError,
	} = useReadReviewersGetReviewerInfo({
		args: [address || '0x'],
	})

	return (
		<SectionWrapper title="Update Reviewer Information">
			{isConnected ? (
				<>
					{isLoading && <LoadingSpinner />}
					{isError && (
						<WarningMessage message="An error occurred. Please try again later." />
					)}

					{reviewerInfo && (
						<>
							{reviewerInfo.status === Status.Active ||
							reviewerInfo.status === Status.Doubted ? (
								<UpdateInfo
									address={address ?? '0x'}
									reviewerInfo={reviewerInfo}
								/>
							) : (
								<WarningMessage message="Only accessible to current reviewers." />
							)}
						</>
					)}
				</>
			) : (
				<WarningMessage message="Please connect wallet first." />
			)}
		</SectionWrapper>
	)
}

export default UpdatePage
