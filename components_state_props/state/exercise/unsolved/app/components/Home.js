// Include React
var React = require("react");
var Link = require("react-router-dom").Link;

export default class Home extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      /* add a state of 'num' here with a value of 0 */
    };
  }
  addNum(){
    /* Change the state of num here */
  }
  subtractNum(){
    /* Change the state of num here */
  }
  render() {
    console.log(this.state);
    return (
        <div>
          {/* Have 2 buttons, Add & Subtract, that when clicked, will change the state num */}
          {/* Remember to use the react built-in onClick */}
          {/* Display the number being changed below that */}
        </div>
    );
  }
};
