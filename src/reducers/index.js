import {combineReducers} from 'redux';
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import profileReducer from "./profileReducer";
import postReducer from "./postReducer";

export default combineReducers({
	authReducer: authReducer,
	errorReducer: errorReducer,
	profileReducer: profileReducer,
	postReducer: postReducer,
})
