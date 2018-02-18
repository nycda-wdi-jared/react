// This is the non-babel way to import
// var React = require("react");

// This is the babel way
import React, {Component} from 'react';

//look at where this is being imported from
import movies from '../../public/js/movies.js';
import users from '../../public/js/raters.js';

export default class Home extends Component {
  constructor(props) {
      super(props);
      this.state = {
        movieLiked: "black",
        showMoviesInfo: false,
        userId: undefined
      };
  }
  likeMovie(movieLiked, userId){
    const movie = movies.filter((movie) => movieLiked === movie.title)
    //this is a strange on, as im not using the state of movieLiked below,
    //but this will only work if this.setState is there....weird
    if(movie[0].likers.indexOf(userId) > -1){
      this.setState({
        movieLiked: "black"
      })
      movie[0].likers.splice(movie[0].likers.indexOf(userId), 1)
    } else {
      this.setState({
        movieLiked: "blue"
      })
      movie[0].likers.push(userId)
    }
  }
  showMovies(user_id){
    this.setState({
      userId: user_id,
      showMoviesInfo: true
    })
  }
  render() {
    //console.log(this.state.movieLiked)
    //return html methods always goes within the render
    var appendMovies = () => {
      if(this.state.showMoviesInfo){
        return movies.map((movie, index) => {
          //console.log(o)

          //ternary operator
          let liked = movie.likers.indexOf(this.state.userId) > -1 ? "blue" : "black";
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
                onClick={() => this.likeMovie(movie.title, this.state.userId)}
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
    }
    const appendNames = () => {
      return users.map((user) => {
        return (
          <a 
            className="waves-effect waves-light btn-large"
            onClick={() => this.showMovies(user.id)}
          >
            {user.name}
          </a>
        )
      })
    }
    return (
      <div style={{marginLeft: '25px'}}>
        {appendNames()}
        {appendMovies()}
      </div>
    );
  }
};
