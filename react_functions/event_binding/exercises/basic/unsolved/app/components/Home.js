// This is the non-babel way to import
// var React = require("react");

// This is the babel way
import React, {Component} from 'react';

export default class Home extends Component {
  constructor(props) {
      super(props);
      this.state = {
        text: /* set the state of the text here */,
      };
  }
  changeWords(){
    this.setState({
      text: /* set the new state of the text here */
    })
  }
  render() {
    return (
      <div>
        <br></br>
        <br></br>
        <br></br>
        <h1 
          //Run this app and tell me what this is doing?
          //this mouseOver is effecting the style of this h1 element
          onMouseOver={/* call the function here */}
        >
          {/* insert the text state here */}
        </h1>
      </div>
    );
  }
};
