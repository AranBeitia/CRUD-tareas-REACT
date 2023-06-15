import React, { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { GlobalContext } from '../../context/GlobalState'

const EditTask = () => {
	const { task, getTask, editTask } = useContext(GlobalContext)
	const [title, setTitle] = useState('')
	const { _id } = useParams()
	const navigate = useNavigate()

	const handleSubmit = (event) => {
		event.preventDefault()
		editTask(task._id, { title })
		setTimeout(() => {
			navigate('/')
		}, 1000)
	}

	useEffect(() => {
		getTask(_id)
	}, [])

	useEffect(() => {
		setTitle(task.title)
	}, [task.title])

	return (
		<>
			<h1>Edit task {task.title}</h1>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					onChange={(e) => setTitle(e.target.value)}
					value={title || ''}
					name="title"
				/>
				<button type="submit">Edit task</button>
			</form>{' '}
		</>
	)
}

export default EditTask
