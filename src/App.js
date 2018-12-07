import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";

import './App.css';




//Components
import Landing from "./components/layout/Landing";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Register from "./components/authentication/Register";
import Login from "./components/authentication/Login";


const store = createStore([], {}, applyMiddleware());

class App extends Component {
  render() {
    return  (
			<Provider store={store}>
				<Router>
					<div className="App">
						<Navbar/>
						<Route exact path="/" component={Landing}/>
						<div className="container">
							<Route exact path="/login" component={Login}/>
							<Route exact path="/register" component={Register}/>
						</div>
						<Footer/>
					</div>
				</Router>
			</Provider>
    );
  }
}

export default App;
