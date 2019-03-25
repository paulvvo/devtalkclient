import React, {Component} from "react";
import isEmpty from "../../validation/isEmpty";
class ProfileHeader extends Component{
	render(){
		const {profile} = this.props;

		return(
			<div className="row">
				<div className="col-md-12">
					<div className="card card-body bg-info text-white mb-3">
						<div className="row">
							<div className="col-4 col-md-3 m-auto">
								<img className="rounded-circle" src={profile.user.avatar} alt="" />
							</div>
						</div>
						<div className="text-center">
							<h1 className="display-4 text-center">{profile.user.name}</h1>
							<p className="lead text-center">{profile.status} {isEmpty(profile.company) ? null : <span>{profile.company}</span>}</p>
							<p>{isEmpty(profile.location) ? null : <span>{profile.location}</span>}</p>
							<p>
								{isEmpty(profile.website) ? null : (
									<a className="text-white p-2" href={`https://${profile.website}`} target="_blank">
										<i className="fas fa-globe fa-2x"></i>
									</a>
								)}
								{isEmpty(profile.social.youtube) && isEmpty(profile.social) ? null : (
									<a className="text-white p-2" href={`https://${profile.social.youtube}`} target="_blank">
										<i className="fab fa-youtube fa-2x"></i>
									</a>
								)}
								{isEmpty(profile.social.twitter) && isEmpty(profile.social) ? null : (
									<a className="text-white p-2" href={`https://${profile.social.twitter}`} target="_blank">
										<i className="fab fa-twitter fa-2x"></i>
									</a>
								)}
								{isEmpty(profile.social.facebook) && isEmpty(profile.social) ? null : (
									<a className="text-white p-2" href={`https://${profile.social.facebook}`} target="_blank">
										<i className="fab fa-facebook fa-2x"></i>
									</a>
								)}
								{isEmpty(profile.social.linkedin) && isEmpty(profile.social) ? null : (
									<a className="text-white p-2" href={`https://${profile.social.linkedin}`} target="_blank">
										<i className="fab fa-linkedin fa-2x"></i>
									</a>
								)}
								{isEmpty(profile.social.instagram) && isEmpty(profile.social) ? null : (
									<a className="text-white p-2" href={`https://${profile.social.instagram}`} target="_blank">
										<i className="fab fa-instagram fa-2x"></i>
									</a>
								)}

							</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default ProfileHeader;
