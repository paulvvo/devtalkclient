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
import {getProfileByHandle} from "../../actions/profileActions";

class Profile extends Component{
	componentDidMount(){
		if(this.props.match.params.handle){
			this.props.getProfileByHandle(this.props.match.params.handle);
		}
	}
	componentWillReceiveProps(nextProps) {
		if(nextProps.profiles.profile === null && this.props.profiles.loading){
			this.props.history.push('/not-found');
		}
	}
	render(){
		const {loading, profile} = this.props.profiles;
		let profileContent;

		if(profile === null || loading){
			profileContent = <Loading/>
		}else{
			profileContent=(
				<div>
					<div className="row">
						<div className="col-md-6">
							<Link to="/profiles" className="btn btn0light mb-3 float-left">Back to Profiles</Link>
						</div>
						<div className="col-md-6"></div>

					</div>
					<ProfileHeader profile={profile}/>
					<ProfileAbout profile={profile}/>
					<ProfileCreds education={profile.education} experience={profile.experience}/>
					{
						profile.githubusername ? <ProfileGithub username={profile.githubusername}/> : null
					}

				</div>
			)
		}
		return(
			<div>
					{profileContent}
			</div>
		)
	}
}

const mapStateToProps = (state) =>({
	profiles: state.profileReducer
})
Profile.propTypes = {
	profiles:PropTypes.object.isRequired,
	getProfileByHandle: PropTypes.func.isRequired
}
export default connect(mapStateToProps, {getProfileByHandle})(Profile);
