import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../../../context/GlobalState'
import { Link } from 'react-router-dom'

const Task = () => {
	const { tasks, getTasks, deleteTask } = useContext(GlobalContext)

	useEffect(() => {
		getTasks()
	}, [])

	return (
		tasks &&
		tasks.map((task) => (
			<div className="task" key={task._id}>
				<h1>{task.title}</h1>
				<button onClick={() => deleteTask(task._id)}>X</button>
				<Link to={'/task/' + task._id}>Edit</Link>
			</div>
		))
	)
}

export default Task
