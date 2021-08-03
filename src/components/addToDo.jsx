import React from "react";
import "./addTodo.css"
import TodoForm from "./toDoForm";

class AddTodo extends React.Component {
	showAddForm = () => {
		this.props.onForm();
	}

	render() {
		return (
			<>
			{
				this.props.status ? (
					<TodoForm 
						status={this.props.status} 
						onHide={this.props.onHide}
						onAdd={this.props.onAdd}
					/>
				) : (
					<div className="add__todo">
						<button onClick={this.showAddForm}>
						<i className="fas fa-plus"></i>
						</button>
						<span>Add a card</span>
					</div>
				)
			}
			</>
		)
	}
}

export default AddTodo;