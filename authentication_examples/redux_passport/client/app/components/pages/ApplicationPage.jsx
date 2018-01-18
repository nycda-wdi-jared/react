import React, { Component } from 'react';
import { connect } from 'react-redux';

import ApplicationPageNavBar from './../navs/ApplicationPageNavBar';
import * as actions from './../../actions/indexes/User_Home_Index';

class ApplicationPage extends Component {
  	componentWillMount(){
  		this.props.userApplicationData(this.props.params.id);
	}
	render() {
		if(this.props.application != undefined){
	    	return (
	      		<div>
	      			<ApplicationPageNavBar/>
	      			<div className="page-title text-center">
	      				<p>Company: {this.props.application.companyName}</p>
	      			</div>
	      		</div>
			);
		} else {
			return (
				<div>
				</div>
			)
		}
	}
};

const mapStateToProps = (state) => {
    return {
        application: state.user.application
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        userApplicationData: (id) => dispatch(actions.userHomeApplication(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationPage);