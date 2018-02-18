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
        /* Set the state of selected here */
      };
  }
  onSelectChange(e){
    //console.log(e.target.value)
    //set the state of selected with the value of what is selected in the dropdown
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
      /*
        map the names obj to an option element, i.e <option value={whatever}>whatever</option>
      */
    }
    const appendSelectedInfo = () => {
      /*
        - If this.state.selected is not undefined
          - create a variable of a filtered array by the persons name who was selected in the dropdown
            - the persons name should be stored in the selected state (this.state.selected)
            - it should be compared against all of the names in the object array
          - map that filtered array to 3 p tags and create a variable for handsome
            - the variable for handsome will store "Yes" if handsome is true, and "No" if handsome is false
              use a ternary operator here, we have used this in previous exercises/lessons
            - The 3 p tags will hold the persons name, age, and if or if not handsome (use the handsome variable)
        - If this.state.selected is undefined
          - Then just return <div><p>Select Someone</p></div>
      */
    }
    
    return (
      <div>
        <h3>Select Name Here</h3>
        <div style={{width: '25%'}}>
          <select ref="nameSelect">
            <option defaultValue="" disabled selected>Choose Name</option>
            {/* Call the appropriate function here */}
          </select>
        </div>
        {/* Call the appropriate function here */}
      </div>
    );
  }
};
