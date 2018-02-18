import React, { Component } from 'react';

import HomeNav from './../navs/HomeNav';

export default class Home extends Component {
	render() {
    return (
      <div>
      	<HomeNav/>
		    <div className="text-center">
        	<h1>My Movie App</h1>
        	<h2>Please Sign up or Sign in</h2>
        </div>
      </div>
    );
	}
};
