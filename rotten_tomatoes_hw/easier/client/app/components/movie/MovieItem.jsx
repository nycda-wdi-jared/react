import React, { Component } from 'react';

export default class MovieItem extends Component {
	render() {
		const {title, description, imdbID, poster} = this.props;
		const appendMovie = () => {
			return (
				<div className="row">
					<div className="col-md-4 col-md-offset-4">
						<h4>{title}</h4>
						<span>{description}</span>
						<br></br>
						<a href={`http://www.imdb.com/title/${imdbID}`} target="_blank">
							<img style={{height: '200px', width: 'auto'}} src={poster}/>
						</a>
					</div>
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