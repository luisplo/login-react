import { GET_USERS, GET_ROLE, GET_PROFILE, SET_USER, SAVE_USER } from '../types'

export default (state, action) => {

	const { type, payload } = action

	switch (type) {
		case GET_USERS:
			return {
				...state,
				users: payload
			}
		case GET_ROLE:
			return {
				...state,
				role: payload
			}
		case GET_PROFILE:
			return {
				...state,
				selectedUser: payload
			}
		case SET_USER:
			return {
				...state,
				selectedUser: payload,
			}
		case SAVE_USER:
			return {
				...state,
				users: state.users.concat(payload),
			}
		default:
			return state
	}

}