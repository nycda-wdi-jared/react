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
    //console.log(movieLiked)
    //console.log(userId)
    const movie = movies.filter((movie) => movieLiked === movie.title)
    //console.log(movie)
    //this is a strange on, as im not using the state of movieLiked below,
    //but this will only work if this.setState is there....weird
    if(/* if the index of userId is greater than -1 in the movie likers array */){
      //if the usersId is in the likers array
      //if the user has liked the movie
      this.setState({
        movieLiked: "black"
      })
      /* 
          splice the users id out of the movie likers array
          i.e. likersArr.splice(indexOfUserId, 1)
          remove the users id from the likers array since they are unliking the movie
      */
    } else {
      //if the usersId is not in the likers array
      //if the user has liked the movie
      this.setState({
        movieLiked: "blue"
      })
      /*
        Add (push) the users id to the likers array since they liked the movie
      */
    }
  }
  showMovies(user_id){
    /*
      Set the state of the userId to user_id
      Set the state of showMoviesInfo to true

      From the ui perspective, when the users button is clicked, display
      the movie information and information about which movies the user has liked
      Look for when this function is called
    */
  }
  render() {
    //console.log(this.state)
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
      /*
        Map the users array and append buttons with the users names to the dom
        use materialize: http://materializecss.com/buttons.html

        Set an onClick function on that button to the showMovies function
        Put the user.id as the parameters in the showMovies function
        When that button is clicked, be sure to look at the console.log
        of user_id within that showMovies method above
      */
    }
    return (
      <div style={{marginLeft: '25px'}}>
        {appendNames()}
        {appendMovies()}
      </div>
    );
  }
};
