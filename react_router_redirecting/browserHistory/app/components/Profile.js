// Include React
var React = require("react");
var Link = require("react-router").Link;

export default class Profile extends React.Component {
  render() {
    return (
        <div>
          <h1>Profile Page</h1><br></br>
          <Link to="/">Home Page</Link><br></br>
          <Link to="/whatever">Whatever Page</Link>
        </div>
    );
  }
};