import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

import Moment from "react-moment";
class Experience extends Component{

	render(){
		if(this.props.exp){
			console.log(this.props.exp);
		}
		const experience = this.props.exp.map(exp => (
			<tr key={exp._id}>
				<td>{exp.company}</td>
				<td>{exp.title}</td>
				<td><Moment format="YYYY/MM/DD">{exp.from}</Moment> - <Moment format="YYYY/MM/DD">{exp.to}</Moment></td>
				<td>{exp.from} - {exp.to}</td>
				<td><button className="btn btn-danger">Delete</button></td>
			</tr>
		))
		return(
			<div>
				<h4 className="mb-4">Experience Credentials</h4>
				<table className="table">
					<thead>
						<tr>
							<th>Company</th>
							<th>Title</th>
							<th>Years</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{experience}
					</tbody>
				</table>
			</div>
		)
	}
}


export default connect(null)(withRouter(Experience));
