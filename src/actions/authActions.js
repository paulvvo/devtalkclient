import axios from 'axios';
import jwtDecode from "jwt-decode";

import setAuthToken from "../utils/setAuthToken";
import {GET_ERRORS, SET_CURRENT_USER} from "./types"


export const registerUser = (userData, history) => (dispatch) => {

	axios.post('/api/auths/register', userData)
	.then(response => {
		// console.log(response.data)
		history.push('/login');
	})
	.catch(err => dispatch({
		type:GET_ERRORS,
		payload:err.response.data,
	}))

	// axios.post('/api/auths/register', newUser)
	// .then(res => console.log(res.data))
	// .catch(err => {
	// 	// console.log(err);
	// 	// console.log(err.response);
	// 	console.log(err.response.data);
	// 	this.setState({errors:err.response.data})
	// });

	//can't get error messages with fetch, used axios instead
	// fetch('/api/auths/register', {
	// 	method:"post",
	// 	headers:{"Content-Type": "application/json"},
	// 	body:JSON.stringify({
	// 		name:this.state.name,
	// 		email:this.state.email,
	// 		password:this.state.password,
	// 		password2:this.state.password2,
	// 	})
	// })
	// .then(response => {
	// 	console.log(response);
	// 	if(response.status === 400) throw new Error("Bad Response from Server");
	// 	return response.json()
	// })
	// .then(data=> console.log(data))
	// .catch(err => {
	// 	console.log(err);
	// 	this.setState({errors:err})
	// })
}

export const loginUser = (userData) => dispatch => {
	axios.post('/api/auths/login', userData)
	.then(response => {
		console.log(response);
		console.log(response.data);
		const {token} = response.data;
		//setting token to local storage
		localStorage.setItem('jwt', token);
		//setting token to header
		setAuthToken(token);
		//decode token
		const decoded = jwtDecode(token);
		dispatch({
			type:SET_CURRENT_USER,
			payload: decoded,
		});
	})
	.catch(err => dispatch({
		type:GET_ERRORS,
		payload: err.response.data,
	}))
}

export const logoutUser = () => dispatch =>{
	//remove token from local storage
	localStorage.removeItem('jwt');
	//set auth header to empty
	setAuthToken(false);
	//dispatch
	dispatch({
		type:SET_CURRENT_USER,
		payload:{}
	})
}
