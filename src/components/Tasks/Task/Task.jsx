import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../../context/GlobalState'

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
				<Link to={`/task/${task._id}`}>Edit</Link>
				<button onClick={() => deleteTask(task._id)}>X</button>
			</div>
		))
	)
}

export default Task
