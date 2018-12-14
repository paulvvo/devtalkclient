import {
	GET_PROFILE,
	PROFILE_LOADING,
	PROFILE_NOT_FOUND,
	GET_PROFILES,
	CLEAR_CURRENT_PROFILE} from "../actions/types";


const initialState = {
	profile:null,
	profiles:null,
	loading:false,
};

const profileReducer = (state = initialState, action)=>{
	switch(action.type){
		default:
			return state;
	}
}

export default profileReducer;
