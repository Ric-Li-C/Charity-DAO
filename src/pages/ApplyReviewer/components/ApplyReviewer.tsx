import { useState } from 'react'
import { type Address } from 'viem'
import Apply from './Apply'

interface ApplyReviewerProps {
	address: Address
}

function ApplyReviewer({ address }: ApplyReviewerProps) {
	const [nameText, setNameText] = useState('')
	const [introText, setIntroText] = useState('')
	const [emailText, setEmailText] = useState('')
	const [twitterText, setTwitterText] = useState('')
	const [telegramText, setTelegramText] = useState('')

	return (
		<div className="mx-16 grid grid-cols-[200px_1fr] gap-2 items-center">
			<div className="text-gray-700 mb-2">Wallet Address:</div>
			<div className="text-gray-700 mb-2">{address}</div>
			<div className="text-gray-700 mb-2">
				Name<span className="text-red-500 font-bold">*</span>:
			</div>
			<div className="mb-2">
				<input
					className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 w-[600px]"
					type="text"
					value={nameText}
					onChange={(e) => setNameText(e.target.value)}
					placeholder="Please enter your name here"
				/>
			</div>
			<div className="text-gray-700 mb-2">
				Introduction<span className="text-red-500 font-bold">*</span>:
			</div>
			<div className="mb-2 text-justify">
				<textarea
					className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none w-[600px]"
					rows={9}
					value={introText}
					onChange={(e) => setIntroText(e.target.value)}
					placeholder="Please enter personal information here"
				></textarea>
			</div>
			<div className="text-gray-700 mb-2">
				Email<span className="text-red-500 font-bold">*</span>:
			</div>
			<div className="mb-2">
				<input
					className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 w-[600px]"
					type="text"
					value={emailText}
					onChange={(e) => setEmailText(e.target.value)}
					placeholder="Please enter email here"
				/>
			</div>
			<div className="text-gray-700 mb-2">Twitter:</div>
			<div className="mb-2">
				<input
					className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 w-[600px]"
					type="text"
					value={twitterText}
					onChange={(e) => setTwitterText(e.target.value)}
					placeholder="Please enter twitter account here"
				/>
			</div>
			<div className="text-gray-700 mb-2">Telegram:</div>
			<div className="mb-2">
				<input
					className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 w-[600px]"
					type="text"
					value={telegramText}
					onChange={(e) => setTelegramText(e.target.value)}
					placeholder="Please enter telegram account here"
				/>
			</div>
			<div className="mb-2"></div>
			<div className="mb-2">
				<Apply
					name={nameText}
					intro={introText}
					email={emailText}
					twitter={twitterText}
					telegram={telegramText}
				/>
			</div>
		</div>
	)
}

export default ApplyReviewer
