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

export default connect(null, {getCurrentProfile})(Dashboard);
