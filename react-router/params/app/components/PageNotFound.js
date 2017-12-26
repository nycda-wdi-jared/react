// Include React
var React = require("react");

var PageNotFound = React.createClass({
  render: function() {
    return (
        <div>
          <h1>Sorry, page not FOUND</h1>
        </div>
    );
  }
});

module.exports = PageNotFound;