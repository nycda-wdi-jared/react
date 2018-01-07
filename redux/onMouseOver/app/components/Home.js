// Include React
var React = require("react");
var {connect} = require('react-redux');
var actions = require('../actions/actions.js');

var Home = React.createClass({
  // getInitialState: function() {
  //   return {
  //     opacity: 1
  //   }
  // },
  // componentDidMount: function() {
    
  // },
  // componentDidUpdate: function(prevState) {
    
  // },
  render: function() {
    var {dispatch, opacity} = this.props;
    console.log(this.props)
    return (
        <div id="test" className="container-fluid">
          {/* Landing Page */}
          <h1>Hello World</h1>
          <img src="./images/puppy.jpg" onMouseOver={() => {dispatch(actions.reduceOpacity(0))}} style={{opacity: opacity, transition: "opacity 5s"}}/>
          {/* End Container */}
        </div>
    );
  }
});

const mapStateToProps = (state) => {
    return {
        opacity: state.opacity
    };
};

export default connect(mapStateToProps)(Home);
