import React, {Component} from "react"
import {connect} from "react-redux";
import PropTypes from "prop-types";

//Components
import Loading from "../common/Loading";

//Actions
import getProfiles from "../../actions/profileActions";

class Profiles extends Component{
	render(){
		const {profiles, loading} = this.props;
		let profileItems;

		if(profiles===null || loading){
			profileItems=<Loading/>;
		}else{
			if(profiles.length > 0){
				profileItems=(<h4>Profile Items Here</h4>)
			}else{
				profileItems=(<h4>No Profile Items</h4>)
			}
		}
		return(<div>hi< /div>)
	}
}
Profiles.propTypes = {
	profile: PropTypes.object.isRequired,
	getProfiles: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
	profile: state.profileReducer
});
export default connect(mapStateToProps, {})(Profiles);
