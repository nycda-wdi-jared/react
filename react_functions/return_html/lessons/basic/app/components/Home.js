// This is the non-babel way to import
// var React = require("react");

// This is the babel way
import React, {Component} from 'react';

export default class Home extends Component {
  constructor(props) {
      super(props);
      this.state = {
      };
  }
  render() {
    //return html methods always goes within the render
    var appendToHtml = () => {
      //the html always goes: return ( here )
      return (
        <div>
          <h1>What is up</h1>
          <h2>What is down</h2>
        </div>
      )
    }
    return (
      <div>
        {appendToHtml()}
      </div>
    );
  }
};
