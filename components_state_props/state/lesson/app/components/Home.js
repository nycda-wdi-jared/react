// Include React
var React = require("react");
var Link = require("react-router-dom").Link;

export default class Home extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      name: '',
      age: 0,
      num: 100
    };
  }
  changeAge(){
    this.setState({
      age: this.state.age + 1
    })
  }
  componentWillMount(){
    setInterval(function(){
      this.setState({
        num: this.state.num - 1
      });
      if(this.state.num > 90){
        this.setState({
          name: 'joey'
        })
      } else if (this.state.num > 80){
        this.setState({
          name: 'jared'
        })
      } else if (this.state.num > 70){
        this.setState({
          name: 'frank'
        })
      } else if (this.state.num > 60){
        this.setState({
          name: 'joan'
        })
      }
    }.bind(this), 1000);
  }
  render() {
    console.log(this.state);
    return (
        <div>
          <h1>Hello World & Hello Puppy</h1>
          <img src="./images/puppy.jpg"/><br></br>
          <p>Name: {this.state.name}</p>
          <p>Num: {this.state.num}</p>
          <p onClick={this.changeAge.bind(this)}>Age (click me): {this.state.age}</p>
          <Link to="/profile">Profile Page</Link><br></br>
          <Link to="/whatever">Whatever Page</Link>
        </div>
    );
  }
};
