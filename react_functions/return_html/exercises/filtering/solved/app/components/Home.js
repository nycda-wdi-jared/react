// This is the non-babel way to import
// var React = require("react");

// This is the babel way
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

//look at where this is being imported from
import obj from '../../public/js/obj.js';

export default class Home extends Component {
  constructor(props) {
      super(props);
      this.state = {
        selected: undefined
      };
  }
  onSelectChange(e){
    this.setState({
      selected: e.target.value
    })
  }
  componentDidMount() {
    //this here is importing the materialize js for the select to work
    //https://stackoverflow.com/questions/35499842/how-to-use-materialize-css-with-react
    var element = ReactDOM.findDOMNode(this.refs.dropdown)


    $(element).ready(function() {
      $('select').material_select();
    });

    //this here is letting us use the pretty materialize select
    //https://github.com/Dogfalo/materialize/issues/1160
    $(ReactDOM.findDOMNode(this.refs.nameSelect)).on('change', this.onSelectChange.bind(this));
  }
  render() {
    //console.log(obj)
    //return html methods always goes within the render
    const appendNameOptions = () => {
      return obj.map((o, index) => {
        return (
          <option value={o.name} key={index}>{o.name}</option>
        )
      })
    }
    const appendSelectedInfo = () => {
      if(this.state.selected){
        const nameSelected = obj.filter((o) => o.name === this.state.selected);
        return nameSelected.map((person) => {
          let handsome = person.handsome ? "Yes" : "No";
          return (
            <div>
              <p>Name: {person.name}</p>
              <p>Age: {person.age}</p>
              <p>Handsome: {handsome}</p>
            </div>
          )
        })
      } else {
        return (
          <div><p>Select Someone</p></div>
        )
      }
    }



    return (
      <div>
        <h3>Select Name Here</h3>
        <div style={{width: '25%'}}>
          <select ref="nameSelect">
            <option defaultValue="" disabled selected>Choose Name</option>
            {appendNameOptions()}
          </select>
        </div>
        {appendSelectedInfo()}
      </div>
    );
  }
};
