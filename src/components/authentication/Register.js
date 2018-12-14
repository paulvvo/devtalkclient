import React, {Component} from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import classnames from "classnames";
import PropTypes from 'prop-types';

import {registerUser} from '../../actions/authActions';

import TextFieldGroup from "../common/TextFieldGroup";

class Register extends Component {
	constructor(props){
		super(props);
		this.state={
			name:"",
			email:"",
			password:"",
			password2:"",
			errors:{},
		}
	}

	componentWillReceiveProps(nextProps){
		if(nextProps.errors){
			this.setState({errors: nextProps.errors})
		}
	}
	componentDidMount(){
		if(this.props.auths.isAuthenticated){
			this.props.history.push('/dashboard');
		}
	}

	onChange = (event) =>{
		//could've done above or
		//bind class register to onChange function
		//onChange(event){
		// console.log(event.target.value);
		// console.log(event.target.name);
		// console.log([event.target.name]);
		this.setState({[event.target.name]:event.target.value});
	}

	onSubmit = (event) =>{
		event.preventDefault();

		const newUser = {
			name:this.state.name,
			email:this.state.email,
			password:this.state.password,
			password2:this.state.password2,
		}
		// console.log(newUser);
		this.props.registerUser(newUser, this.props.history);
	}

	render(){
		const {errors}  = this.state;

		return(

			<div className="register">
		    <div className="container">
		      <div className="row">
		        <div className="col-md-8 m-auto">
		          <h1 className="display-4 text-center">Sign Up</h1>
		          <p className="lead text-center">Create your DevConnector account</p>
		          <form onSubmit={this.onSubmit}>

								<TextFieldGroup
									name="name"
									placeholder="Name"
									value={this.state.name}
									onChange ={this.onChange}
									type="name"
									error={errors.name}
								/>
								<TextFieldGroup
									name="email"
									placeholder="Email Address"
									value={this.state.email}
									onChange ={this.onChange}
									type="email"
									error={errors.email}
								/>

								<TextFieldGroup
									name="password"
									placeholder="Password"
									value={this.state.password}
									onChange ={this.onChange}
									type="password"
									error={errors.password}
								/>

								<TextFieldGroup
									name="password2"
									placeholder="Password Confirmation"
									value={this.state.password2}
									onChange ={this.onChange}
									type="password"
									error={errors.password2}
								/>

		            <input type="submit" className="btn btn-info btn-block mt-4" />
		          </form>
		        </div>
		      </div>
		    </div>
		  </div>

		)
	}
}

Register.propTypes = {
	registerUser:PropTypes.func.isRequired,
	auths: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired,
}
const mapStateToProps = (state) => ({
	auths:state.authReducer,
	errors: state.errorReducer
})
export default connect(mapStateToProps, {registerUser})(withRouter(Register));




// {errors.name? <div className="red">{errors.name}</div> : null}
// <div className="form-group">
// 	<input
// 	type="text"
// 	className={classnames('form-control form-control-lg', {
// 		'is-invalid':errors.name
// 	})}
// 	placeholder="Name" name="name"
// 	value={this.state.name}
// 	onChange={this.onChange}/>
// </div>


// {errors.email? <div className="red">{errors.email}</div>:null}
// <div className="form-group">
//   <input
// 	type="email"
// 	className={classnames('form-control form-control-lg', {
// 		'is-invalid':errors.email
// 	})}
// 	placeholder="Email Address"
// 	name="email"
// 	value={this.state.email}
// 	onChange={this.onChange}/>
//   <small className="form-text text-muted">This site uses Gravatar so if you want a profile image, use a Gravatar email</small>
// </div>


// {errors.password? <div className="red">{errors.password}</div>: null}
// <div className="form-group">
// 	<input
// 	type="password"
// 	className={classnames('form-control form-control-lg', {
// 		'is-invalid':errors.password
// 	})}
// 	placeholder="Password"
// 	name="password"
// 	value={this.state.password}
// 	onChange={this.onChange}/>
// </div>

// {errors.password2? <div className="red">{errors.password2}</div> : null}
// <div className="form-group">
// 	<input
// 	type="password"
// 	className={classnames('form-control form-control-lg', {
// 		'is-invalid':errors.password2
// 	})}
// 	placeholder="Confirm Password"
// 	name="password2"
// 	value={this.state.password2}
// 	onChange={this.onChange}/>
// </div>
