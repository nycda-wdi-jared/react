import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class Google_Maps extends Component {
  componentDidMount(){
    new google.maps.Map(this.refs.map, {
      center: {lat: this.props.lat, lng: this.props.lng},
      zoom: 15
    });
  }
  render() {
    return (
      <div>
        <div id="gm" ref="map"></div>
      </div>
    );
  }
};