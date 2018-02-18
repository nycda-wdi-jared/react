import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {EmailStyles} from './../../styles/Email.js';

export default class EmailNav extends Component {
  render() {
    return (
      <div className="row">
        <div style={EmailStyles.link_div} className="col-md-4 col-md-offset-4">
          <Link style={EmailStyles.linkTo} to="/">
            <h5 style={EmailStyles.link}>Home</h5>
          </Link>
          <Link style={EmailStyles.linkTo} to="/about">
            <h5 style={EmailStyles.linkToAboutMe}>About Me</h5>
          </Link>
          <Link style={EmailStyles.linkTo} to="/projects">
            <h5 style={EmailStyles.link}>Projects</h5>
          </Link>
          <Link style={EmailStyles.linkTo} to="/blog">
            <h5 style={EmailStyles.link}>Blog</h5>
          </Link>
        </div>
      </div>
    );
  }
};