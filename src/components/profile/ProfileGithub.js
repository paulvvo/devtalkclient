import React, {Component} from "react";

class ProfileGithub extends Component{
	constructor(props){
		super(props);
		this.state={
			clientId:"b7fc39b244d67a780d96",
			clientSecret:"e397ad7ed53e6fe585b5bbb076528f6cea8e2e43",
			count:5,
			sort:'created: asc',
			repos:[],
		}
	}
	componentDidMount(){
		const {username} = this.props;
		const {clientId, clientSecret, count, sort, repos} = this.state;
		fetch(`https://api.github.com/users/${username}/repos?per_page=${count}&sort=${sort}&client_id=${clientId}&client_secret=${clientSecret}`)
		.then(response => response.json())
		.then(data => console.log(data))
		.catch(err => console.log(err));

	}
	render(){
		return(
			<div>ProfileGithub</div>
		)
	}
}

export default ProfileGithub;
