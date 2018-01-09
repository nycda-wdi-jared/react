import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
      super(props);
      this.state = {
      };
  }
  submitForm(e){
    e.preventDefault();
    /* This is the section where you pass the values to the component that the form is being imported to */
    var formObj = {
      name: this.refs.name.value,
      username: this.refs.username.value,
      password: this.refs.password.value,
      confirmPassword: this.refs.confirmPassword.value
    }
    /* 
      this is the main point where the form data is being sent to another component 
      look for formSubmit in the Home.js file
    */
    this.props.formSubmit(formObj);
  }
  render() {
    return (
        <div>
          <form onSubmit={this.submitForm.bind(this)}>
            <div>
              <h2>Create Account</h2>
            </div>
            <div>
              <div>
                <span className="glyphicon glyphicon-sunglasses"><input type="text" ref="name" placeholder="Enter Name/Nickname"/></span>
              </div>
              <div>
                <span className="glyphicon glyphicon-user"><input type="text" ref="username" placeholder="Enter Username"/></span>
              </div>
              <div>
                <span className="glyphicon glyphicon-lock"><input type="password" ref="password" placeholder="Enter Password"/></span>
              </div>
              <div>
                <span className="glyphicon glyphicon-lock"><input type="password" ref="confirmPassword" placeholder="Confirm Password"/></span>
              </div>
              <div>
                <input className="btn btn-default" type="submit" />
              </div>
            </div>
          </form>
        </div>
    );
  }
};