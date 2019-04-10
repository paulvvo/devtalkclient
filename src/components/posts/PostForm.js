import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

//Components
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
//Action
import {addPost} from "../../actions/postActions";

class PostForm extends Component {
	constructor(props){
		super(props);
		this.state = {
			text:"",
			errors:{}
		}
	}
	render(){
		return(
			<div className="post-form mb-3">
				<div className="card card-info">
					<div className="card-header bg-info text-white">Post a comment..</div>
					<div className="card-body">
						<form action="">
							<div className="form-group">
								<textarea className="form-control form-control-lg" placeholder="Create a Post"/>
							</div>
							<button className="btn btn-dark">Submit</button>
						</form>
					</div>
				</div>
			</div>
		)
	}
}

export default PostForm;
