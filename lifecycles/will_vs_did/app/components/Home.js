import React, { Component } from 'react';
import {Link} from 'react-router';

//import Footer from './Footer';
import Header from './Header';

export default class Home extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  }
  /*
  
    Run this app and see what happens when you have componentWillMount up and componentDidMount
    commented out. As you can tell, the render is called first, and the jquery item does not mount.
    For something like jQuery, it needs to be mounted before the render is called.

  */
  // componentDidMount(){
  //   $(document).ready(function(){
  //     $('.carousel.carousel-slider').carousel({fullWidth: true});
  //   })
  // }
  componentWillMount(){
    $(document).ready(function(){
      $('.carousel.carousel-slider').carousel({fullWidth: true});
    })
  }
  /*
    render() is a built in react lifecycle component

    basically, that is where all the html knows, and how react is able to identify
    what is to be displayed on the ui once this component's url is hit
    
  */
  render() {
    return (
        <div>
          <Header/>
          <div className="container">
            <div className="row">
              <div className="col s12 m9 l10">
                <div className="carousel carousel-slider">
                  <div className="carousel-item"> <img src="./images/TIL_green-floral.jpg"/></div> 
                  <div className="carousel-item"> <img src="./images/TIL_mosaic-1.jpg"/></div> 
                </div>
              </div>
            </div>
          </div>

        </div>
    )     
  }
};
