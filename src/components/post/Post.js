import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {getPost} from "../../actions/postActions";

class Post extends Component{
	render(){
		console.log(this.props.post);
		return(
			<div>Component: Post</div>
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
