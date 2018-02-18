// This is the non-babel way to import
// var React = require("react");

// This is the babel way
import React, {Component} from 'react';

//fetch does not work for api calls in react
//axios does
//https://medium.com/@thejasonfile/fetch-vs-axios-js-for-making-http-requests-2b261cdd3af5
import axios from 'axios';

export default class Home extends Component {
	searchMovie(){
		this.props.search(this.refs.movieSearch.value)
	}
  	render() {
	    return (
	        <input 
	            type="text" 
	            ref="movieSearch" 
	            onChange={this.searchMovie.bind(this)}
	            style={{width: '25%', borderStyle: 'inset'}}
	            placeholder="Search Movie"
	        />
	    );
  	}
};