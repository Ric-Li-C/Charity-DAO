'use client'

import { BaseError } from 'viem'
import { useEffect, useRef } from 'react'
import { useWaitForTransactionReceipt } from 'wagmi'
import {
	useSimulateReviewersApplyReviewer,
	useWriteReviewersApplyReviewer,
} from '../../../hooks/Reviewers'
import WarningMessage from '../../../components/WarningMessage'
import Message from '../../../components/Message'

interface ApplyProps {
	name: string
	intro: string
	email: string
	twitter: string
	telegram: string
}

function Apply({ name, intro, email, twitter, telegram }: ApplyProps) {
	const errorRef = useRef<HTMLDivElement | null>(null)
	const messageRef = useRef<HTMLDivElement | null>(null)

	const { data, error: simError } = useSimulateReviewersApplyReviewer({
		args: [name, intro, email, twitter, telegram],
	})

	const {
		data: hash,
		isPending,
		error,
		writeContract,
	} = useWriteReviewersApplyReviewer()

	const {
		isLoading,
		isSuccess,
		error: txError,
	} = useWaitForTransactionReceipt({
		confirmations: 1,
		hash,
	})

	let errorText = ''

	if (simError || error || txError) {
		if (txError) {
			errorText += 'Transaction '
		}

		errorText += 'Error'

		if (simError) {
			errorText += ' preparing'
		}

		errorText += ': '

		const baseError = (simError || error || txError) as BaseError
		errorText += baseError?.shortMessage
	}

	useEffect(() => {
		if (errorText && errorRef.current) {
			errorRef.current.scrollIntoView({ behavior: 'smooth' })
		}
	}, [errorText, errorRef])

	useEffect(() => {
		if (isSuccess && messageRef.current) {
			messageRef.current.scrollIntoView({ behavior: 'smooth' })
		}
	}, [isSuccess, messageRef])

	return (
		<>
			{!errorText && !isPending && !isLoading && data && !isSuccess && (
				<button
					className="px-4 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 whitespace-nowrap"
					onClick={() => writeContract(data!.request)}
				>
					Apply to be a Reviewer
				</button>
			)}

			{isPending && !isLoading && (
				<button className="px-4 py-1 bg-red-500 bg-opacity-50 text-white rounded-md whitespace-nowrap">
					Waiting approval from wallet
				</button>
			)}

			{isLoading && (
				<button className="px-4 py-1 bg-gray-700 bg-opacity-20 animate-pulse text-white rounded-md whitespace-nowrap">
					Applying
				</button>
			)}

			{errorText && (
				<div ref={errorRef}>
					<WarningMessage message={errorText} />
				</div>
			)}

			{isSuccess && (
				<div ref={messageRef}>
					<Message message="Application submitted successfully" />
				</div>
			)}
		</>
	)
}

export default Apply
