import React from "react";
import {Route,Redirect} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from 'prop-types';


const PrivateRoute = ({component:Component, auths, ...rest}) =>{
	return(
		<Route
		{...rest}
		render={props =>
			auths.isAuthenticated
			? <Component {...props}/>
			: <Redirect to="/login"/>
		}/>
	)
}

PrivateRoute.propTypes = {
	auths:PropTypes.object.isRequired
}
const mapStateToProps = (state) =>{
	return{
		auths:state.authReducer,
	}
}

export default connect(mapStateToProps)(PrivateRoute);
