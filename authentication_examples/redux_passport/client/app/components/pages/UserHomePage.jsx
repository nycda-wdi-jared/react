import React, { Component } from 'react';

import MainNavBar from './../navs/MainNavBar';
import UserHomeHeader from './../headers/UserHomeHeader';
import ApplicationList from './../applications/ApplicationList';
import ShowHideForm from './../app_forms/ShowHideForm';
import ShowHideApplications from './../applications/ShowHideApplications';

export default class UserHomePage extends Component {
	render() {
    	return (
      		<div>
      			<MainNavBar/>
	      		<ShowHideForm/>
	      		<ShowHideApplications/>
      		</div>
		);
	}
};