import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {ProjectStyles} from './../../styles/Projects.js';

export default class ProjectNav extends Component {
  render() {
    return (
      <div style={ProjectStyles.row} className="row">
        <div style={ProjectStyles.link_div} className="col-md-4 col-md-offset-4">
          <Link style={ProjectStyles.linkTo} to="/">
            <h5 style={ProjectStyles.link}>Home</h5>
          </Link>
          <Link style={ProjectStyles.linkTo} to="/about">
            <h5 style={ProjectStyles.linkToAboutMe}>About Me</h5>
          </Link>
          <Link style={ProjectStyles.linkTo} to="/blog">
            <h5 style={ProjectStyles.link}>Blog</h5>
          </Link>
          <Link style={ProjectStyles.linkTo} to="/email">
            <h5 style={ProjectStyles.link}>Email</h5>
          </Link>
        </div>
      </div>
    );
  }
};