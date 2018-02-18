// This is the non-babel way to import
// var React = require("react");

// This is the babel way
import React, {Component} from 'react';

import SearchForm from './SearchForm';
import MovieList from './MovieList';

import omdb_api from './../api/omdb_api';

export default class Home extends Component {
  constructor(props) {
      super(props);
      this.state = {
        movieInput: '',
        searchResults: undefined
      };
  }
  searchMovie(movieInput){
    this.setState({
      movieInput: movieInput
    })
    omdb_api(movieInput, (res) => {
      if(res.Search){
        this.setState({
          searchResults: res.Search
        })
      }
    });
  }
  render() {
    const { searchResults, movieInput } = this.state;
    return (
      <div className="container">
        <div className="text-center">
          <SearchForm search={this.searchMovie.bind(this)}/>
          <MovieList searchResults={searchResults} movieInput={movieInput}/>
        </div>
      </div>
    );
  }
};
