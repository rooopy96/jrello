import React from 'react';
import AddTodo from './addToDo';
import "./toDo.css";
import TodoList from './toDoList';

const ToDo = () => {

	return (
		<div className="toDo">
			<div className="lists-nav">
				<span className="lists-title">ToDo</span>
				<i className="fas fa-ellipsis-h"></i>
			</div>
			<ul className="lists">
				<TodoList />
			</ul>
			<AddTodo />
		</div>
	)
}

export default ToDo;