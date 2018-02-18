// Include React
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'

class Home extends Component {
  redirectToWhatever(){
    this.props.history.push('/whatever')
  }
  redirectToProfile(){
    this.props.history.push('/profile')
  }
  render() {
    return (
        <div>
          <h1>Hello World & Hello Puppy</h1>
          <img src="./images/puppy.jpg"/><br></br>
          {/* Look at how i'm doing the redirect onMouseOver, look for the function up above */}
          <span onMouseOver={this.redirectToProfile.bind(this)}>Profile Page</span><br></br>
          <a 
            className="waves-effect waves-light btn"
          >
            <span style={{color: 'white'}} onClick={this.redirectToWhatever.bind(this)}>Whatever Page</span>
          </a>
        </div>
    );
  }
};

export default withRouter(Home)
