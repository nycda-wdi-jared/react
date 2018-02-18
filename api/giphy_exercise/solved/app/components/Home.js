// This is the non-babel way to import
// var React = require("react");

// This is the babel way
import React, {Component} from 'react';

import giphy_api from './../api/giphy_api';

export default class Home extends Component {
  constructor(props) {
      super(props);
      this.state = {
        results: undefined
      };
  }
  searchGiphy(e){
    e.preventDefault();

    giphy_api(this.refs.giphySearch.value).then((res) => {
      this.setState({
        results: res.data
      })
    })

  }
  render() {
    const displayGiphys = () => {
      if(this.state.results){
        return (
          <div>
            <h5>Giphy Results</h5>
            {
              this.state.results.map((res, index) => {
                return (
                  <div>
                    <img src={res.images.fixed_height.url}/>
                  </div>
                )
              })
            }
          </div>
        )
      }
    }
    return (
      <div style={{width: '15%'}}>
        <form onSubmit={this.searchGiphy.bind(this)}>
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
