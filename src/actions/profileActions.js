import axios from 'axios';

import {
	GET_PROFILE,
	PROFILE_LOADING,
	PROFILE_NOT_FOUND,
	GET_PROFILES,
	CLEAR_CURRENT_PROFILE} from "../actions/types";

export const getCurrentProfile = () => dispatch =>{
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

const setProfileLoading  = () => {
	dispatch({
		type:PROFILE_LOADING,
		payload:{}
	})
}
