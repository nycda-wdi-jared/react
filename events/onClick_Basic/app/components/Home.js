// Include React
var React = require("react");

var Home = React.createClass({
  getInitialState: function() {
    return {
    }
  },
  alertClick: function(){
    alert("You clicked on the dog");
  },
  render: function() {
    return (
        <div>
          <h1>Hello World</h1>
          <img src="./images/puppy.jpg" onClick={this.alertClick} style={{height: 400, width: "auto"}}/>
          {/* if there are no parameters, you don't have to use () after calling the function */}
          {/* or the onClick can look like this:  onClick={() => this.alertClick()} */}
        </div>
    );
  }
});

module.exports = Home;
