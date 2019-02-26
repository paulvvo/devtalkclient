import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Moment from "react-moment";
import {deleteEducation} from "../../actions/profileActions";

class Education extends Component{

	onClickDeleteExp = (expId) =>{
		// console.log(expId);
		this.props.deleteEducation(expId);
	}
	render(){
		const experience = this.props.exp.map(exp => (
			<tr key={exp._id}>
				<td>{exp.company}</td>
				<td>{exp.title}</td>
				<td>
					<Moment format="YYYY/MM/DD">{exp.from}</Moment> -
					{exp.to === null ? ("Now") : (<Moment format="YYYY/MM/DD">{exp.to}</Moment>)}
				</td>
				<td><button className="btn btn-danger" onClick={()=>{this.onClickDeleteExp(exp._id)}}>Delete</button></td>
			</tr>
		));

		return(
			<div>
				<h4 className="mb-4">Education Credentials</h4>
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
Education.propTypes = {
	deleteEducation: PropTypes.func.isRequired,
}
export default connect(null, {deleteEducation})(Education);
