import React, { Component } from 'react';
import './App.css';

//Components
import Landing from "./components/layout/Landing";
import Navbar from "./components/layout/Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
				<Navbar/>
				<h1>Hello World</h1>

      </div>
    );
  }
}

export default App;
