import React, {Component} from "react";
import {connect} from "redux";
import PropTypes from "prop-types";

//Actions
import {deleteComment} from "../../actions/postActions";

class CommentItem extends Component{
	render(){
		const {comment, postId, auth} = this.props;
		<div className="card card-body mb-3">
			<div className="row">
				<div className="col-md-2">
					<a href="/profile">
						<img src={comment.avatar} alt="" className="rounded-circle d-none d-md-block"/>
						<br/>
						<p className="text-center">{comment.name}</p>
					</a>
				</div>
				<div className="col-md-10">
					<p className="lead">{comment.text}</p>
				</div>
			</div>
		</div>
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
