import React, { Component } from 'react';

import MovieNav from './../navs/MovieNav';
import MovieItem from './../movie/MovieItem';

export default class MoviePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movie: undefined
		};
	}
	componentWillMount(){
        fetch('/api/movies', {
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            }
        }).then((response) => response.json())
        .then((movies) => {
        	const titleSJ = this.props.params.title.split("+").join(" ");
        	const selectedMovie = movies.filter((movie) => movie.title.toLowerCase() === titleSJ);
        	this.setState({
        		movie: [...selectedMovie][0]
        	})
        });
	}
	render() {
		const {movie} = this.state
		const appendMovie = () => {
			if(movie){
				return (
		        	<MovieItem
		        		title={movie.title}
		        		description={movie.description}
		        		imdbID={movie.imdbID}
		        		poster={movie.poster}
		        	/>
				)
			}
		}
	    return (
	        <div>
	    		<MovieNav/>
			    <div className="text-center">
		        	<h2 className="lobster">Tomato That</h2>
		        	{appendMovie()}
			    </div>
	        </div>
	    );
	}
};