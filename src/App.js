import './app.css';
import axios from "axios";
import React from 'react';
import Navbar from './components/navbar';
import ToDo from './components/toDo';
import AddListsForm from './components/addListsForm';
import AddBoardForm from './components/addBoardForm';

class App extends React.Component {
  state = {
    backgroundUrl: "",
    isLoading: true,
    showingForm: false,
    showingBoardForm: false,
    todoList: [
      { id: 1, title: "ToDo" },
      { id: 2, title: "Doing" },
      { id: 3, title: "Done" }
    ]
  }

  getImages = async () => {
    const data = await axios.get("https://source.unsplash.com/1600x900/?beach");
    this.setState({ backgroundUrl: data.config.url, isLoading: false });
  }

  makeBackground = (url) => {
    const section = document.querySelector(".section");
    section.style.background = `url(${url}) no-repeat`;
    section.style.backgroundSize = "cover";
  }

  addTodolist = () => {
    if(this.state.showingForm === false) {
      this.setState({showingForm: true});
    } else {
      this.setState({showingForm: false});
    }
  }

  showAddBoardForm = () => {
    if(this.state.showingBoardForm === false) {
      this.addTodolist();
      this.setState({showingBoardForm: true});
    } else {
      this.setState({showingBoardForm: false});
    }
  }

  addBoard = (title) => {
    const todoList = [...this.state.todoList, {
      id: Date.now(),
      title
    }]

    this.showAddBoardForm();
    this.setState({ todoList });
  }

  deleteBoard = title => {
    const todoList = this.state.todoList.filter(item => {
      if(item.title !== title) {
        return {...item};
      }
    })

    this.setState({ todoList });
  }


  render() {
    this.state.isLoading ? this.getImages() : this.makeBackground(this.state.backgroundUrl);
    return (
      <>
        <section className="section">
          <button className="add__todos" onClick={this.addTodolist}>
            <i className="fas fa-plus"></i>
          </button>
          <Navbar />
          {this.state.showingForm ? <AddListsForm 
          onHide={this.addTodolist} 
          onBoardHide={this.showAddBoardForm}
          /> : undefined}
          {this.state.showingBoardForm ? <AddBoardForm
          onHide={this.showAddBoardForm}
          onAdd={this.addBoard} /> : undefined}
          <div className="list-board">
            {this.state.todoList.map(value => {
              return <div key={value.id} className="list-wrapper">
                <ToDo 
                  key={value.id} 
                  title={value.title}
                  onDelete={this.deleteBoard}
                />
              </div>
            })}
          </div>
        </section>
      </>
    )
  }
}


export default App;
