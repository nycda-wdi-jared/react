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
    var appendNav = () => {
      /* create your navbar here */
    }
    var appendTable = () => {
      /* create your table here */
    }
    return (
      <div>
        {/* call one of the functions here */}
        <br></br>
        {/* call another function here */}
      </div>
    );
  }
};
