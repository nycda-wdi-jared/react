// Include React
var React = require("react");

var Home = React.createClass({
  getInitialState: function() {
    return {
      opacity: 1
    }
  },
  componentDidMount: function() {
    
  },
  componentDidUpdate: function(prevState) {
    
  },
  render: function() {
    return (
        <div id="test" className="container-fluid">
          {/* Landing Page */}
          <h1>Hello World</h1>
          <img src="./images/puppy.jpg" onMouseOver={() => this.setState({opacity: 0})} style={{opacity: this.state.opacity, transition: "opacity 2s"}}/>
          {/* End Container */}
        </div>
    );
  }
});

module.exports = Home;
