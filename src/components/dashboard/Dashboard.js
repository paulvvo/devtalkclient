import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
//actions
import {getCurrentProfile} from "../../actions/profileActions";

//components
// import Loading from "../common/Loading";
import Loading from "../common/Loading";

class Dashboard extends Component{


	componentDidMount(){
		this.props.getCurrentProfile()
	}
	render(){

		const {user} = this.props.auths;
		const {loading, profile} = this.props.profiles;
		let dashboardContent = null;
		if(loading || profile === null){
			dashboardContent = <div><Loading/></div>
		}else{
			if(Object.keys(profile).length >0){
				dashboardContent = <div>Profile</div>
			}else{
				dashboardContent = (
					<div>
						<p>Welcome {user.name}</p>
						<p>You have not yet an profile for this account yet</p>
						<Link to="/create-profile" className = "btn btn-lg btn-info">
							 Create Profile
						</Link>
					</div>
				)
			}
		}
		return(
			<div className="dashboard">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="display-4">Dashboard</div>
							{dashboardContent}

						</div>
					</div>
				</div>
			</div>
		)
	}
}

Dashboard.propTypes = {
	auths:PropTypes.object.isRequired,
	profiles:PropTypes.object.isRequired,
	getCurrentProfile: PropTypes.func.isRequired,
}
const mapStateToProps = (state) => ({
	auths:state.authReducer,
	profiles:state.profileReducer
})
export default connect(mapStateToProps, {getCurrentProfile})(Dashboard);
