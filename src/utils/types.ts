export const StatusText: { [key: number]: string } = {
	0: 'Pending',
	1: 'Declined',
	2: 'Active',
	3: 'Quitted',
	4: 'Doubted',
	5: 'Expelled',
}

export const Status = {
	Pending: 0,
	Declined: 1,
	Active: 2,
	Quitted: 3,
	Doubted: 4,
	Expelled: 5,
} as const

export type Status = (typeof Status)[keyof typeof Status]
