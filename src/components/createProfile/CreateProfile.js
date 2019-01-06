import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

//Components
import TextFieldGroup from "../common/TextFieldGroup";

class CreateProfile extends Component{
	constructor(){
		super();
		this.state = {
			displaySocialInputs:false,
			handle: '',
			company: '',
			website: '',
			location: '',
			status: '',
			skills: '',
			githubusername: '',
			bio: '',
			twitter: '',
			facebook: '',
			linkedin: '',
			youtube: '',
			instagram: '',
			errors: {},
		}
	}
	render(){
		const {errors}  = this.state;
		return(
			<div className='create-profile'>
				<div className="container">
					<div className="row">
						<div className="col-md-8 m-auto">
							<h1 className="display-4 text-center">Create You Profile</h1>
							<p className="lead text-center">
								Let's Get Some Information to Make Your Profile Stand Out
							</p>
							<small className="d-block pb-3">* = required fields</small>
							<form onSubmit={this.onSubmit}>
								<TextFieldGroup
									placeholder="* Profile Handle"
									name="handle"
									value = {this.state.handle}
									onChange={this.onChange}
									errors = {errors.handle}
									info = "A unique handle for your profile URL. Your full name, company name, nickname"
								/>
							</form>
						</div>
					</div>
				</div>
			</div>
		)
	}

	onSubmit =(event) =>{
		event.preventDefault();
		console.log("submit");
	}
	onChange = (e) =>{
		this.setState({[e.target.name]:e.target.value});
	}
}

CreateProfile.propTypes = {
	profile:PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired,
}
const mapStateToProps = (state) => {
	return({
		profiles:state.profileReducer,
		errors:state.errorReducer,
	})
}
export default connect(null)(CreateProfile);
