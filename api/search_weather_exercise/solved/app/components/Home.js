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
        weather: undefined
      };
  }
  searchWeather(e){
    e.preventDefault();

    let city = this.refs.cityWeather.value.split(" ").join("+").toLowerCase();
    //console.log(city)
    let api_key = '275d5dfdea53a2d3e3869f48d154e9ac'
    let api_url = `http://api.openweathermap.org/data/2.5/weather?appid=${api_key}&units=imperial&q=${city}`
    axios.get(api_url, {
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      }
    }).then((results) => {
      this.setState({
        weather: results.data
      })
      this.refs.cityWeather.value = "";
    });
  }
  render() {
    console.log(this.state.weather)
    const displayWeather = () => {
      if(this.state.weather){
        return (
          <div>
            <h5>Weather Result</h5>
            <p>City: {this.state.weather.name}</p>
            <p>Temperature: {this.state.weather.main.temp}</p>
          </div>
        )
      }
    }
    return (
      <div style={{width: '15%'}}>
        <form onSubmit={this.searchWeather.bind(this)}>
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
