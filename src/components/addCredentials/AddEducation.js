import React, {Component} from "react";
import {Link, withRouter} from "react-router-dom";
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import {addExperience} from "../../actions/profileActions";


class AddEducation extends Component{
	constructor(props){
		super(props);
		this.state={
			school:"",
			degree:"",
			fieldofstudy:"",
			from: "",
			to: "",
			current: false,
			description: "",
			errors: {},
			disabled:false,
		}
	}
	componentWillReceiveProps(nextProps) {
		if(nextProps.errors){
			this.setState({errors:nextProps.errors});
		}
	}
	onSubmit = (e) =>{
		e.preventDefault();
		const expData = {
			school: this.state.school,
			degree:this.state.degree,
			fieldofstudy:this.state.fieldofstudy,
			from:this.state.from,
			to:this.state.to,
			current:this.state.current,
			description:this.state.description
		};
		this.props.addExperience(expData, this.props.history);

	}
	onChange = (e) =>{
		this.setState({[e.target.name]:e.target.value})
	}
	onCheck = () =>{
		this.setState({
			disabled:!this.state.disabled,
			current:!this.state.current,
		})
	}
	render(){
		const {errors} = this.state;
		return(
			<div className="add-experience">
				<div className="container">
					<div className="row">
						<div className="col-md-8 m-auto">
							<Link to="/dashboard" className="btn btn-light">Go Back</Link>
							<h1 className="display-4 text-center">Add Experience</h1>
							<p className="lead text-center">Add Current Job or Any Past Experience</p>
							<small className="d-block pb-3">* = required fields</small>
							<form onSubmit={this.onSubmit}>
								<TextFieldGroup
									placeholder="* School"
									name="school"
									value={this.state.school}
									onChange={this.onChange}
									error={errors.school}
								/>
								<TextFieldGroup
									placeholder="* Degree"
									name="degree"
									value={this.state.degree}
									onChange={this.onChange}
									error={errors.degree}
								/>
								<TextFieldGroup
									placeholder="Field of Study"
									name="fieldofstudy"
									value={this.state.fieldofstudy}
									onChange={this.onChange}
									error={errors.fieldofstudy}
								/>
								<h6>From Date</h6>
								<TextFieldGroup
									name="from"
									type="date"
									value={this.state.from}
									onChange={this.onChange}
									error={errors.from}
								/>
								<h6>To Date</h6>
								<TextFieldGroup
									name="to"
									type="date"
									value={this.state.to}
									onChange={this.onChange}
									error={errors.to}
									disabled={this.state.disabled? "disabled" :""}
								/>
								<div className="form-check mb-4">
									<input
										type="checkbox"
										className="form-check-input"
										name="current"
										value={this.state.current}
										checked={this.state.current}
										onChange={this.onCheck}
										id="current"
									/>
									<label htmlFor="current" className="form-check-label">Current Job</label>
								</div>

							 <TextAreaFieldGroup
							 	name="description"
								error={errors.description}
								onChange={this.onChange}
								value={this.state.description}
								info="Tell us about your job"
							 />
							 <input type="submit" value="Submit" className="btn btn-info"/>
							</form>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
// const mapStateToProps = (state) =>{
// 	return ({
// 		profiles: state.profileReducer,
// 		errors: state.errorsReducer,
// 	})
// }
const mapStateToProps = (state) =>({
		profiles: state.profileReducer,
		errors: state.errorReducer,
})

AddEducation.propTypes = {
	profiles: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired,
	addExperience: PropTypes.func.isRequired
}

export default connect(mapStateToProps,{addExperience})(withRouter(AddEducation));
