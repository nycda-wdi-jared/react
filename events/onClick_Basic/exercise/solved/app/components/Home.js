// Include React
var React = require("react");

var Home = React.createClass({
  getInitialState: function() {
    return {
    }
  },
  pikachuClick: function(){
    alert("You clicked on Pikachu")
  },
  charizardClick: function(){
    alert("You clicked on Charizard")
  },
  render: function() {
    return (
        <div>
          <h1>Hello World</h1>
          <img src="./images/pikachu.png" onClick={this.pikachuClick} style={{height: 400, width: "auto"}}/>
          <img src="./images/charizard.png" onClick={this.charizardClick} style={{height: 400, width: "auto"}}/>
        </div>
    );
  }
});

module.exports = Home;
