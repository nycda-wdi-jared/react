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
  likeMovie(movieLiked){
    const movie = movies.filter((movie) => movieLiked === movie.title)
    //this is a strange on, as im not using the state of movieLiked below,
    //but this will only work if this.setState is there....weird
    if(movie[0].liked){
      this.setState({
        movieLiked: "black"
      })
      movie[0].liked = false;
    } else {
      this.setState({
        movieLiked: "blue"
      })
      movie[0].liked = true;
    }
  }
  render() {
    //console.log(this.state.movieLiked)
    //return html methods always goes within the render
    var appendMovies = () => {
      return movies.map((movie, index) => {
        //console.log(o)

        //ternary operator
        let liked = movie.liked ? "blue" : "black";
        //console.log(liked)
        //if movie.liked is true then return "blue", if not then return "black"
        //look at where liked is being used below
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
