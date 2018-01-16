// Include React
var React = require("react");
var Link = require("react-router-dom").Link;

export default class Whatever extends React.Component {
  render() {
    return (
        <div>
          <h1>Whatever Page</h1><br></br>
          <Link to="/">Home</Link><br></br>
          <Link to="/profile">Profile Page</Link>
        </div>
    );
  }
}