import React from 'react'
import { type Address } from 'viem'

interface ReviewerDetailsProps {
	address: Address
	reviewerInfo: {
		name: string
		intro: string
		email: string
		twitter: string
		telegram: string
		applicationTime: bigint
	}
}

const ReviewerDetails: React.FC<ReviewerDetailsProps> = ({
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
		</div>
	)
}

export default ReviewerDetails
