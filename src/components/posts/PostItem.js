import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

class PostItem extends Component{

	render(){
		const {post} = this.props;
		console.log(post.text);
		return(
			<div>{post.text}</div>
		)
	}
}

export default PostItem;
