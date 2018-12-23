import React from "react";
import {route,redirect} from "react-router=dom";
import {connect} from "react-redux";
import PropTypes from 'prop-types';


const PrivateRoute = () =>{
	return(
		<div>hi</div>
	)
}

PrivateRoute.propTypes = {
	auth:PropTypes.object.isRequired
}
const mapStateToProps = (state) =>{
	return{
		auths:state.authReducer,
	}
}

export default connect(mapStateToProps)(PrivateRoute);
