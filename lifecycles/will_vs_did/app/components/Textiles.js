import React, { Component } from 'react';

//import Footer from './Footer';
import Header from './Header';

export default class Textiles extends Component {
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
                  <div className="carousel-item"> <img src="./images/fiber-1.jpg"/></div> 
                  <div className="carousel-item"> <img src="./images/fiber-2.jpg"/></div> 
                  <div className="carousel-item"> <img src="./images/fiber-3.jpg"/></div> 
                  <div className="carousel-item"> <img src="./images/fiber-4.jpg"/></div> 
                  <div className="carousel-item"> <img src="./images/fiber-5.jpg"/></div> 
                  <div className="carousel-item"> <img src="./images/fiber-6.jpg"/></div> 
                  <div className="carousel-item"> <img src="./images/fiber-7.jpg"/></div> 
                </div>
              </div>
            </div>
          </div>
        </div>
    )     
  }
};
