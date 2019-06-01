import React, {Component} from "react";
import {connect} from "redux";
import PropTypes from "prop-types";

//Actions
import {deleteComment} from "../../actions/postActions";

class CommentItem extends Component{
	render(){
		
		return(<div>CommentItem Component</div>)
	}
}

CommentItem.propTypes = {
	deleteComment: PropTypes.func.isRequired,
	comment : PropTypes.object.isRequired,
	postId : PropTypes.string.isRequired,
	auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) =>({
	auth: state.authReducer,
})
export default connect(mapStateToProps)(CommentItem);
