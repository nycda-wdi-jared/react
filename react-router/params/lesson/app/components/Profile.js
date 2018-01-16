// Include React
import React, { Component } from 'react';
// Importing a component. Look where the imported component (html & js combo) is below
import HomeButton from './HomeButton';

export default class Profile extends Component {
  	render() {
  		//console.log(this.props)
  		//console.log(this.props.match.params.id)
	    return (
	        <div>
	        	<HomeButton />
	          	<h1># {this.props.match.params.id}'s Profile Page</h1>
	        </div>
	    );
  	}
};