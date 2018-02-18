// This is the non-babel way to import
// var React = require("react");

// This is the babel way
import React, {Component} from 'react';

export default class Home extends Component {
  constructor(props) {
      super(props);
      this.state = {
      };
  }
  render() {
    //return html methods always goes within the render
    var appendNav = () => {
      //html goes within the return here
      return (
        <nav className="navbar navbar-light bg-faded">
          <p>Nav Bar</p>
        </nav>
      )
    }
    var appendTable = () => {
      return (
        <table>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
          <tr>
            <td>Jared</td>
            <td>30</td>
          </tr>
          <tr>
            <td>Joey</td>
            <td>45</td>
          </tr>
        </table>
      )
    }
    return (
      <div>
        {appendNav()}
        <br></br>
        {appendTable()}
      </div>
    );
  }
};
