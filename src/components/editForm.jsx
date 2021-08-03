import React from "react";
import "./edit-form.css";

const EditForm = (props) => {
	const deleteBoard = () => {
		hideForm();
		props.onDelete(props.title);
	}

	const hideForm = () => {
		props.onHide();
	}

	return(
		<div className="edit-form">
			<div className="edit-form-title">List action</div>
			<div className="edit-form-actions">
				<button>EditTitle</button>
				<button onClick={deleteBoard}>Delete List</button>
			</div>
		</div>
	)
}

export default EditForm;