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
        nflTeams: [],
        index: 0
      };
  }
  nextClick(){
    /*
      When the next button is clicked, set the state of index to the current state of index plus one
    */
  }
  prevClick(){
    /*
      When the next button is clicked, set the state of index to the current state of index minus one
    */
  }
  componentWillMount(){
    axios.get("/api/scrape", {
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      }
    }).then((results) => {
      //console.log(results)
      /*
        Set the state of nflTeams to results.data
      */
    });
  }
  render() {
    //console.log(this.state)
    const {nflTeams, index} = this.state;
    const appendOneTeam = () => {
      /* 
        If the nflTeams array is not undefined and the length is greater than 0
        then append a p tag showing first nfl team in the array along with their yards per game - nflTeams[index]
        look at the value of index. that will be changed with the next and previous button
      */
    }
    const appendPreviousButton = () => {
      /*
        If index >= 1 then append a button with the text of Previous
        Binded will be an onClick function, can you find it above?
      */
    }
    const appendNextButton = () => {
      /*
        If index < nflTeams.length - 1, the nflTeams array is not undefined and the length of nflTeams is greater than 0
        then append a button with the text of Next and bind it with an onClick function
        Can you guess which function you're binding it to above?
      */
    }
    return (
      <div>
        {appendOneTeam()}
        {appendNextButton()}
        {appendPreviousButton()}
      </div>
    );
  }
};
