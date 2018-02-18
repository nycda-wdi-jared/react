import React, {Component} from 'react';

import {HomeStyles} from './../../styles/Home.js';
import HomeNav from './../navs/Home_Nav';

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <div style={HomeStyles.image_div} className="text-center center-block">
          <img src="./images/jared.png"/><img style={HomeStyles.port_image} src="./images/port_pic.png"/><br></br>
        </div>
        <HomeNav />
      </div>
    );
  }
};
