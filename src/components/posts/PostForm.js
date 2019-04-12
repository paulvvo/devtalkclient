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
	componentWillReceiveProps(nextProps){
		console.log(nextProps);
		console.log(nextProps.errors);
		if(nextProps.errors) {
			this.setState({errors:nextProps.errors})
		}
	}
	onChange = (event) =>{
		// console.log(event);
		// console.log(event.target.name);
		this.setState({[event.target.name]:event.target.value});
	}

	onSubmit = (event) =>{
		event.preventDefault();
		console.log("calls addpost action");

		const {user} = this.props.auth;
		const newPost = {
			name: user.name,
			avatar: user.avatar,
			text: this.state.text,
		}
		this.props.addPost(newPost);
		this.setState({text:""});
	}
	render(){
		const {errors} = this.props;
		console.log(errors);
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
									error={errors.text}                         /*COME BACK TO THIS*/
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
PostForm.propTypes = {
	addPost:PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
}
const mapStateToProps = (state) =>({
	errors: state.errorReducer,
	auth: state.authReducer
})
export default connect(mapStateToProps,{addPost})(PostForm);
