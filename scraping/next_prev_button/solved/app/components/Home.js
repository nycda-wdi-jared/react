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
    this.setState({
      index: this.state.index + 1
    })
  }
  prevClick(){
    this.setState({
      index: this.state.index - 1
    })
  }
  componentWillMount(){
    axios.get("/api/scrape", {
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      }
    }).then((results) => {
      this.setState({
        nflTeams: results.data
      })
    });
  }
  render() {
    const {nflTeams, index} = this.state;
    console.log(nflTeams)
    const appendOneTeam = () => {
      if(nflTeams && nflTeams.length > 0){
        return (
          <div>
            <p>{nflTeams[index].team}: {nflTeams[index].ypg} Yards Per Game</p>
          </div>
        )
      }
    }
    const appendPreviousButton = () => {
      if(index >= 1){
        return (
          <a onClick={this.prevClick.bind(this)} className="waves-effect waves-light btn">Previous</a>
        )
      }
    }
    const appendNextButton = () => {
      if(nflTeams && (nflTeams.length > 0) && (index < nflTeams.length - 1)){
        return (
          <a onClick={this.nextClick.bind(this)} className="waves-effect waves-light btn">Next</a>
        )
      }
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
