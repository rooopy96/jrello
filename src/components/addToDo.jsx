import React from "react";
import { useState } from "react";
import "./addTodo.css"
import TodoForm from "./toDoForm";

class AddTodo extends React.Component {
	state = {
		showForm: false
	}

	showAddForm = () => {
		this.setState({ showForm: true });
	}

	render() {
		return (
			<>
			{
				this.state.showForm ? (
					<TodoForm />
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