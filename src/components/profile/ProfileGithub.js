import React, {Component} from "react";
import PropTypes from "prop-types";

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
		const {clientId, clientSecret, count, sort} = this.state;
		fetch(`https://api.github.com/users/${username}/repos?per_page=${count}&sort=${sort}&client_id=${clientId}&client_secret=${clientSecret}`)
		.then(response => response.json())
		.then(data => this.setState({repos:data}))
		.catch(err => console.log(err));

	}
	render(){
		const {repos} = this.state;
		// console.log(repos);
		const repoItems = repos.map(repoItem => (
			<div key={repoItem.id} className="card card-body mb-2">
				<div className="row">
					<div className="col-md-6">
						<h4>
							<a href={repoItem.html_url} className="text-info" target="_blank" rel="noopener noreferrer">{repoItem.name}</a>
						</h4>
						<p>{repoItem.description}</p>
					</div>
				</div>
			</div>
		))
		return(
			<div>
			{repoItems}
			</div>
		)
	}
}

ProfileGithub.propTypes ={
	username:PropTypes.string.isRequired
}
export default ProfileGithub;
