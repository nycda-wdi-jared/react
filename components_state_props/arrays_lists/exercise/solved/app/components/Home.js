// Include React
var React = require("react");
var Link = require("react-router-dom").Link;

import people from './../../public/js/obj.js';

export default class Home extends React.Component {
  render() {
    //console.log(obj)
    return (
        <div>
          <h1>React List Structure</h1>
          <div>
            <p><strong>Bald</strong></p>
            {
              people.map((person, index) => {
                if(person.bald){
                  return (
                    <p>{person.name}</p>
                  )
                }
              })
            }
          </div>
          <br></br>
          <div>
            <p><strong>Not Bald</strong></p>
            {
              people.map((person, index) => {
                if(!person.bald){
                  return (
                    <p>{person.name}</p>
                  )
                }
              })
            }
          </div>
        </div>
    );
  }
};
