import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

//actions
import {getCurrentProfile} from "../../actions/profileActions";


class Dashboard extends Component{
	componentDidMount(){
		this.props.getCurrentProfile()
	}
	render(){
		return(
			<div>hi</div>
		)
	}
}

Dashboard.propTypes = {
	auths:PropTypes.object.isRequired,
	profile:PropTypes.object.isRequired,
	getCurrentProfile: PropTypes.func.isRequired,
}
const mapStateToProps = (state) => ({
	auths:state.authReducer,
	profiles:state.profileReducer
})
export default connect(mapStateToProps, {getCurrentProfile})(Dashboard);
