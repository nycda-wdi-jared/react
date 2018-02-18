import React,{Component} from 'react';
import {Link} from 'react-router-dom';

import {ProjectStyles} from './../../styles/Projects';
import ProjectNav from './../navs/Project_Nav';

export default class ProjectsPage extends React.Component {
  render() {
    return (
      <div>
        <div style={ProjectStyles.image_div} className="text-center center-block">
          <img style={ProjectStyles.projects_image} src="./images/view.png"/>
        </div>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-3 text-center">
            <Link to="https://github.com/jjthom87/script_reader" target="_blank">
              <img src="./images/real-time.jpg" height="120" width="auto"/>
            </Link>
            <p className="project_desc">Real Time Application that records the amount of times you use a terminal command.</p>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-2 text-center">
            <a href="https://github.com/jjthom87/QuestGroupProject" target="_blank">
              <img src="./images/task_tracker.png" height="180" width="auto" />
            </a>
            <p className="project_desc">Task Tracker</p>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-2 text-center">
            <a href="https://github.com/jjthom87/ReactJava" target="_blank">
              <img src="./images/react_java.png" height="180" width="auto" />
            </a>
            <p className="project_desc">Authentication boilerplate using React.js with Java backend</p>
          </div>
          <div className="col-md-2"></div>
        </div>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-3 text-center">
            <Link to="https://github.com/jjthom87/my_instagram" target="_blank">
              <img src="./images/my_inst.png" height="180" width="auto"/>
            </Link>
            <p className="project_desc">Multer Instagram Type App</p>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-2 text-center">
            <a href="https://github.com/jjthom87/cc_game" target="_blank">
              <img src="./images/rn_cc_game.png" height="180" width="auto" />
            </a>
            <p className="project_desc">React Native Kids Game</p>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-2 text-center">
            <a href="https://github.com/jjthom87/hopscotch" target="_blank">
              <img src="./images/scraper.jpeg" height="180" width="auto" />
            </a>
            <p className="project_desc">nyc.gov Scraper</p>
          </div>
          <div className="col-md-2"></div>
        </div>
        <ProjectNav />
      </div>
    );
  }
};