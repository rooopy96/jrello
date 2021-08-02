import React from "react";
import "./toDoForm.css";

const TodoForm = () => {
	return (
		<form className="todo__form">
			<textarea type="text" placeholder="Enter a title for a this card..."/>
			<div className="form__btns">
				<button className="form__add-btn">Add card</button>
				<button className="form__cancel-btn">
					<i className="fas fa-times"></i>
				</button>
			</div>
		</form>
	)
}

export default TodoForm;