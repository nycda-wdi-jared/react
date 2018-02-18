// Include React
var React = require("react");
var Link = require("react-router-dom").Link;

export default class Home extends React.Component {
  componentWillUpdate(nextProps, nextState) {
    console.log('home componentWillUpdate')
  }
  componentWillMount() {
    console.log('home componentWillMount');
  }
  componentDidMount() {
    console.log('home componentDidMount');
  }
  componentWillUnmount() {
    console.log('home componentWillUnmount');
  }
  render() {
    console.log('home render')
    return (
        <div>
          <h1>Hello World & Hello Puppy</h1>
          <img src="./images/puppy.jpg"/><br></br>
          <Link to="/profile">Profile Page</Link><br></br>
          <Link 
            className="waves-effect waves-light btn" 
            style={{color: 'white'}} 
            to="/whatever"
          >
            Whatever Page
          </Link>
        </div>
    );
  }
};
