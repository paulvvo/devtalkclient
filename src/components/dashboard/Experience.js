import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class Experience extends Component{

	render(){
		if(this.props.exp){
			console.log(this.props.exp);
		}
		return(
			<div>hi</div>
		)
	}
}


export default connect(null)(withRouter(Experience));
