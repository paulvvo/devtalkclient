import axios from "axios";

import {ADD_POST, GET_ERRORS, POST_LOADING, GET_POSTS, DELETE_POST, GET_POST} from "./types";

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
	axios.delete(`api/posts/${id}`)
	// .then(res => dispatch({
	// 	type:DELETE_POST,
	// 	payload:res.data
	// }))
	.then(res => {
		console.log(res.data);
		dispatch({
			type: DELETE_POST,
			payload: res.data
		})
		return dispatch(getPosts());
	})
	.catch(err => dispatch({
		type:GET_ERRORS,
		payload: err.response.data
	}))
}

export const getPosts = () => dispatch =>{
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
export const getPost = (id) => dispatch =>{
	dispatch({
		type:POST_LOADING,
	})
	axios.get(`/api/post/${id}`)
	.then(res => dispatch({
		type:GET_POST,
		payload: res.data
	}))
	.catch(err => dispatch({
		type:GET_ERRORS,
		payload: err.response.data
	}))
}
export const likePost = (postId) => dispatch =>{
	axios.put(`/api/posts/like/${postId}`)
	.then(res => dispatch(getPosts()))
	.catch(err => dispatch({
		type: GET_ERRORS,
		payload: err.response.data,
	}))
}
export const unlikePost = (postId) => dispatch =>{
	axios.put(`/api/posts/unlike/${postId}`)
	.then(res => dispatch(getPosts()))
	.catch(err => dispatch({
		type: GET_ERRORS,
		payload: err.response.data,
	}))
}
