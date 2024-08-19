import { type Address } from 'viem'

interface ReviewerItemProps {
	index: number
	reviewer: Address
	onViewDetails: (reviewer: Address) => void
}

function ReviewerItem({ index, reviewer, onViewDetails }: ReviewerItemProps) {
	return (
		<li className="py-4 flex items-center justify-center">
			<div className="flex items-center">
				<span className="mr-8 text-gray-900">{index + 1}.</span>
				<span className="mr-20 font-medium text-gray-900">
					{reviewer}
				</span>
				<button
					className="px-4 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 whitespace-nowrap"
					onClick={() => onViewDetails(reviewer)}
				>
					View Details
				</button>
			</div>
		</li>
	)
}

export default ReviewerItem
