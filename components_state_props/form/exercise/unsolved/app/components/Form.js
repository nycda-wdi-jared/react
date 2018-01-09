import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
      super(props);
      this.state = {
      };
  }
  submitForm(e){
    e.preventDefault();

    /* write the code pass the values to the component that the form is being imported to */
  }
  render() {
    return (
        <div>
          <form /* remember the onSubmit here */>
            <div>
              <h2>Create Account</h2>
            </div>
            <div>
              {/* create the form with a password & confirm password input */}
            </div>
          </form>
        </div>
    );
  }
};