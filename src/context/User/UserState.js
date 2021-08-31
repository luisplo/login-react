import React, { useEffect, useReducer } from 'react'
import axios from 'axios'
import { UserContext } from './UserContext'
import UserReducer from './UserReducer'
import { toast } from 'react-toastify'

const UserState = (props) => {


	const URL_API = 'https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinners.json'

	const initialState = {
		users: [{
			email: 'luisreyes.apolo@gmail.com',
			password: '123456789',
			role: 'Administrador'
		}],
		selectedUser: null,
		role: ['Administrador', 'Coordinador']
	}

	const [state, dispatch] = useReducer(UserReducer, initialState, () => {
		// Persistent data
		const localData = localStorage.getItem('state')
		return localData ? JSON.parse(localData) : initialState
	})

	const getUsers = () => {
		dispatch({
			type: 'GET_USERS',
			payload: state.users
		})
	}

	const getProfile = () => {
		dispatch({
			type: 'GET_PROFILE',
			payload: 'Hola Mundo desde Context Users'
		})
	}

	const validateUser = async (data) => {
		let result
		if (state.users.length > 0) {
			result = state.users.filter(user => user.email == data.email)[0]
		} else {
			result = initialState.users.filter(user => user.email == data.email && user.password == data.password)[0]
		}
		dispatch({
			type: 'SET_USER',
			payload: result
		})
		return result
	}

	const setUser = async (data) => {
		// dispatch({
		// 	type: 'SET_USER',
		// 	payload: { user: res.data.user, role: res.data.role, token: res.data.token }
		// })
		return data
		// toast.success(`Bienvenido. ${res.data.user.name}`)
	}

	const setLogout = async () => {
		const res = await axios.post(`${URL_API}/validate/token`)
		console.log('res', res)
		// dispatch({
		// 	type: 'SET_USER',
		// 	payload: null
		// })
		// toast.success(`Sesión cerrada con éxito. ${res.data.user.name}`)

	}

	useEffect(() => {
		localStorage.setItem('state', JSON.stringify(state))
	}, [state])

	return (
		<UserContext.Provider value={{
			users: state.users,
			selectedUser: state.selectedUser,
			getUsers,
			validateUser,
			getProfile,
			setUser,
			setLogout
		}} >
			{props.children}
		</UserContext.Provider >
	)
}

export default UserState

