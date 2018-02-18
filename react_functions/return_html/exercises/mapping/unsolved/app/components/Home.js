// This is the non-babel way to import
// var React = require("react");

// This is the babel way
import React, {Component} from 'react';

//look at where this is being imported from
import obj from '../../public/js/obj.js';

export default class Home extends Component {
  constructor(props) {
      super(props);
      this.state = {
      };
  }
  render() {
    var appendTbody = () => {
      /* 
        write your function to map the object array here 
        and then display the correct information in the table
        Look at the readme for the instructions on what to map
      */
    }
    return (
      <div>
        <table className="striped" style={{width: '25%'}}>
          <thead>
            <tr>
              <th>Nickname</th>
              <th>Less Than or Equal to 30</th>
            </tr>
          </thead>
          <tbody>
            {/* calling the function here */}
            {appendTbody()}
          </tbody>
        </table>
      </div>
    );
  }
};
