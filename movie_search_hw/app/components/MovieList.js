// This is the non-babel way to import
// var React = require("react");

// This is the babel way
import React, {Component} from 'react';

import MovieItem from './MovieItem';

export default class Home extends Component {
  render() {
	    const { searchResults, movieInput } = this.props;
	    const appendMovies = () => {
			if(searchResults && movieInput.length > 0){
				return (
					<ul>
					{
					    searchResults.map((res, index) => {
						    return (
						    	<MovieItem
						    		key={index}
						    		imdbID={res.imdbID}
						    		title={res.Title}
						    		poster={res.Poster}
						    	/>
						    )
					    })
					}
					</ul>
				)
			} else if (movieInput.length == 0) {
				return (
					<p>Please enter text to search movies</p>
				)
			} else {
				return (
					<p>No Movie Found</p>
				)
			}
		}
		return (
			<div>
				{appendMovies()}
			</div>
		);
  	}
};