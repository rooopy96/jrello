import './app.css';
import axios from "axios";
import React from 'react';
import Navbar from './components/navbar';
import ToDo from './components/toDo';

class App extends React.Component {
  state = {
    backgroundUrl: "",
    isLoading: true
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

  render() {
    this.state.isLoading ? this.getImages() : this.makeBackground(this.state.backgroundUrl);
    return (
      <section className="section">
        <Navbar />
        <ToDo />
      </section>
    )
  }
}


export default App;
