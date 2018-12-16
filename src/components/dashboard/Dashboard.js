import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

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
		if(loading || profile === loading){
			dashboardContent = <div><Loading/></div>
		}else{
			dashboardContent = <div>Hello</div>
		}
		return(
			<div className="dashboard">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="display-4">Dashboard</div>
							{dashboardContent}
							<Loading/>
						</div>
					</div>
				</div>
			</div>
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
