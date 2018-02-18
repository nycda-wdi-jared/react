// Include React
import React, { Component } from 'react';
import HomeButton from './HomeButton';

import characters from '../js/obj';

export default class Character extends Component {
  	render() {
  		const param = this.props.match.params.character
  		/*
  			console.log(param)
			Write a method that compares the param to the character
			in the characters object array, and displays the age and 
			convicted felon information for that character on their params page

			In your routes.js, your Character route should have the :character param

			Look at how array information is being appended in the Home.js component
  		*/
	    return (
	        <div>
	        	<HomeButton />
	          	<h1>{param}'s Page</h1>
	          	{
	          		/* 
	          			Put that method or code here 
						
						Putting {} in html here will let you put javascript into it
						to append products as well
	          		*/
	          	}
	        </div>
	    );
  	}
};