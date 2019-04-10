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
	onChange = (event) =>{
		this.setState({text:event.target.value});
	}
	onSubmit = (event) =>{
		event.preventDefault();
		console.log("calls addpost action");
	}
	render(){
		return(
			<div className="post-form mb-3">
				<div className="card card-info">
					<div className="card-header bg-info text-white">Post a comment..</div>
					<div className="card-body">
						<form onSubmit={this.onSubmit}>
							<div className="form-group">
								<TextAreaFieldGroup
									placeholder="Create a post"
									name="text"
									value={this.state.text}
									onChange={this.onChange}
									errors={this.state.errors}                         /*COME BACK TO THIS*/
								/>
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
