// This is the non-babel way to import
// var React = require("react");

// This is the babel way
import React, {Component} from 'react';

//look at where this is being imported from
import movies from '../../public/js/movies.js';

export default class Home extends Component {
  constructor(props) {
      super(props);
      this.state = {
        movieLiked: "black"
      };
  }
  //look where the likeMovie function is being called below and how the paramter of movieLiked is used
  likeMovie(movieLiked){
    //console.log(movieLiked)
    const movie = movies.filter((movie) => movieLiked === movie.title)
    //giving you this filter here, look at the console.log
    //console.log(movie)

    if(/* movie.liked is true */){
      //Leave this.setState there, it will not be used below but weird does not work without it there
      this.setState({
        movieLiked: "black"
      })
      //change the value of liked in the obj to false
    } else {
      //Leave this.setState there, it will not be used below but weird does not work without it there
      this.setState({
        movieLiked: "blue"
      })
      //change the value of liked in the obj to true
    }
  }
  render() {
    //console.log(this.state.movieLiked)
    //return html methods always goes within the render
    var appendMovies = () => {
      return movies.map((movie, index) => {
        //console.log(movie)

        //ternary operator
        /*
          Create the ternary operator here
          if movie.liked is true then return "blue", if not then return "black"
          look at where liked is being used below
        */
        //console.log(liked)
        return (
          <div>
            <p>{movie.title}</p>
            <button 
              key={index}
              type="button"
              className="light-green lighten-3" 
              aria-label="Left Align"
              onClick={() => this.likeMovie(movie.title)}
            >
              <span 
                style={{color: liked}} 
                className="glyphicon glyphicon-thumbs-up" 
                aria-hidden="true"
              >
              </span>
            </button>
          </div>
        )
      })
    }
    return (
      <div>
        {appendMovies()}
      </div>
    );
  }
};
