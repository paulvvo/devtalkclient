import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Provider} from "react-redux";
import jwtDecode from "jwt-decode"

import store from "./store";
import './App.css';
import setAuthToken from "./utils/setAuthToken";

//actions
import {SET_CURRENT_USER} from './actions/types';
import {logoutUser} from './actions/authActions';
import {clearCurrentProfile} from "./actions/profileActions";

//Components
import Landing from "./components/layout/Landing";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Register from "./components/authentication/Register";
import Login from "./components/authentication/Login";
import Dashboard from "./components/dashboard/Dashboard";

if(localStorage.jwt){
	setAuthToken(localStorage.jwt);

	const decoded = jwtDecode(localStorage.jwt);

	store.dispatch({
		type:SET_CURRENT_USER,
		payload: decoded
	})

	//check for expire token
	const currentTime = Date.now()/1000;

	if(decoded.exp < currentTime){
		//logout user
		store.dispatch(logoutUser());

		//clear profile
		store.dispatch(clearCurrentProfile());
		//redirect to login
		window.location.href = "/login";
	}
}


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
							<Route exact path="/dashboard" component={Dashboard}/>
						</div>
						<Footer/>
					</div>
				</Router>
			</Provider>


    );
  }
}

export default App;
