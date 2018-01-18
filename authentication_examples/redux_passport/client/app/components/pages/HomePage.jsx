import React, { Component } from 'react';

import LandingNavBar from './../navs/LandingNavBar';

export default class HomePage extends Component {
	render() {
    	return (
      		<div>
      			<LandingNavBar/>
      			<div className="text-center">
		      		<h1 className="page-title">Welcome to JobTrackApp</h1>
		      		<h3>Your One Stop Shop for storing job applications</h3>
		      	</div>
      		</div>
		);
	}
}