import React, { Component } from 'react';

import HomeNav from './../navs/HomeNav';

export default class HomePage extends Component {
	render() {
    return (
      <div>
      	<HomeNav/>
		    <div className="text-center">
        	<h1>Welcome to my Movie App</h1>
        </div>
      </div>
    );
	}
};
