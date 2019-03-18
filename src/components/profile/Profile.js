import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

//Components
import ProfileAbout from "./ProfileAbout";
import ProfileHeader from "./ProfileHeader";
import ProfileCreds from "./ProfileCreds";
import ProfileGithub from "./ProfileGithub";
import Loading from "../common/Loading";

//Actions
import {getProfileByHandle} from "../actions/profileActions";

class Profile extends Component{
	componentDidMount(){
		if(this.props.match.params.handle){
			this.props.getProfileByHandle(this.props.match.params.handle);
		}
	}
	render(){
		return(<div>Profile</div>)
	}
}

const mapStateToProps = (state) =>({
	profiles: state.profileReducer
})
Profile.propTypes = {
	profiles:PropTypes.object.isRequired
}
export default connect(mapStateToProps, {getProfileByHandle})(Profile);
