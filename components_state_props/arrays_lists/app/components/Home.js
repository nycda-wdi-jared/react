// Include React
var React = require("react");
var Link = require("react-router-dom").Link;

import AnimalList from './AnimalList';
import obj from './../../public/js/obj.js';

export default class Home extends React.Component {
  render() {
    return (
        <div>
          <h1>React List Structure</h1>
          <div>
            <AnimalList animals={obj} />
          </div>
        </div>
    );
  }
};
