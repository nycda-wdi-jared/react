import React, { Component } from 'react';

export default class Footer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  }
  render() {
    return (
      //Remember the props being passed down from the Home component
      //We use that in this component as this.props.<whatever>
      <h4>Childs Number: {this.props.num * 2}</h4>
    );
  }
};