import React, {Component} from 'react';
import {connect} from "react-redux";
import classnames from "classnames";
import PropTypes from 'prop-types';

import {registerUser} from '../../actions/authActions';

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
		if(nextProps.errorReducer){
			this.setState({errors: nextProps.errorReducer})
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
		this.props.registerUser(newUser);
	}

	render(){
		const {errors}  = this.state;
		const {user} = this.props.authReducer;
		return(

			<div className="register">
		    <div className="container">
		      <div className="row">
		        <div className="col-md-8 m-auto">
									{user.name? user.name : null}
		          <h1 className="display-4 text-center">Sign Up</h1>
		          <p className="lead text-center">Create your DevConnector account</p>
		          <form onSubmit={this.onSubmit}>

								{errors.name? <div className="red">{errors.name}</div> : <div></div>}
		            <div className="form-group">
		              <input
									type="text"
									className={classnames('form-control form-control-lg', {
										'is-invalid':errors.name
									})}
									placeholder="Name" name="name"
									value={this.state.name}
									onChange={this.onChange}/>
		            </div>

								{errors.email? <div className="red">{errors.email}</div>:<div></div>}

		            <div className="form-group">
		              <input
									type="email"
									className={classnames('form-control form-control-lg', {
										'is-invalid':errors.email
									})}
									placeholder="Email Address"
									name="email"
									value={this.state.email}
									onChange={this.onChange}/>
		              <small className="form-text text-muted">This site uses Gravatar so if you want a profile image, use a Gravatar email</small>
		            </div>
								{errors.password? <div className="red">{errors.password}</div>: <div></div>}
		            <div className="form-group">
		              <input
									type="password"
									className={classnames('form-control form-control-lg', {
										'is-invalid':errors.password
									})}
									placeholder="Password"
									name="password"
									value={this.state.password}
									onChange={this.onChange}/>
		            </div>
								{errors.password2? <div className="red">{errors.password2}</div> : <div></div>}
		            <div className="form-group">
		              <input
									type="password"
									className={classnames('form-control form-control-lg', {
										'is-invalid':errors.password2
									})}
									placeholder="Confirm Password"
									name="password2"
									value={this.state.password2}
									onChange={this.onChange}/>
		            </div>
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
	authReducer: PropTypes.object.isRequired,
	// errorReducer: PropTypes.object.isRequired,
}
const mapStateToProps = (state) => ({
	authReducer:state.authReducer,
	errorReducer: state.errorReducer
})
export default connect(mapStateToProps, {registerUser})(Register);
