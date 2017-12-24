// Include React
var React = require("react");

var Home = React.createClass({
  render: function() {
    return (
        <div>
          <h1>Hello World & Hello Puppy</h1>
          <img src="./images/puppy.jpg"/>
        </div>
    );
  }
});

module.exports = Home;
