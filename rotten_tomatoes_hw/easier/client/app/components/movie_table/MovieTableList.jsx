import React, { Component } from 'react';

import MovieTableTr from './MovieTableTr';

export default class MovieTableList extends Component {
	render() {
		const mapMovies = () => {
			return this.props.movies.map((movie, index) => {
				return (
					<MovieTableTr
						key={index}
						title={movie.title}
						year={movie.year}
						num={index + 1}
					/>
				)
			})
		}
	    return (
	        <div>
	        	<p>Click on row to view description and/or comment</p>
		        <table className="table" style={{width: '33%', marginLeft: '50px'}}>
		        	<thead>
		        		<tr>
		        			<th>#</th>
		        			<th>Title</th>
		        			<th>Year</th>
		        		</tr>
		        	</thead>
		        	<tbody>
	        			{mapMovies()}
	        		</tbody>
	        	</table>
	        </div>
	    );
	}
};		        	
