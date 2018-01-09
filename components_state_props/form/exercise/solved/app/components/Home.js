import React, { Component } from "react";

import Form from './Form';

export default class Home extends Component {
  constructor(props) {
      super(props);
      this.state = {
        password: '',
        confirmPassword: ''
      };
  }
  formSubmitted(input){
    this.setState({
      password: input.password,
      confirmPassword: input.confirmPassword
    })
  }
  render() {
    console.log(this.state)
    const { password, confirmPassword } = this.state;

    const doPasswordsMatch = () => {
      if(password !== "" && confirmPassword !== ""){
        if(password === confirmPassword){
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