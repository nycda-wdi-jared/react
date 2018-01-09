// Include React
var React = require("react");
var Link = require("react-router-dom").Link;

export default class Home extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      num: 0
    };
  }
  addNum(){
    this.setState({
      num: this.state.num + 1
    })
  }
  subtractNum(){
    this.setState({
      num: this.state.num - 1
    })
  }
  render() {
    console.log(this.state);
    return (
        <div>
          <button onClick={this.addNum.bind(this)}>Add Num</button>
          <button onClick={this.subtractNum.bind(this)}>Add Num</button>
          <p>Num: {this.state.num}</p>
        </div>
    );
  }
};
