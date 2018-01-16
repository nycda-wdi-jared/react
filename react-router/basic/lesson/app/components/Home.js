// Include React
var React = require("react");
var Link = require("react-router-dom").Link;

export default class Home extends React.Component {
  render() {
    return (
        <div>
          <h1>Hello World & Hello Puppy</h1>
          <img src="./images/puppy.jpg"/><br></br>
          <Link to="/profile">Profile Page</Link><br></br>
          <Link to="/whatever">Whatever Page</Link>
        </div>
    );
  }
};
