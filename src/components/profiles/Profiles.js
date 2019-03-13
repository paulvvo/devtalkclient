import React, {Component} from "react"
import {connect} from "react-redux";
import PropTypes from "prop-types";

//Components
import Loading from "../common/Loading";
import ProfileItem from "./ProfileItem";

//Actions
import {getProfiles} from "../../actions/profileActions";

class Profiles extends Component{
	componentDidMount(){
		this.props.getProfiles();
	}
	render(){
		const {profiles, loading} = this.props.profile;

		let profileItems;
		if(profiles===null || loading){
			profileItems=<Loading/>;
		}else{
			if(profiles.length > 0){
				profileItems=(<h4>Profile Items Here</h4>)
			}else{
				profileItems=(<h4>No Profile Items</h4>)
			}
		}
		return(
			<div>
				<div className="profiles">
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<h1 className="display-4 text-center">Developer Profiles</h1>
								<p className="lead text-center">Browse and connect with other developers</p>
								{profileItems}
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
Profiles.propTypes = {
	profile: PropTypes.object.isRequired,
	getProfiles: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
	profile: state.profileReducer
});
export default connect(mapStateToProps, {getProfiles})(Profiles);
