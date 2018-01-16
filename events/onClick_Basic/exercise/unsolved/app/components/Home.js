// Include React
var React = require("react");

var Home = React.createClass({
  getInitialState: function() {
    return {
    }
  },
  /* write your pikachuClick function here */
  /* write your charizardClick function here */
  render: function() {
    return (
        <div>
          <h1>Hello World</h1>
          <img src="./images/pikachu.png" onClick={/* call the pikachu click function here */} style={{height: 400, width: "auto"}}/>
          <img src="./images/charizard.png" onClick={/* call the charizard click function here */} style={{height: 400, width: "auto"}}/>
        </div>
    );
  }
});

module.exports = Home;
