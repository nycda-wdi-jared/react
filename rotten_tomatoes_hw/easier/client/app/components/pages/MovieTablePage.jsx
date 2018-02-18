import React, { Component } from 'react';

import MovieTableNav from './../navs/MovieTableNav';
import MovieTableList from './../movie_table/MovieTableList';

export default class MovieTablePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movies: []
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
        	this.setState({
        		movies: movies
        	})
        });
	}
	render() {
	    return (
	        <div>
	    		<MovieTableNav/>
			    <div className="text-center">
		        	<h2 className="lobster">Tomato This</h2>
		        	<MovieTableList movies={this.state.movies}/>
			    </div>
	        </div>
	    );
	}
};