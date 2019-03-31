import React, {Component} from "react";
import Moment from "react-moment";

class ProfileCreds extends Component{
	render(){
		const {experience, education} = this.props;
		// console.log(experience);
		// console.log(education);
		const expItems = experience.map(expItem =>{
			return(
				<li key={expItem._id} className="list-group-item">
					<h4>{expItem.company}</h4>
					<p>
						<Moment format="YYYY/MM/DD">{expItem.from}</Moment> - {expItem.to===null ? "Now" : <span><Moment format="YYYY/MM/DD">{expItem.to}</Moment></span>}
					</p>
					<p>
						<strong>Position: </strong>
						{expItem.title}
					</p>
					<p>
						{expItem.description === '' ? null : <span><strong>Description: </strong>{expItem.description}</span>}
					</p>
				</li>
			)
		})
		const eduItems = education.map(eduItem =>{
			return(
				<li key={eduItem._id} className="list-group-item">
					<h4>{eduItem.school}</h4>
					<p>
						<Moment format="YYYY/MM/DD">{eduItem.from}</Moment> - {eduItem.to===null ? "Now" : <span><Moment format="YYYY/MM/DD">{eduItem.to}</Moment></span>}
					</p>
					<p>
						<strong>Degree: </strong>
						{eduItem.degree}
					</p>
					<p>
						<strong>Field of Study: </strong>
						{eduItem.fieldofstudy}
					</p>
					<p>
						{eduItem.description === '' ? null : <span><strong>Description: </strong>{eduItem.description}</span>}
					</p>
				</li>
			)
		})
		return(
			<div className="row">
				<div className="col-md-6">
					<h3 className="text-center text-info">Experience</h3>
					{
						expItems.length !== 0 ? <ul> {expItems} </ul> : <p>No Experience Listed</p>
					}
				</div>
				<div className="col-md-6">
					<h3 className="text-center text-info">Education</h3>
					{
						eduItems.length !== 0 ? <ul> {eduItems} </ul> : <p>No Experience Listed</p>
					}
				</div>
			</div>
		)
	}
}

export default ProfileCreds;
