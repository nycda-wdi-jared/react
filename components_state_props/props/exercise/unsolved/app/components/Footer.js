import React, { Component } from 'react';

export default class Footer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  }
  render() {
    return (
        <div className="text-center">
          <footer>
            <p>Welcome to React</p>
          </footer>
        </div>
    );
  }
};