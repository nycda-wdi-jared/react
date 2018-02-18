// Include React
import React, {Component} from "react";
import {Link} from 'react-router-dom';

import characters from '../js/obj';

export default class Home extends Component {
  	render() {
	  	var renderLinks = () => {
	  		return characters.map((character, index) => {
	  			return (
	  				<Link className="nav-links" key={index} to={`/character/${character.name}`}>{character.name}</Link>
	  			)
	  		})
	  	}

	    return (
	        <div>
				<nav className="navbar navbar-light bg-faded">
					{renderLinks()}
				</nav>
	          	<h1>Hello World & Hello Puppy</h1>
	          	<img src="./images/puppy.jpg"/>
	        </div>
	    );
  	}
};
