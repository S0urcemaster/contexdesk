
export type System = {
	name: string
	definition: string
	currentRequest?: number
	requests: Request[]
}

export type Request = {
	request: string
	response: string
	model: string
}

export type App = {
	currentSystem: number
	systems: System[]
}

export const emptyModel: App = {
	currentSystem: 0,
	systems: [
		{
			name: '',
			definition: '',
			requests: [
				{
					request: '',
					response: '',
					model: ''
				}
			]
		}
	]
}

export const defaultModel: App = {
	currentSystem: 0,
	systems: [
		{
			name: 'default',
			definition: 'default',
			requests: [
				{
					request: 'default',
					response: 'default',
					model: 'default'
				}
			]
		},
		{
			name: 'individual',
			definition: 'default',
			requests: [
				{
					request: 'default',
					response: 'default',
					model: 'default'
				}
			]
		},
	]
}