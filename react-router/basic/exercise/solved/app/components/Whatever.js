// Include React
var React = require("react");
var Link = require("react-router-dom").Link;

export default class Whatever extends React.Component {
  	render() {
	    return (
	        <div>
	          <h1>Whatever Page</h1><br></br>
				<footer className="text-center">
					<Link style={{padding: '5px'}} to="/">Home Page</Link>
					<Link style={{padding: '5px'}} to="/profile">Profile Page</Link>
				</footer>
	        </div>
	    );
  	}
}