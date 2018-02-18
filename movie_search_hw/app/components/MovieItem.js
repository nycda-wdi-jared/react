// This is the non-babel way to import
// var React = require("react");

// This is the babel way
import React, {Component} from 'react';

import MovieItem from './MovieItem';

export default class Home extends Component {
  	render() {
	    const { imdbID, title, poster } = this.props;
	    const appendMovie = () => {
			return (
				<div>
					<a target="_blank" href={`https://www.imdb.com/title/${imdbID}`}><li>{title}</li></a>
					<a target="_blank" href={`https://www.imdb.com/title/${imdbID}`}><img src={poster} style={{height: '100px', width: '50px'}}/></a>
				</div>
			)
		}
		return (
			<div>
				{appendMovie()}
			</div>
		);
  	}
};