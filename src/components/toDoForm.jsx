import React from "react";
import "./toDoForm.css";

const TodoForm = (props) => {
	const inputRef = React.createRef(); 
	const addTodoList = (e) => {
		props.onAdd(inputRef.current.value);
		inputRef.current.value = "";
		e.preventDefault();
	}

	const cancelAddForm = (e) => {
		props.onHide();
		e.preventDefault();
	}

	return (
		<form className="todo__form" onSubmit={addTodoList} >
			<textarea ref={inputRef} type="text" placeholder="Enter a title for a this card..."/>
			<div className="form__btns">
				<button className="form__add-btn">Add card</button>
				<button className="form__cancel-btn" onClick={cancelAddForm}>
					<i className="fas fa-times"></i>
				</button>
			</div>
		</form>
	)
}

export default TodoForm;