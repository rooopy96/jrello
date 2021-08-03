import React from "react";
import "./addBoardForm.css";

const AddBoardForm = (props) => {
	const inputRef = React.createRef();

	const hideAddForm = (e) => {
		props.onHide();
		e.preventDefault();
	}

	const addForm = e => {
		props.onAdd(inputRef.current.value);
		e.preventDefault();
	}

	return (
		<div className="addBoardPage">
			<form className="addBoardForm" onSubmit={addForm}>
				<input ref={inputRef} type="text" placeholder="Add board title" />
			</form>
			<button className="addBoardForm-hideBtn" onClick={hideAddForm}>
				<i className="fas fa-times"></i>
			</button>
			<button className="addBoard-createBtn" onClick={addForm}>Create board</button>
		</div>
	)
}

export default AddBoardForm;