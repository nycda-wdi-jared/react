import React, { Component } from 'react';

//import Footer from './Footer';
import Header from './Header';

export default class Tiles extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  }
  componentDidMount(){
    $(document).ready(function(){
      $('.carousel.carousel-slider').carousel({fullWidth: true});
    })
  }
  // componentWillMount(){
  //   $(document).ready(function(){
  //     $('.carousel.carousel-slider').carousel({fullWidth: true});
  //   })
  // }
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
