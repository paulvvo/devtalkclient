import React, { Component } from 'react';
import './App.css';

//Components
import Landing from "./components/layout/Landing";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";


class App extends Component {
  render() {
    return (
      <div className="App">
				<Navbar/>
				<h1>Hello World</h1>
				<Footer/>
      </div>
    );
  }
}

export default App;
