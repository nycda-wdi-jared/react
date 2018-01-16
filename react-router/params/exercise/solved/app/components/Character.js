// Include React
import React, { Component } from 'react';
import HomeButton from './HomeButton';

import characters from '../js/obj';

export default class Character extends Component {
  	render() {
  		//console.log(this.props)
  		//console.log(characters)
  		const param = this.props.match.params.character
	    return (
	        <div>
	        	<HomeButton />
	          	<h1>{param}'s Page</h1>
	          	{
	          		characters.map((character,index) => {
	          			//console.log(index)
	          			if(character.name === param){
	          				let conv_fel = character.convicted_felon ? "Yes" : "No";
		          			return (
			          			<div key={index}>
			          				<p>Age: {character.age}</p>
			          				<p>Convicted Felon? -> {conv_fel}</p>
			          			</div>
		          			)
		          		}
	          		})
	          	}
	        </div>
	    );
  	}
};