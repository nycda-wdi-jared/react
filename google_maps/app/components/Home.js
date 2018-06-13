import React, {Component} from 'react';
import Google_Map from './Google_Map';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Google_Map lat={26.569236} lng={-80.044763}/>
      </div>
    );
  }
};
