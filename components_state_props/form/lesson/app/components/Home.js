import React, { Component } from "react";

import Form from './Form';

export default class Home extends Component {
  constructor(props) {
      super(props);
      this.state = {
        name: '',
        username: '',
        password: '',
        confirmPassword: ''
      };
  }
  formSubmitted(input){
    /* 
      once the form is submitted, im setting the state of the inputs 
      look at the console.log in your google inspect
    */
    console.log(input)
    this.setState({
      name: input.name,
      username: input.username,
      password: input.password,
      confirmPassword: input.confirmPassword
    })
  }
  render() {
    /* look at the console log here as well, especially after the form is submitted */
    console.log(this.state)
    return (
        <div>
          <div className="text-center">
            <h1>Hello React Component Form</h1>
            <Form formSubmit={this.formSubmitted.bind(this)}/>
          </div>
          <div>
            <h1>Submitted Values</h1>
            <p>Name: {this.state.name}</p>
            <p>Username: {this.state.username}</p>
            <p>Password: {this.state.password}</p>
            <p>Confirmed Password: {this.state.confirmPassword}</p>
          </div>
        </div>
    );
  }
};