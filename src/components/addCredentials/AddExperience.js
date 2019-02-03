import React, {Component} from "react";
import {Link, withRouter} from "react-router-dom";
import {TextFieldGroup} from "../common/TextFieldGroup";
import {TextFieldGroup} from "../common/TextAreaFieldGroup";
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
		returns(
			<div>Add Exp Component</div>
		)
	}
}
const mapStateToProps = (state) =>{
	return({
		profiles: state.profileReducer,
		errors: state.errorsReducer
	})
}


export default connect(mapStateToProps, {})(withRouter(AddExperience));
