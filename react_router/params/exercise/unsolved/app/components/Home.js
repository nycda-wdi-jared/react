// Include React
import React, {Component} from "react";
import {Link} from 'react-router-dom';

import characters from '../js/obj';

export default class Home extends Component {
  	render() {
  		/*
			Look at where the renderLinks() method is being called.
			That is how you create html items through looping an object
  		*/
  		//console.log(characters)
	  	var renderLinks = () => {
	  		return characters.map((character, index) => {
	  			//console.log(character)
	  			return (
	  				<Link className="nav-links" key={index} to={`/character/${character.name}`}>{character.name}</Link>
	  			)
	  		})
	  	}

	    return (
	        <div>
				<nav className="navbar navbar-light bg-faded">{renderLinks()}</nav>
	          	<h1>Hello World & Hello Puppy</h1>
	          	<img src="./images/puppy.jpg"/>
	        </div>
	    );
  	}
};
