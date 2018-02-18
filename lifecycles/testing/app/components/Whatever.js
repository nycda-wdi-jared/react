// Include React
var React = require("react");
var Link = require("react-router-dom").Link;

export default class Whatever extends React.Component {
	componentWillUpdate(nextProps, nextState) {
		console.log('whatever componentWillUpdate')
	}
	componentWillMount() {
		console.log('whatever componentWillMount');
	}
	componentDidMount() {
		console.log('whatever componentDidMount');
	}
	componentWillUnmount() {
		console.log('whatever componentWillUnmount');
	}
  	render() {
  		console.log('whatever render')
	    return (
	        <div>
	          <h1>Whatever Page</h1><br></br>
	          <Link to="/">Home</Link><br></br>
	          <Link to="/profile">Profile Page</Link>
	        </div>
	    );
  	}
}