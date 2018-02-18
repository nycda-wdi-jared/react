import React, { Component } from 'react';
import Select from 'react-select';

export default class Guestbook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: null,
            selectedOption: ''
        };
    }
    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Selected: ${selectedOption.label}`);
    }
	componentWillMount(){
		fetch('/api/messages', {
			headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            }
		}).then((response) => response.json())
        .then((results) => {
            //console.log(results)
            this.setState({
                messages: results
            })
        });
	}
  	render() {
        const {messages, selectedOption} = this.state;
        const value = selectedOption && selectedOption.value;

        let autoArr = []
        if(messages){
            let mapSetNames = [...new Set(messages.map((message) => message.name))];
            mapSetNames.forEach((name) => {
                autoArr.push({value: name, label: name.charAt(0).toUpperCase() + name.substring(1, name.length)})
            })
        }

        const appendAutocomplete = () => {
            if(messages){
                return (
                    <Select
                        name="form-field-name"
                        value={value}
                        onChange={this.handleChange}
                        options={autoArr}
                    />
                )
            }
        }
	    return (
	    	<div className="container">
                <h3>Messages</h3>
                {appendAutocomplete()}
			</div>
	    );
  	}
};
