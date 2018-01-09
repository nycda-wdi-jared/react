import React, { Component } from 'react';

import Footer from './Footer';

export default class Home extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  }
  render() {
    return (
        <div>
          <h1>Hello World</h1>
          <img src="./images/puppy.jpg" style={{height: 400, width: "auto"}}/>
          {/* importing the Footer component here, which is merely just html */}
          <Footer/>
        </div>
    );
  }
};
