import { useState } from 'react'
import { type Address } from 'viem'
import { Status, StatusText } from '../../../utils/types'
import Update from './Update'
import Quit from './Quit'

interface UpdateInfoProps {
	address: Address
	reviewerInfo: {
		name: string
		intro: string
		email: string
		twitter: string
		telegram: string
		status: number
	}
}

function UpdateInfo({ address, reviewerInfo }: UpdateInfoProps) {
	const [status, setStatus] = useState(reviewerInfo.status)
	const [introText, setIntroText] = useState(reviewerInfo.intro)
	const [emailText, setEmailText] = useState(reviewerInfo.email)
	const [twitterText, setTwitterText] = useState(reviewerInfo.twitter)
	const [telegramText, setTelegramText] = useState(reviewerInfo.telegram)
	const [reasonText, setReasonText] = useState('')

	const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedStatus = parseInt(e.target.value, 10)
		setStatus(selectedStatus)

		if (selectedStatus === Status.Quitted) {
			setIntroText(reviewerInfo.intro)
			setEmailText(reviewerInfo.email)
			setTwitterText(reviewerInfo.twitter)
			setTelegramText(reviewerInfo.telegram)
		}
	}

	return (
		<div className="mx-16 grid grid-cols-[200px_1fr] gap-2 items-center">
			<div className="text-gray-700 mb-2">Wallet Address:</div>
			<div className="text-gray-700 mb-2">{address}</div>
			<div className="text-gray-700 mb-2">Name:</div>
			<div className="mb-2">{reviewerInfo.name}</div>
			<div className="text-gray-700 mb-2">
				Introduction<span className="text-red-500 font-bold">*</span>:
			</div>
			<div className="mb-2">
				<textarea
					className="px-4 py-2 text-justify border border-gray-300 rounded 
							focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 
							resize-none w-[600px] ${status === Status.Quitted ? 'bg-gray-200' : ''}`"
					rows={9}
					value={introText}
					onChange={(e) => setIntroText(e.target.value)}
					disabled={status === Status.Quitted}
				></textarea>
			</div>
			<div className="text-gray-700 mb-2">Email:</div>
			<div className="mb-2">
				<input
					className="px-4 py-2 border border-gray-300 rounded 
							focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500
							w-[600px] ${status === Status.Quitted ? 'bg-gray-200' : ''}`"
					type="text"
					value={emailText}
					onChange={(e) => setEmailText(e.target.value)}
					disabled={status === Status.Quitted}
				/>
			</div>
			<div className="text-gray-700 mb-2">Twitter:</div>
			<div className="mb-2">
				<input
					className="px-4 py-2 border border-gray-300 rounded 
							focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500
							w-[600px] ${status === Status.Quitted ? 'bg-gray-200' : ''}`"
					type="text"
					value={twitterText}
					onChange={(e) => setTwitterText(e.target.value)}
					disabled={status === Status.Quitted}
				/>
			</div>
			<div className="text-gray-700 mb-2">Telegram:</div>
			<div className="mb-2">
				<input
					className="px-4 py-2 border border-gray-300 rounded 
							focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500
							w-[600px] ${status === Status.Quitted ? 'bg-gray-200' : ''}`"
					type="text"
					value={telegramText}
					onChange={(e) => setTelegramText(e.target.value)}
					disabled={status === Status.Quitted}
				/>
			</div>
			<div className="text-gray-700 mb-2">Status:</div>
			<div className="mb-2">
				<select
					className="px-4 py-2 rounded-md border border-gray-300 
							focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
					value={status}
					onChange={handleStatusChange}
				>
					<option value={reviewerInfo.status}>
						{StatusText[reviewerInfo.status]}
					</option>
					<option value={Status.Quitted}>Quit</option>
				</select>
			</div>
			{status !== Status.Quitted && (
				<>
					<div className="mb-2"></div>
					<div className="mb-2">
						<Update
							intro={introText}
							email={emailText}
							twitter={twitterText}
							telegram={telegramText}
						/>
					</div>
				</>
			)}
			{status === Status.Quitted && (
				<>
					<div className="text-gray-700 mb-2">Reason:</div>
					<div className="mb-2">
						<textarea
							className="px-4 py-2 text-justify border border-gray-300 rounded 
									focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none w-[600px]"
							rows={6}
							value={reasonText}
							onChange={(e) => setReasonText(e.target.value)}
							placeholder="Please enter reason here"
						></textarea>
					</div>
					<div className="mb-2"></div>
					<div className="mb-2">
						<Quit reason={reasonText} />
					</div>
				</>
			)}
		</div>
	)
}

export default UpdateInfo
