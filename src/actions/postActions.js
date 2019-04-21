import axios from "axios";

import {ADD_POST, GET_ERRORS, POST_LOADING, GET_POSTS, DELETE_POST} from "./types";

//Add Post
export const addPost = (postData) => dispatch =>{
	axios.post("/api/posts", postData)
	// .then(res => {
	// 	console.log(res.data);
	// 	return dispatch({
	// 		type: ADD_POST,
	// 		payload: res.data
	// 	})
	// })
	.then(res => dispatch({
		type:ADD_POST,
		payload:res.data,
	}))
	.catch(err => dispatch({
		type:GET_ERRORS,
		payload:err.response.data
	}))
}
//Delete Post
export const deletePost = (id) => dispatch =>{
	axios.post(`api/posts/${id}`)
	.then(response => dispatch({
		type:DELETE_POST,
		payload:response.data
	}))
	.catch(res => dispatch({
		type:GET_ERRORS,
		payload: res.response.data
	}))
}

export const getPost = () => dispatch =>{
	dispatch({
		type:POST_LOADING,
	})
	axios.get("/api/posts")
	.then(res => dispatch({
		type:GET_POSTS,
		payload:res.data,
	}))
	.catch(err => dispatch({
		type:GET_POSTS,
		payload:null
	}))
}
