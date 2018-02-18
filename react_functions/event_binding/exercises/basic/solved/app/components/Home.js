// This is the non-babel way to import
// var React = require("react");

// This is the babel way
import React, {Component} from 'react';

export default class Home extends Component {
  constructor(props) {
      super(props);
      this.state = {
        text: 'What\'s up React',
      };
  }
  changeWords(){
    this.setState({
      text: 'React Functions Are Cool'
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
          //this mouseOver is effecting the text of this h1 element
          onMouseOver={this.changeWords.bind(this)}
        >
          {this.state.text}
        </h1>
      </div>
    );
  }
};
