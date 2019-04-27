import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

//Actions
import {deletePost,getPosts, likePost, unlikePost} from "../../actions/postActions";

class PostItem extends Component{
	onDeleteClick(postId){
		// console.log("delete comment");
		this.props.deletePost(postId);
		// this.props.getPosts();
	}
	onLikePost(postId){
		this.props.likePost(postId);
	}
	onUnlikePost(postId){
		this.props.unlikePost(postId);
	}
	render(){
		const {post, auth} = this.props;
		// console.log(post.text);
		// console.log(auth);

		return(
			<div className="posts">

				<div className="card card-body mb-3">
					<div className="row">
						<div className="col-md-2">
							<a href="profile.html">
								<img className="rounded-circle d-none d-md-block" src={post.avatar}
									alt="" />
							</a>
							<br />
							<p className="text-center">{post.name}</p>
						</div>
						<div className="col-md-10">
							<p className="lead">{post.text}</p>
							<button type="button" className="btn btn-light mr-1" onClick={this.onLikePost.bind(this, post._id)}>
								<i className="text-info fas fa-thumbs-up"></i>
								<span className="badge badge-light">{post.likes.length}</span>
							</button>
							<button type="button" className="btn btn-light mr-1" onClick={this.onUnlikePost.bind(this, post._id)}>
								<i className="text-secondary fas fa-thumbs-down"></i>
							</button>
							<Link to={`/post/${post._id}`} className="btn btn-info mr-1">
								Comments
							</Link>
							{
								post.user === auth.user.id
								? <button type="button" className="btn btn-danger mr-1" onClick={this.onDeleteClick.bind(this, post._id)}>Delete</button>
								: null
							}
						</div>
					</div>
				</div>

			</div>
		)
	}

}
PostItem.propTypes = {
	likePost: PropTypes.func.isRequired,
	unlikePost: PropTypes.func.isRequired,
	deletePost: PropTypes.func.isRequired,
	getPosts: PropTypes.func.isRequired,
	post: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
	auth: state.authReducer
})
export default connect(mapStateToProps,{deletePost,getPosts,likePost,unlikePost})(PostItem);
