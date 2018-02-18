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

    let handsome = obj.filter((o) => o.handsome)
    //console.log(handsome)
    let notHandsome = obj.filter((o) => !o.handsome)
    //console.log(notHandsome)

    var appendHandsomeTbody = () => {
      return handsome.map((o, index) => {
        //console.log(o)

        return (
          <tr>
            <td key={index}>{o.name}</td>
            <td>{o.age}</td>
          </tr>
        )
      })
    }
    var appendNotHandsomeTbody = () => {
      return notHandsome.map((o, index) => {
        //console.log(o)

        return (
          <tr>
            <td key={index}>{o.name}</td>
            <td>{o.age}</td>
          </tr>
        )
      })
    }
    return (
      <div>
        <div>
          <h2>Handsome Table</h2>
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
              {appendHandsomeTbody()}
            </tbody>
          </table>
        </div>
        <div>
          <h2>Not Handsome Table</h2>
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
              {appendNotHandsomeTbody()}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
};
