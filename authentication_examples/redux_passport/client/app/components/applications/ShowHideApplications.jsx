import React, { Component, PropTypes } from 'react'; 
import { connect } from 'react-redux';

import * as actions from './../../actions/indexes/User_Home_Index';
import ApplicationList from './ApplicationList';

class ShowHideApplications extends Component {
    render() {
		const formShow = () => {
			if(this.props.showApplications){
				return (
					<div>
						<div className="grid-x">
						  	<div className="small-9 cell"></div>
  							<div className="small-3 cell">
								<button type="button" className="button" onClick={() => {this.props.applicationsViewing()}}>Hide Applications</button>
							</div>
						</div>
						<ApplicationList/>
					</div>
				)
			} else {
				return (
					<div>
						<div className="grid-x">
						  	<div className="small-9 cell"></div>
  							<div className="small-3 cell">
								<button type="button" className="button" onClick={() => {this.props.applicationsViewing()}}>Show Applications</button>
							</div>
						</div>
					</div>
				)
			}
		}
    	return (
      		<div>
	      		{formShow()}
      		</div>
		);
	}
}

const mapStateToProps = (state) => {
    return {
        showApplications: state.user.showApplications
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        applicationsViewing: () => dispatch(actions.setShowHideApplications())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowHideApplications);