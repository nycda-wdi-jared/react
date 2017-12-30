// Include React
var React = require("react");
var Link = require("react-router-dom").Link;

export default class PageNotFound extends React.Component {
  render() {
    return (
        <div>
          <h2>Page Not Found</h2>
          <h2><Link to="/">Back Home</Link></h2>
        </div>
    );
  }
}