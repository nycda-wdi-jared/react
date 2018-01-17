// Include React
var React = require("react");

var Home = React.createClass({
  getInitialState: function() {
    return {
      opacity: 1
    }
  },
  render: function() {
    return (
        <div id="test" className="container-fluid">
          {/* Find the javascript in here */}
          <h1>Hello World</h1>
          <img src="./images/puppy.jpg" onMouseOver={() => this.setState({opacity: 0})} style={{opacity: this.state.opacity, transition: "opacity 2s"}}/>
        </div>
    );
  }
});

module.exports = Home;
