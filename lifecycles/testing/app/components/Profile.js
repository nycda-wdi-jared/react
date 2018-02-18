// Include React
var React = require("react");
var Link = require("react-router-dom").Link;

export default class Profile extends React.Component {
	componentWillUpdate(nextProps, nextState) {
		console.log('profile componentWillUpdate')
	}
	componentWillMount() {
		console.log('profile componentWillMount');
	}
	componentDidMount() {
		console.log('profile componentDidMount');
	}
	componentWillUnmount() {
		console.log('profile componentWillUnmount');
	}
  	render() {
  		console.log('profile render')
	    return (
	        <div>
	          <h1>Profile Page</h1><br></br>
	          <Link to="/">Home Page</Link><br></br>
	          <Link to="/whatever">Whatever Page</Link>
	        </div>
	    );
  	}
};