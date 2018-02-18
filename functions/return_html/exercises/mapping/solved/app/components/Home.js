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
        let thirty = o.age <= 30 ? "Yes" : "No";
        //console.log(thirty)
        //if o.age is less than or equal to 30 then return "Yes", if not then return "No"
        return (
          <tr>
            <td>{o.name.substring(0, 3)}</td>
            <td>{thirty}</td>
          </tr>
        )
      })
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
