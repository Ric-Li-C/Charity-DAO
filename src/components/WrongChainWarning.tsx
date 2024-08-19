import React from 'react'

const WrongChainWarning: React.FC = () => {
	return (
		<div className="flex justify-center items-center h-32">
			<p className="text-red-500 text-lg font-bold">
				Please connect to Sepolia chain only.
			</p>
		</div>
	)
}

export default WrongChainWarning
