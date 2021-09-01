import React, { useEffect, useReducer } from 'react'
import axios from 'axios'
import { UserContext } from './UserContext'
import UserReducer from './UserReducer'

const UserState = (props) => {

	const initialState = {
		users: [],
		selectedUser: null,
		role: ['Administrador', 'Coordinador']
	}

	const [state, dispatch] = useReducer(UserReducer, initialState, () => {
		// Persistent data
		const localData = sessionStorage.getItem('state')
		return localData ? JSON.parse(localData) : initialState
	})

	const getUsers = () => {
		dispatch({
			type: 'GET_USERS',
			payload: state.users
		})
	}

	const setLogout = () => {
		dispatch({
			type: 'SET_USER',
			payload: null
		})
	}

	const validateUser = async (data) => {
		let result = state.users.filter(user => user.email === data.email && user.password === data.password)[0]
		dispatch({
			type: 'SET_USER',
			payload: result
		})
		return result
	}

	const setUser = async (data) => {
		let result = state.users.filter(user => user.email === data.email)[0]
		if (!result) {
			let orderData = {
				name: data.name,
				email: data.email,
				role: data.role,
				password: data.password
			}
			dispatch({
				type: 'SAVE_USER',
				payload: orderData
			})
			return orderData
		}
	}



	useEffect(() => {
		sessionStorage.setItem('state', JSON.stringify(state))
	}, [state])

	return (
		<UserContext.Provider value={{
			users: state.users,
			selectedUser: state.selectedUser,
			getUsers,
			validateUser,
			setUser,
			setLogout
		}} >
			{props.children}
		</UserContext.Provider >
	)
}

export default UserState

