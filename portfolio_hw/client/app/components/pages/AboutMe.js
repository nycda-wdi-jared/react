import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import AboutMe_Nav from './../navs/AboutMe_Nav'
import {AboutMeStyles} from './../../styles/AboutMe';

export default class AboutMe extends Component {
  render() {
    return (
        <div>
	        <div style={AboutMeStyles.image_div} className="text-center center-block">
	          <img style={AboutMeStyles.aboutme_image} src="./images/about_me.png"/>
	        </div>
	        <div style={AboutMeStyles.image_div} className="text-center center-block">
	          <img style={AboutMeStyles.jared_image} src="./images/jared_pic.png"/>
	        </div>
	        <div className="row">
	        	<div className="col-md-1"></div>
	        	<div className="col-md-3">
		        	<p style={AboutMeStyles.ul_header_text}>Education</p>
		        	<ul>
		        		<li style={AboutMeStyles.li_text}>
		        			<p style={AboutMeStyles.col_text}>College: </p> <p style={AboutMeStyles.answers_text}> Towson University</p>
		        		</li>
		        		<br></br>
		        		<li style={AboutMeStyles.li_text}>
		        			<p style={AboutMeStyles.col_text}>Masters: </p> <p style={AboutMeStyles.answers_text}> St. Peters University</p>
		        		</li>
		        		<br></br>
		        		<li style={AboutMeStyles.li_text}>
		        			<p style={AboutMeStyles.col_text}>Coding: </p> <p style={AboutMeStyles.answers_text}> Rutgers Coding Bootcamp</p>
		        		</li>
		        	</ul>
		        </div>
		        <div className="col-md-3">
		        	<p style={AboutMeStyles.ul_header_text}>Dev Experience</p>
		        	<ul>
		        		<li style={AboutMeStyles.li_text}>
		        			<p style={AboutMeStyles.col_text}>BNY Mellon:</p> <p style={AboutMeStyles.answers_text}>Senior Developer</p>
		        		</li>
		        		<br></br>
		        		<li style={AboutMeStyles.li_text}>
		        			<p style={AboutMeStyles.col_text}>Rutgers Coding Bootcamp:</p> <p style={AboutMeStyles.answers_text}>Tutor</p>
		        		</li>
		        		<br></br>
		        		<li style={AboutMeStyles.li_text}>
		        			<p style={AboutMeStyles.col_text}>NYCDA:</p> <p style={AboutMeStyles.answers_text}>Teacher</p>
		        		</li>
		        	</ul>	
		        </div>
		        <div className="col-md-2">
		        	<p style={AboutMeStyles.ul_header_text}>Dev Skills</p>
		        	<ul>
		        		<li style={AboutMeStyles.li_text}>
		        			<p style={AboutMeStyles.skills_text}>Javascript</p>
		        		</li>
		        		<br></br>
		        		<li style={AboutMeStyles.li_text}>
		        			<p style={AboutMeStyles.skills_text}>Java</p>
		        		</li>
		        		<br></br>
		        		<li style={AboutMeStyles.li_text}>
		        			<p style={AboutMeStyles.skills_text}>Linux</p>
		        		</li>
		        	</ul>
		        </div>
		        <div className="col-md-1">
		        	<div>
			        	<p style={AboutMeStyles.ul_header_text}>Githubs</p>
			        	<ul>
			        		<li style={AboutMeStyles.li_text}>
					            <a href="https://github.com/jjthom87" target="_blank">
					            	<p style={AboutMeStyles.github_text}>Personal</p>
					            </a>
			        		</li>
			        		<br></br>
			        		<li style={AboutMeStyles.li_text}>
					            <a href="https://github.com/nycda-wdi-jared" target="_blank">
					            	<p style={AboutMeStyles.github_text}>NYCDA</p>
					            </a>
			        		</li>
			        	</ul>
			        </div>
		        </div>
	        </div>
          	<AboutMe_Nav />
        </div>
    );
  }
}