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
        /* set the state of weather to undefined */
      };
  }
  searchWeather(e){
    e.preventDefault();
    /*
      store the value of the input into a variable (let) called city
      make sure to replace the spaces with plus have it be lowercase
      that's just because im nit picky on that, you dont have to

      the value of the input is represented as this.refs.cityWeather.value
      look for cityWeather in the input below to see how that is created

      That city variable is inserted into the api_url, look for it
    */
    //console.log(city)
    let api_key = '275d5dfdea53a2d3e3869f48d154e9ac'
    let api_url = `http://api.openweathermap.org/data/2.5/weather?appid=${api_key}&units=imperial&q=${city}`
    axios.get(api_url, {
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      }
    }).then((results) => {
      /* Set the state of weather to results.data */

      //This here clears the input once the callback is hit
      this.refs.cityWeather.value = "";
    });
  }
  render() {
    //console.log(this.state.weather)
    const displayWeather = () => {
      /*
        Within this function, if this.state.weather is not undefined
        Then display the results of the weater.
        I just displayed the city name and the current weather.
        Start with that, and then append more.

        As you can see, this function is being called below
      */
    }
    return (
      <div style={{width: '15%'}}>
        <form onSubmit={/* bind this to the correct function */}>
          <label>City</label>
          <input type="text" ref="cityWeather"/>
          <input type="submit"/>
        </form>
        <br></br>
        {displayWeather()}
      </div>
    );
  }
};
