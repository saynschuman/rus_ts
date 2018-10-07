export const TEST = 'TEST'
export type TEST = typeof TEST

export const moduleName = 'test'

export default function reducer(state, action) {
    return state
}

export const showType = () => {
	return {
		type: "TEST"
	}
}