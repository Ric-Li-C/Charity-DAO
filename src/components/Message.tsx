function Message({ message }: { message: string }) {
	return (
		<>
			<div className="h-6"></div>
			<div className="text-lg italic">{message}</div>
		</>
	)
}

export default Message
