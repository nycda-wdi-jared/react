import React, { Component } from 'react';
import Footer from './Footer';
import Name from './Name';

export default class Home extends Component {
  constructor(props, context) {
    super(props, context);
    //these act as variables throughout the Home component
    //this is called state, the current state of the items on the page
    this.state = {
      names: ['Jamie', 'Jackie', 'Jody']
    };
  }
  render() {
    /*
      This is an example of a spread operator (...) which will basically
      add items in an array into another array.
      Look at the console.log below

      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator
    */
    // console.log(this.state.names)
    // const arr = ['Joey', 'Jared', 'Jimmy', ...this.state.names]
    // console.log(arr)
    return (
        <div>
          <h1>React Props Exercise</h1>
          {
            /*
              Map the this.state.names array and pass each item
              from that map into the Name component:

              this.state.whatevers((whatever, index) => {
                return (
                  <WhateverComponent
                    key={index}
                    whatever={whatever}
                  />
                )
              })

            */
          }
          <Footer/>
        </div>
    );
  }
};
