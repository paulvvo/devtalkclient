import React, {Component} from "react";
import {Link, withRouter} from "react-router-dom";
import {TextFieldGroup} from "../common/TextFieldGroup";
import {TextAreaFieldGroup} from "../common/TextAreaFieldGroup";
import {connect} from "react-redux";
import PropTypes from "prop-types";



class AddExperience extends Component{
	constructor(props){
		super(props);
		this.state={
			company:"",
			title:"",
			location:"",
			from: "",
			to: "",
			current: false,
			description: "",
			errors: {},
			disabled:false,
		}
	}
	render(){
		const errors = this.state;
		return(
			<div className="add-experience">
				<div className="container">
					<div className="row">
						<div className="col-md-8 m-auto">
							<Link to="/dashboard" className="btn btn-light">Go Back</Link>
							<h1 className="display-4 text-center"></h1>
							<p className="lead text-center">Add Current Job or Any Past Experience</p>
							<small className="d-block pb-3">* = required fields</small>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
const mapStateToProps = (state) =>{
	return ({
		profiles: state.profileReducer,
		errors: state.errorsReducer
	})
}


AddExperience.propTypes = {
	profiles: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired,
}

export default connect(mapStateToProps)(withRouter(AddExperience));
