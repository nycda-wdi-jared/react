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
    /* Change the state of num here */
    this.setState({
      num: this.state.num + 1
    })
  }
  subtractNum(){
    /* Change the state of num here */
    this.setState({
      num: this.state.num - 1
    })
  }
  render() {
    console.log(this);
    //console.log(this.addNum)
    return (
        <div>
          {/* Have 2 buttons, Add & Subtract, that when clicked, will change the state num */}
          {/* Remember to use the react built-in onClick */}
          {/* Display the number being changed below that */}
          <button onClick={this.addNum.bind(this)}>Add</button>
          <button onClick={this.subtractNum.bind(this)}>Subtract</button>
          <p>{this.state.num}</p>
        </div>
    );
  }
};
