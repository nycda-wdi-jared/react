// This is the non-babel way to import
// var React = require("react");

// This is the babel way
import React, {Component} from 'react';

export default class Home extends Component {
  constructor(props) {
      super(props);
      this.state = {
        lastThree: undefined
      };
  }
  //this way of writing functions is the way they should be written in react
  //not the other way below
  //all examples of function will be used this way
  appendLastThreeTyped(){
    var inputtedValue = this.refs.inputtedValue.value;
    if(inputtedValue){
      this.setState({
        lastThree: inputtedValue.substring(inputtedValue.length - 3, inputtedValue.length)
      })
    }
  }
  render() {
    /*
      append the last 3 letters typed in the input
      run the app to see what happens and connect it to the code
    */
    const appendInput = () => {
      if(this.state.lastThree){
        return (
          <p>{this.state.lastThree}</p>
        )
      } else {
        return (
          <p>Input Something</p>
        )
      }
    }
    return (
      <div style={{width: '25%', marginLeft: '20px'}}>
        <input ref="inputtedValue" onChange={this.appendLastThreeTyped.bind(this)}/>
        {appendInput()}
      </div>
    );
  }
};

