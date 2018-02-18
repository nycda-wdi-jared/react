// This is the non-babel way to import
// var React = require("react");

// This is the babel way
import React, {Component} from 'react';

//fetch does not work for api calls in react
//axios does
//https://medium.com/@thejasonfile/fetch-vs-axios-js-for-making-http-requests-2b261cdd3af5
import axios from 'axios';

export default class Home extends Component {
  constructor(props) {
      super(props);
      this.state = {
      };
  }
  componentWillMount(){
    axios.get("/api/scrape", {
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      }
    }).then((results) => {
      console.log(results.data)
    });
  }
  render() {
    return (
      <div>
        <h1>Basic Scraping</h1>
        <h2>Look at the console.log in the google inspect</h2>
        <h2>Look at the scrape being sent from the /api/scrape route on the server side</h2>
      </div>
    );
  }
};
