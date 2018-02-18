// Include React
var React = require("react");

var Home = React.createClass({
  getInitialState: function() {
    return {
      /* create a state called 'matched' here that will just start off as an empty string */
    }
  },
  submitPasswordForm: function(e){
    e.preventDefault();

    const password = this.refs.password.value;
    const confirmPassword = this.refs.confirmPassword.value;
    //console.log(password)
    //console.log(confirmPassword)

    /*
      Write your conditional comparing password & confirmPassword

      if they match, change the state of 'matched' (look above) to 'Yes'
      if they do not match, change the state of 'matched' to 'No'
    */

    this.refs.password.value = "";
    this.refs.confirmPassword.value = "";
  },
  render: function() {
    //console.log(this.state)
    return (
        <div>
          <div className="text-center">
            <form onSubmit={this.submitPasswordForm}>
              <div>
                <h2>Password Matcher</h2>
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
          <div className="text-center">
            <h1>Matched?</h1>
            <h2>{/* Display the state of matched here */}</h2>
          </div>
        </div>
    );
  }
});

module.exports = Home;
