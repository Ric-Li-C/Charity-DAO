import { ReactNode } from 'react'

export default function SectionWrapper({
	title,
	children,
}: {
	title: string
	children: ReactNode
}) {
	return (
		<div className="border-2 border-brown-750 rounded-lg mb-6 p-4 leading-loose max-w-[1200px] mx-auto">
			<div className="flex justify-center w-full text-brown-750 text-2xl font-bold">
				{title}
			</div>
			<hr className="m-4 border-t-1 border-gray-300" />
			<div className="flex justify-center">{children}</div>
		</div>
	)
}
