import React, {Component} from "react";
import PropTypes from "prop-types";

//Components
import CommentItem from "./CommentItem";

class CommentFeed extends Component{
	render(){
		const {comments, postId} = this.props;
		return comments.map(comment =>{
			return <CommentItem key={comment._id} comment={comment} postId={postId}/>
		})
	}
}

export default CommentFeed;
