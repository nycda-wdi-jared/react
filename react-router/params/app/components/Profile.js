// Include React
import React, { Component } from 'react';

export default class Profile extends Component {
  render() {
    return (
        <div>
          <h1># {this.props.params.id}'s Profile Page</h1>
        </div>
    );
  }
};