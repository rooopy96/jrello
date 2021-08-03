import React from 'react';
import AddTodo from './addToDo';
import EditForm from './editForm';
import "./toDo.css";
import TodoList from './toDoList';

class ToDo extends React.Component {
	state = {
		showForm: false,
		showEdit: false,
		todo: [
			{ id:1, name: "Hello World" }
		]
	}

	showAddForm = () => {
		return this.setState({ showForm: true });
	}

	hideAddForm = () => {
		return this.setState({ showForm: false });
	}

	addTodoList = title => {
		const todo = [...this.state.todo, { id: Date.now(), name: title }];
		this.setState({ todo });
	}

	deleteTodo = (id) => {
		const todo = this.state.todo.filter(item => {
			return item.name !== id;
		})
		this.setState({ todo });
	}

	showEditForm = () => {
    if(this.state.showEdit === false) {
      this.setState({showEdit: true});
    } else {
      this.setState({showEdit: false});
    }
  }

	deleteBoard = (title) => {
		this.props.onDelete(title);
	}

	render() {
		const { todo } = this.state;
		return (
			<div className="toDo">
				<div className="lists-nav">
					<span className="lists-title">{this.props.title}</span>
					<button className="lists-btns" onClick={this.showEditForm}>
						<i className="fas fa-ellipsis-h"></i>
					</button>
					{this.state.showEdit ? <EditForm
					title={this.props.title}
					onHide={this.showEditForm}
					onDelete={this.deleteBoard} /> : undefined}
				</div>
				<ul className="lists">
					{todo.map(item => {
						return <TodoList key={item.id} name={item.name} onDelete={this.deleteTodo}/>
					})}
				</ul>
				<AddTodo 
					onForm={this.showAddForm} 
					onAdd={this.addTodoList} 
					onHide={this.hideAddForm} 
					status={this.state.showForm}	
				/>
			</div>
		)
	}
}

export default ToDo;