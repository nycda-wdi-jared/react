import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {BlogStyles} from './../../styles/Blog.js';

export default class BlogNav extends Component {
  render() {
    return (
      <div className="row">
        <div style={BlogStyles.link_div} className="col-md-4 col-md-offset-4">
          <Link style={BlogStyles.linkTo} to="/">
            <h5 style={BlogStyles.link}>Home</h5>
          </Link>
          <Link style={BlogStyles.linkTo} to="/about">
            <h5 style={BlogStyles.linkToAboutMe}>About Me</h5>
          </Link>
          <Link style={BlogStyles.linkTo} to="/projects">
            <h5 style={BlogStyles.link}>Projects</h5>
          </Link>
          <Link style={BlogStyles.linkTo} to="/email">
            <h5 style={BlogStyles.link}>Email</h5>
          </Link>
        </div>
      </div>
    );
  }
};