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
		return(
			<div>
				{expItems}
			</div>
		)
	}
}

export default ProfileCreds;
