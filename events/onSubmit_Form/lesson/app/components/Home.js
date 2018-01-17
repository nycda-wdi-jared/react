// Include React
var React = require("react");

var Home = React.createClass({
  getInitialState: function() {
    return {
      name: '',
      username: '',
      password: '',
      confirmPassword: ''
    }
  },
  submitForm: function(e){
    e.preventDefault();

    this.setState({
      name: this.refs.name.value,
      username: this.refs.username.value,
      password: this.refs.password.value,
      confirmPassword: this.refs.confirmPassword.value
    })

    this.refs.name.value = "";
    this.refs.username.value = "";
    this.refs.password.value = "";
    this.refs.confirmPassword.value = "";
  },
  render: function() {
    console.log(this.state)
    return (
        <div>
          <div className="text-center">
            <h1>Hello World</h1>
            <form onSubmit={this.submitForm}>
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
});

module.exports = Home;
