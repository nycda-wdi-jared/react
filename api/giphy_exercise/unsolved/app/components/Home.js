// This is the non-babel way to import
// var React = require("react");

// This is the babel way
import React, {Component} from 'react';

import giphy_api from './../api/giphy_api';

export default class Home extends Component {
  constructor(props) {
      super(props);
      this.state = {
        /* set the state of results to undefined */
      };
  }
  searchGiphy(e){
    e.preventDefault();

    //this here is calling the giphy_api function from the giphy_api.js file
    giphy_api(/* this parameter will be set to the value in the input */).then((res) => {
      /* Set the state of results to res.data here */
    })

  }
  render() {
    const displayGiphys = () => {
      /* 
        if the state of results is not undefined,
        then map the results state array.

        from each index in the results array, map the images.fixed_height.url to an image tag
      */
    }
    return (
      <div style={{width: '15%'}}>
        <form onSubmit={/* Which function will you bind this with? */}>
          <label>Giphys</label>
          <input type="text" ref="giphySearch"/>
          <input type="submit"/>
        </form>
        <br></br>
        {displayGiphys()}
      </div>
    );
  }
};
