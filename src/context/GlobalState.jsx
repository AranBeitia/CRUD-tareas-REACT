import React, { createContext } from 'react'
import axios from 'axios'

const initialState = {
	tasks: [],
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState)

	const getTasks = async () => {
		const res = await axios.get('http://localhost:3001/tasks')
		dispatch({
			type: 'GET_TASKS',
			payload: res.data,
		})
	}

	return (
		<GlobalContext.Provider
			value={{
				tasks: state.tasks,
				getTasks,
			}}
		>
			{children}
		</GlobalContext.Provider>
	)
}
