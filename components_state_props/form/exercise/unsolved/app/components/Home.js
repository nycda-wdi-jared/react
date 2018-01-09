import React, { Component } from "react";

import Form from './Form';

export default class Home extends Component {
  constructor(props) {
      super(props);
      this.state = {
        /* set the state of password & confirmPassword to '' */
      };
  }
  formSubmitted(input){
    /* 
      set the state of password & confirmPassword to the values
      in the inputs once the form is submitted
    */
  }
  render() {
    /* view this in the google inspect */
    console.log(this.state)

    /* 
      this is one way to set variables on state items
      now, you can use 'password' instead of 'this.state.password'
    */
    const { password, confirmPassword } = this.state;

    /* 
      Look at how im able to return an html element and then call the function in the html 
      Pretty Cool, right!
    */
    const doPasswordsMatch = () => {
      if(/* write a conditional to make sure theres a value in both inputs */){
        if(/* write a conditional to check that password & confirmPassword state match */){
          return (
            <p>Passwords Match</p>
          )
        } else {
          return (
            <p>Passwords Do Not Match</p>
          )  
        }
      }
    }
    return (
        <div>
          <div className="text-center">
            <h1>Hello React Component Form</h1>
            <Form formSubmit={this.formSubmitted.bind(this)}/>
          </div>
          <div>
            {doPasswordsMatch()}
          </div>
        </div>
    );
  }
};