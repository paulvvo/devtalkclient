import React, {Component} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import isEmpty from "../../validation/isEmpty";

class ProfileItem extends Component{
	render(){
		const {profile} = this.props;
		return(
			<div className="card card-body bg-light mb-3">
				<div className="row">
					<div className="col-2">
						<img src={profile.user.avatar} alt="" className="rounded-circle"/>
					</div>
					<div className="col-lg-6 col-md-4 col-8">
						<h3>{profile.user.name}</h3>
						<p>{profile.status} {isEmpty(profile.company)? null: profile.company}</p>
						<p>{isEmpty(profile.location)? null : profile.location}</p>
						<Link to={`/profile/${profile.handle}`} className="btn btn-info">view profile</Link>
					</div>
					<div className="col-md-4 d-none d-md-block">
						<h4>Skill Set</h4>
						<ul className="list-group">
							{
								profile.skills.slice(0,4).map((skill, i) =>{
									return <li key={i} className="list-group-item">
										<i className="fa fa-check pr-1"/>
										{skill}
									</li>
								})
							}
						</ul>
					</div>
				</div>
			</div>
		)

	}
}
ProfileItem.propTypes= {
	profile: PropTypes.object.isRequired
}
export default ProfileItem;
