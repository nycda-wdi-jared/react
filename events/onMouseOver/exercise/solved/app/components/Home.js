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
            onMouseOver={() => this.setState({helloWorldColor: 'red'})} 
            style={{color: this.state.helloWorldColor}}
            onMouseLeave={() => this.setState({helloWorldColor: 'blue'})}
          >
            Hello World
          </h1>
        </div>
    );
  }
});

module.exports = Home;
