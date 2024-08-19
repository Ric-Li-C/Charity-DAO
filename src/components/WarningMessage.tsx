function WarningMessage({ message }: { message: string }) {
	return (
		<div className="flex justify-center items-center h-32">
			<div className="text-red-500 text-lg font-bold">{message}</div>
		</div>
	)
}

export default WarningMessage
