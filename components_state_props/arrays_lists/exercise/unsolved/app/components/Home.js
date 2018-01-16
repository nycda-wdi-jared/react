// Include React
var React = require("react");
var Link = require("react-router-dom").Link;

import people from './../../public/js/obj.js';

export default class Home extends React.Component {
  render() {
    //console.log(people)
    return (
        <div>
          <h1>React List Structure</h1>
          <div>
            <p><strong>Bald</strong></p>
            {
              /*
                Map the people array
                If the person is bald (bald is true), then return
                the bald peoples names here
              */
            }
          </div>
          <br></br>
          <div>
            <p><strong>Not Bald</strong></p>
            {
              /*
                Map the people array
                If the person is not bald (bald is false), then return
                the non-bald peoples names here
              */
            }
          </div>
        </div>
    );
  }
};
