import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
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
import PrivateRoute from "./components/common/PrivateRoute";
import CreateProfile from "./components/createProfile/CreateProfile";
import EditProfile from "./components/editProfile/EditProfile";
import AddExperience from "./components/addCredentials/AddExperience";
import AddEducation from "./components/addCredentials/AddEducation";
import Profiles from "./components/profiles/Profiles";
import Profile from "./components/profile/Profile";

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
							<Route exact path="/profiles" component={Profiles}/>
							<Route exact path="/profile/:handle" component={Profile}/>
							<Switch>
								<PrivateRoute exact path="/dashboard" component={Dashboard}/>
							</Switch>
							<Switch>
								<PrivateRoute exact path="/create-profile" component={CreateProfile}/>
							</Switch>
							<Switch>
								<PrivateRoute exact path="/edit-profile" component={EditProfile}/>
							</Switch>
							<Switch>
								<PrivateRoute exact path="/add-experience" component={AddExperience}/>
							</Switch>
							<Switch>
								<PrivateRoute exact path="/add-education" component={AddEducation}/>
							</Switch>
						</div>
						<Footer/>
					</div>
				</Router>
			</Provider>


    );
  }
}

export default App;
