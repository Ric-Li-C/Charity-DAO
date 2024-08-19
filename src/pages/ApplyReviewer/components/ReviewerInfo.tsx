import React from 'react'
import { type Address } from 'viem'
import { StatusText } from '../../../utils/types'

interface ReviewerInfoProps {
	address: Address
	reviewerInfo: {
		name: string
		intro: string
		email: string
		twitter: string
		telegram: string
		status: number
		applicationTime: bigint
		quitReason: string
	}
}

const ReviewerInfo: React.FC<ReviewerInfoProps> = ({
	address,
	reviewerInfo,
}) => {
	return (
		<div className="mx-16 grid grid-cols-[200px_1fr] gap-2 items-start">
			<div className="text-gray-700 mb-2">Name:</div>
			<div className="text-gray-700 mb-2">{reviewerInfo.name}</div>
			<div className="text-gray-700 mb-2">Wallet Address:</div>
			<div className="text-gray-700 mb-2">{address}</div>
			<div className="text-gray-700 mb-2">Introduction:</div>
			<div className="text-gray-700 mb-2 text-justify">
				{reviewerInfo.intro}
			</div>
			<div className="text-gray-700 mb-2">Email:</div>
			<div className="text-gray-700 mb-2">{reviewerInfo.email}</div>
			<div className="text-gray-700 mb-2">Twitter:</div>
			<div className="text-gray-700 mb-2">{reviewerInfo.twitter}</div>
			<div className="text-gray-700 mb-2">Telegram:</div>
			<div className="text-gray-700 mb-2">{reviewerInfo.telegram}</div>
			<div className="text-gray-700 mb-2">Application Time:</div>
			<div className="text-gray-700 mb-2">
				{new Date(Number(reviewerInfo.applicationTime)).toLocaleString(
					'en-US',
					{
						year: 'numeric',
						month: 'short',
						day: 'numeric',
						hour: 'numeric',
						minute: 'numeric',
						second: 'numeric',
					}
				)}
			</div>
			<div className="text-gray-700 mb-2">Status:</div>
			<div className="text-gray-700 mb-2">
				{StatusText[reviewerInfo.status]}
			</div>
			{reviewerInfo.quitReason && (
				<>
					<div className="text-gray-700 mb-2">Reason:</div>
					<div className="text-gray-700 mb-2">
						{reviewerInfo.quitReason}
					</div>
				</>
			)}
		</div>
	)
}

export default ReviewerInfo
