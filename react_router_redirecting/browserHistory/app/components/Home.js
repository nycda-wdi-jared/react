// Include React
import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router'

export default class Home extends Component {
  redirectToWhatever(){
    browserHistory.push('/whatever')
  }
  redirectToProfile(){
    browserHistory.push('/profile')
  }
  render() {
    return (
        <div>
          <h1>Hello World & Hello Puppy</h1>
          <img src="./images/puppy.jpg"/><br></br>
          {/* Look at how i'm doing the redirect onMouseOver, look for the function up above */}
          <span onMouseOver={this.redirectToProfile.bind(this)}>Profile Page</span><br></br>
          <a 
            className="waves-effect waves-light btn"
          >
            <span style={{color: 'white'}} onClick={this.redirectToWhatever.bind(this)}>Whatever Page</span>
          </a>
        </div>
    );
  }
};
