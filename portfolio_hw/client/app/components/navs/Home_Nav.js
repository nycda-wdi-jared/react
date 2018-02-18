import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {HomeStyles} from './../../styles/Home.js';

export default class HomeNav extends Component {
  render() {
    return (
      <div className="row">
        <div style={HomeStyles.link_div} className="col-md-4 col-md-offset-4">
          <Link style={HomeStyles.linkTo} to="/projects">
            <h6 style={HomeStyles.link}>Projects</h6>
          </Link>
          <Link style={HomeStyles.linkTo} to="/about">
            <h6 style={HomeStyles.linkToAboutMe}>About Me</h6>
          </Link>
          <Link style={HomeStyles.linkTo} to="/blog">
            <h6 style={HomeStyles.link}>Blog</h6>
          </Link>
          <Link style={HomeStyles.linkTo} to="/email">
            <h6 style={HomeStyles.link}>Email</h6>
          </Link>
        </div>
      </div>
    );
  }
};