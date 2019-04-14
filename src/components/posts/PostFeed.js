import React, {Component} from "react";
import PropTypes from "prop-types";

class PostFeed extends Component {
	render(){
		const{posts} = this.props;
		const postItems = posts.map(post => {
			return <li>{post.text}</li>;
		});


		return(
			<div>
				{postItems}
			</div>

		)

	}
}
PostFeed.propTypes = {
	posts: PropTypes.array.isRequired
}
export default PostFeed;
