// Include React
var React = require("react");

var Home = React.createClass({
  getInitialState: function() {
    return {
      helloWorldColor: ''
    }
  },
  render: function() {
    return (
        <div id="test" className="container-fluid">
          {/* Find the javascript in here */}
          <h1 
            onMouseOver={/* set the state of helloWorldColor to red */} 
            style={{/* have your color set to the state of helloWorldColor */}}
            onMouseLeave={/* set the state of helloWorldColor back to blue */}
          >
            Hello World
          </h1>
        </div>
    );
  }
});

module.exports = Home;
