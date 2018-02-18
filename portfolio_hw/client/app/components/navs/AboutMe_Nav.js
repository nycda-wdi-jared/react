import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {AboutMeStyles} from './../../styles/AboutMe.js';

export default class HomeNav extends Component {
  render() {
    return (
      <div className="row">
        <div style={AboutMeStyles.link_div} className="col-md-4 col-md-offset-4">
          <Link style={AboutMeStyles.linkTo} to="/">
            <h5 style={AboutMeStyles.homeLink}>Home</h5>
          </Link>
          <Link style={AboutMeStyles.linkTo} to="/projects">
            <h5 style={AboutMeStyles.link}>Projects</h5>
          </Link>
          <Link style={AboutMeStyles.linkTo} to="/blog">
            <h5 style={AboutMeStyles.blogLink}>Blog</h5>
          </Link>
          <Link style={AboutMeStyles.linkTo} to="/email">
            <h5 style={AboutMeStyles.blogLink}>Email</h5>
          </Link>
        </div>
      </div>
    );
  }
};