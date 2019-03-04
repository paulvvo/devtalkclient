import React, {Component} from "react"
import {connect} from "react-redux";
import PropTypes from "prop-types";

//Components
import Loading from "../common/Loading";

//Actions
import getProfiles from "../../actions/profileActions";

class Profiles extends Component{
	render(){
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
