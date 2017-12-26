// Include React
var React = require("react");
var {Link} = require('react-router');

var Home = React.createClass({
  	render: function() {
	  	var renderLinks = () => {
	  		var arr = [1,2,3,4,5];
	  		return arr.map((a, index) => {
	  			return (
	  				<Link className="nav-links" key={index} to={`/profile/${a}`}>Profile Page # {a}</Link>
	  			)
	  		})
	  	}
	    return (
	        <div>
				<nav className="navbar navbar-light bg-faded">
					<Link className="nav-links" to="/whatever">Whatever Page</Link>
					{renderLinks()}
				</nav>
	          	<h1>Hello World & Hello Puppy</h1>
	          	<img src="./images/puppy.jpg"/>
	        </div>
	    );
  	}
});

module.exports = Home;
