import React, { Component } from 'react';

//exporting this component to be used somewhere  else
export default class Header extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  }
  render() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-default clearfix" role="navigation">
            <p className="text-center">Bootstrap Nav Bar</p>
          </nav>
        </header>
      </div>
    );
  }
};