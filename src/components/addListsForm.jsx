import React from "react";
import "./addListsForm.css";

const AddListsForm = (props) => {
	const hideForm = (e) => {
		props.onHide();
		e.preventDefault();
	}

	const showAddBoard = (e) => {
		props.onBoardHide();
		e.preventDefault();
	}

	return (
		<form className="lists__form">
			<div className="lists__form-header">
				<span className="lists__form-title">Create</span>
				<button className="lists__form-hide" onClick={hideForm}>
					<i className="fas fa-times"></i>
				</button>
			</div>
			<button className="lists__form-btn" onClick={showAddBoard}>
				<div className="lists__form__add-title">Create Board</div>
				<span className="lists__form__add-description">
					A board is made up of cards ordered on lists. Use it to manage projects, track information, or organize anything.
				</span>
			</button>
		</form>
	)
}

export default AddListsForm;