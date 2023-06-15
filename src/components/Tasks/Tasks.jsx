import React from 'react'
import Task from './Task/Task'
import AddTask from '../AddTask/AddTask'

const Tasks = () => {
	return (
		<>
			<h1>Tasks</h1>
			<AddTask />
			<Task />
		</>
	)
}

export default Tasks
