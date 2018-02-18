// This is the non-babel way to import
// var React = require("react");

// This is the babel way
import React, {Component} from 'react';

export default class Home extends Component {
  constructor(props) {
      super(props);
      this.state = {
        fontSize: 24,
        imgHeight: 100,
        otherFontSize: 18,
        otherImgHeight: 80
      };
  }
  //this way of writing functions is the way they should be written in react
  //not the other way below
  //all examples of function will be used this way
  growText(){
    this.setState({
      otherFontSize: this.state.otherFontSize + 12
    })
  }
  growImage(){
    this.setState({
      otherImgHeight: this.state.otherImgHeight + 20
    })
  }
  render() {
  	/*
  		  This is an example of the function being called within the code
        As you can tell, javascript goes within the brackets
        onClick is one of many custom events within react
  	*/
    return (
      <div>
        <h1 
          //Run this app and tell me what this is doing?
          //this mouseOver is effecting the style of this h1 element
          onMouseOver = {
            () => {
              this.setState({
                fontSize: this.state.fontSize + 1
              })
            }
          }
          style={{fontSize: `${this.state.fontSize}px`}}
        >
          Hello World & Hello Puppy
        </h1>
        <h1 
          //Run this app and tell me what this is doing?
          //this mouseOver is effecting the style of this h1 element
          onMouseOver={this.growText.bind(this)}
          style={{fontSize: `${this.state.otherFontSize}px`}}
        >
          Helloooooooooooo
        </h1>
        <img 
          onClick = {
            () => {
              this.setState({
                imgHeight: this.state.imgHeight + 10
              })
            }
          }
          src="./images/puppy.jpg"
          style={{height: `${this.state.imgHeight}px`, width: 'auto'}}
        />
        <br></br>
        <img
          src="https://www.cesarsway.com/sites/newcesarsway/files/styles/large_article_preview/public/All-about-puppies--Cesar%E2%80%99s-tips%2C-tricks-and-advice.jpg?itok=bi9xUvwe"
          style={{height: `${this.state.otherImgHeight}px`, width: 'auto'}}
          onClick={this.growImage.bind(this)}
        />
      </div>
    );
  }
};
