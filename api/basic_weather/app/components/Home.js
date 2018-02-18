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
    let api_url = 'http://api.openweathermap.org/data/2.5/weather?appid=275d5dfdea53a2d3e3869f48d154e9ac&units=imperial&q=london'
    axios.get(api_url, {
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
        <h1>Look at the console.log in the google inspect</h1>
      </div>
    );
  }
};
