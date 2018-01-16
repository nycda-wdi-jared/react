// This is the non-babel way to import
// var React = require("react");
// var Link = require("react-router-dom").Link;

// This is the babel way
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Hello World & Hello Puppy</h1>
        <img src="./images/puppy.jpg"/><br></br>
        <footer className="text-center">
          <Link style={{padding: '5px'}} to="/profile">Profile Page</Link>
          <Link style={{padding: '5px'}} to="/whatever">Whatever Page</Link>
        </footer>
      </div>
    );
  }
};
