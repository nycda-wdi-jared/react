import React, { Component } from 'react';

export default class Names extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  }
  render() {
    //console.log(this.props)
    return (
      <p>Name: {this.props.name}</p>
    );
  }
};