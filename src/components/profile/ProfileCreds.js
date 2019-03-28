import React, {Component} from "react";

class ProfileCreds extends Component{
	render(){
		const {experience, education} = this.props;
		console.log(experience);
		console.log(education);
		return(
			<div>ProfileCreds</div>
		)
	}
}

export default ProfileCreds;
