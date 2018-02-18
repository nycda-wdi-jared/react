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
    //console.log(obj)
    //return html methods always goes within the render
    var appendTbody = () => {
      return obj.map((o) => {
        //console.log(o)

        //ternary operator
        let handsome = o.handsome ? "Yes" : "No";
        //console.log(handsome)
        //if o.handsome is true then return "Yes", if not then return "No"
        return (
          <tr>
            <td>{o.name}</td>
            <td>{o.age}</td>
            <td>{handsome}</td>
          </tr>
        )
      })
    }
    return (
      <div>
        <table className="striped" style={{width: '25%'}}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Handsome</th>
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
