import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

//Components
import PostItem from "../posts/PostItem";
import Loading from "../common/Loading";
//Actions
import {getPost} from "../../actions/postActions";

class Post extends Component{
	componentDidMount(){
		this.props.getPost(this.props.match.params.id);
	}
	render(){
		// console.log(this.props.post);
		const {post, loading} = this.props.post;
		let postContent;
		// console.log(post.text);
		if(post === null || loading || Object.keys(post).length ===0){
			postContent = <Loading/>
		}else{
			postContent = <PostItem post={post}/>
		}
		return(
			<div>{postContent}</div>
		)
	}
}

Post.propTypes ={
	post: PropTypes.object.isRequired,
	getPost: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
	post: state.postReducer
})
export default connect(mapStateToProps, {getPost})(Post);
