import React, { Component } from 'react';
import Footer from './Footer';
import ChildNumber from './ChildNumber';

export default class Home extends Component {
  constructor(props, context) {
    super(props, context);
    //these act as variables throughout the Home component
    //this is called state, the current state of the items on the page
    this.state = {
      num: 0
    };
  }
  addNum(){
    this.setState({
      num: this.state.num + 1
    })
  }
  render() {
    return (
        <div>
          <h1>Hello React</h1>
          <h2>Click the button the see the 'num' state change</h2>
          <button className="btn btn-primary" onClick={this.addNum.bind(this)}>State Changer</button>
          <h3>Parent's Number: {this.state.num}</h3>
          {/* importing the ChildNumber Component */}
          {/* exporting the 'num' state to be used in the ChildNumber component, this is called passing down props */}
          <ChildNumber num={this.state.num} />
          {/* importing the Footer component here, which is merely just html */}
          <Footer/>
        </div>
    );
  }
};
