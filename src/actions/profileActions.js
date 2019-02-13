import axios from 'axios';

import {
	GET_PROFILE,
	PROFILE_LOADING,
	// PROFILE_NOT_FOUND,
	// GET_PROFILES,
	CLEAR_CURRENT_PROFILE,
	GET_ERRORS,
	SET_CURRENT_USER} from "../actions/types";


export const getCurrentProfile = () => (dispatch) =>{
	dispatch(setProfileLoading());

	axios.get('/api/profiles')
	.then(response => dispatch({
		type:GET_PROFILE,
		payload:response.data
	}))
	.catch(err => dispatch({
		type:GET_PROFILE,
		payload:{},
	}))
}

export const createProfile = (profileData, history) => dispatch => {
	axios
	.post("/api/profiles", profileData)
	.then(response => history.push("/dashboard"))
	.catch(err => {
		// console.log(err.response.data);
		return dispatch({
			type:GET_ERRORS,
			payload:err.response.data
		})
	})
}

export const deleteProfile = () => dispatch => {
	if(window.confirm("Are you sure you want to delete profile? THIS CANNOT BE UNDONE")){
		axios
		.delete("/api/profiles")
		.then(res => dispatch({
			type:SET_CURRENT_USER,
			payload:{},
		}))
		.catch(res => dispatch({
			type:GET_ERRORS,
			payload:res.response.data,
		}));
	}
}

export const setProfileLoading  = () => dispatch =>{
	dispatch({
		type:PROFILE_LOADING,
		payload:{}
	})
}

export const addExperience = (expData,history) => dispatch =>{
	console.log(expData);
	axios.post("/api/profiles/experience",expData)
	.then(res => history.push("/dashboard"))
	.catch(err => dispatch({
		type:GET_ERRORS,
		payload: err.response.data
	}))
}

export const clearCurrentProfile = () => dispatch =>{
	dispatch({
		type:CLEAR_CURRENT_PROFILE,
		payload:{}
	})
}
