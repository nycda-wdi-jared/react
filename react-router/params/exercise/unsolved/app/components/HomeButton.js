// Include React
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HomeButton extends Component {
  	render() {
	    return (
	        <div>
				<Link to="/">					
					<button className='btn btn-primary'>
						<span className='glyphicon glyphicon-home' aria-hidden='true'></span>
					</button>
				</Link>
	        </div>
	    );
  	}
};