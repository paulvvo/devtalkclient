import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

//Components
import PostForm from "./PostForm";
import Loading from "../common/Loading";
import PostFeed from "./PostFeed";

//Actions
import {getPost} from "../../actions/postActions";


class Posts extends Component{
	componentDidMount(){
		this.props.getPost();
	}
	render(){
		const {posts, loading} = this.props.posts;
		// console.log(posts);
		let postContent;
		if(posts === null || posts.length <1 || loading){
			postContent = (<Loading/>);
		}else{
			postContent = (<PostFeed posts={posts}/>);
			// console.log(postContent);
		}



		return(
			<div className="feed">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<PostForm/>
							{postContent}

						</div>
					</div>
				</div>
			</div>
		)
	}
}

Posts.propTypes = {
	posts: PropTypes.object.isRequired,
	getPost: PropTypes.func.isRequired,
}
const mapStateToProps = (state) => ({
	posts: state.postReducer,
})
export default connect(mapStateToProps, {getPost})(Posts);
