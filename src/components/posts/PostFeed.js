import React, {Component} from "react";
import PropTypes from "prop-types";

//Components
import PostItem from "./PostItem";

class PostFeed extends Component {
	render(){
		const{posts} = this.props;
		console.log(posts);
		// const postItems = posts.map(post => {
		// 	return <li>{post.text}</li>;
		// });
		// {postitems}
		const postList = posts.map(postItem =>{
			return(
				<PostItem key={postItem._id} post={postItem} showActions={true}/>
			)
		})

		return(
			<div>
			{postList}
			</div>
		)
	}
}
PostFeed.propTypes = {
	posts: PropTypes.array.isRequired
}
export default PostFeed;
