import React, { Component } from 'react';
import { Link } from 'react-router';
import ReactStars from 'react-stars';

import Logout from './../auth/Logout';

export default class Movie extends Component {
  	constructor(props) {
		super(props);
	    this.state = {
	    	signedIn: false,
	    	movie: undefined
	    };
  	}
	ratingChanged(newRating){
		const { movie } = this.state;
		const { user_id } = this.props;

		var arrString = 'uid:' + user_id + ', rating:' + newRating + '';
		if(movie.rating == 0){
			movie.raters.push(arrString);
			movie.rating = newRating
		} else {
			var ratings = []
			var movieRaterIds = [];
			movie.raters.forEach((rater) => {
				movieRaterIds.push(parseInt(rater.split("uid:")[1].split(",")[0]))
			})
			if(movieRaterIds.indexOf(user_id) > -1){
				var index = movieRaterIds.indexOf(user_id);
				movie.raters[index] = "uid:" + user_id + ", rating:" + newRating + "";
			} else {
				movie.raters.push(arrString);
			}
			movie.raters.forEach((rater) => {
				ratings.push(parseFloat(rater.split("rating:")[1]))
			})
			movie.rating = ratings.reduce((a, v) => a + v)/movie.raters.length;
		}

        fetch('/api/rate-movie',{
            method: 'PUT',
            body: JSON.stringify(movie),
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            }
        }).then((response) => response.json())
        .then((movie) => {
        	this.setState({
        		movie: movie
        	})
        });
	}
	componentWillMount(){
	    fetch('/api/signed-in', {
	        headers: {
	            'content-type': 'application/json',
	            'accept': 'application/json'
	        },
	        credentials: 'same-origin'
	    }).then((response) => response.json())
	    .then((results) => {
	        if(results.message){
	            if(results.message === "signed-in"){
	                this.setState({
	                	signedIn: true
	                })
	            }
	        }
	    });

	    /*
	    	Im doing this because the props dont load up right away
	    */
	    setTimeout(() => {
	    	this.setState({
	    		movie: this.props.movie
	    	})
	    }, 100)
	}
	render() {
		const {signedIn, movie} = this.state;
		const {user_id} = this.props;
		const showYourStars = (userRating) => {
			if(signedIn){
				return (
					<div className="text-center center-block" style={{display: 'inline-flex'}}>
						<span style={{marginRight: '5px', marginTop: '5px'}}>Your Rating</span>
						<ReactStars
							count={5}
							value={parseFloat(userRating)}
							onChange={this.ratingChanged.bind(this)}
							size={24}
							color2={'#ffd700'}
						/>
					</div>
				)
			}
		}
		const appendMovie = () => {
			if(movie){
				var user = movie.raters.filter((rater) => {
					return rater.split("uid:")[1].split(",")[0] == user_id
				});
				let userRating = user.length > 0 ? parseFloat(user[0].split("rating:")[1]) : 0;
				return (
					<div className="row">
						<div className="col-md-4 col-md-offset-4">
							<h4>{movie.title}</h4>
							<span>{movie.description}</span>
							<br></br>
							<a href={`http://www.imdb.com/title/${movie.imdbID}`} target="_blank">
								<img style={{height: '200px', width: 'auto'}} src={movie.poster}/>
							</a>
							<br></br>
							{showYourStars(userRating)}
							<br></br>
							<div className="text-center center-block" style={{display: 'inline-flex'}}>
								<span style={{marginRight: '5px', marginTop: '5px'}}>Overall Rating</span>
								<ReactStars
									count={5}
									value={movie.rating != 0 ? parseFloat(movie.rating) : 0}
									onChange={this.ratingChanged.bind(this)}
									size={24}
									color2={'#ffd700'}
									edit={false}
								/>
							</div>
							<br></br><br></br>
						</div>
					</div>
				)
			}
		}
	    return (
	      <div>
	      	{appendMovie()}
	      </div>
	    );
	}
};