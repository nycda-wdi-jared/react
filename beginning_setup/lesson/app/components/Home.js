// This is the non-babel way to import
// var React = require("react");

// This is the babel way
import React, {Component} from 'react';

export default class Home extends Component {
  render() {
  	/*
		Html within this render method every time
  	*/
    return (
      <div>
        <h1 onClick={() => alert("hello")}>Hello World & Hello Puppy</h1>
        <img className="whatever" src="./images/puppy.jpg"/><br></br>
        <h2>Goodbye What</h2>
      </div>
    );
  }
};
