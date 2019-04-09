import React, {Component} from "react";
import {connect} from "react-redux";

//Components
import PostForm from "./PostForm";
import Loading from "../common/Loading;"

class Posts extends Component{
	render(){
		return(
			<div className="feed">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<PostForm/>
						</div>
					</div>
				</div>
			</div>
		)
	}
}


export default Posts;
