import React from "react";
import { useState } from "react";

	const Home = () => {
	const [newTask, setNewTask] = useState ('');
	const [taskList, setTaskList] = useState ([]);


	const onChange = (event) => {
		setNewTask(event.target.value);
	}
	const deleteTask = (taskToDelete) => {
		setTaskList(taskList.filter(task => task !== taskToDelete));
	}
	const onKeyDown = (event) => {
		if (event.keyCode === 13) {
		event.preventDefault();
		if (newTask !== '') {
			setTaskList([...taskList, newTask]);
			setNewTask('');
		}
		}
	};
	const onClick = (event) => {
		event.preventDefault();
		if (newTask !== '') {setTaskList([...taskList, newTask]);
			setNewTask('');}
	}

		return (
			<div className="list">
				<h3>Todos</h3>
					<div className="card">
							<form onChange={onChange} onSubmit={onClick}>
								<input placeholder="add your task" className="task" onKeyDown={onKeyDown} value={newTask} />
							</form>
						<div className="taskButton">
						{taskList.length === 0 ? ("") :(
							taskList.map((task,index) => <p className="taskItem" key={index}> {task} <button  onClick={() => deleteTask(task)}>❌</button> </p>))}
						</div>
						<div>
						<p className="itemLeft">{taskList.length} Item{taskList.length !== 1 ? 's' : ''} left</p>
						</div>
					</div>
			</div>
		);
	};
export default Home;