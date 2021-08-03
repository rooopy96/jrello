import React from "react";
import "./toDoList.css";

const TodoList = props => {
	const deleteTodo = () => {
		props.onDelete(props.name)
	}
	
	return (
		<>
			<li className="todo-list">
				<span className="list-title">{props.name}</span>
				<button onClick={deleteTodo} className="list-delete">
					<i className="fas fa-trash-alt"></i>
				</button>
			</li>
		</>
	)
}

export default TodoList;