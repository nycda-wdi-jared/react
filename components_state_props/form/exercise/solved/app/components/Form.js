import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
      super(props);
      this.state = {
      };
  }
  submitForm(e){
    e.preventDefault();

    var formObj = {
      password: this.refs.password.value,
      confirmPassword: this.refs.confirmPassword.value
    }
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