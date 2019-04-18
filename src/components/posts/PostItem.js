import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

class PostItem extends Component{

	render(){
		const {post, auth} = this.props;
		// console.log(post.text);
		console.log(auth);
		return(
			<div>{post.text}</div>
		)
	}
}
PostItem.propTypes = {
	post: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
	auth: state.authReducer
})
export default connect(mapStateToProps,{})(PostItem);
