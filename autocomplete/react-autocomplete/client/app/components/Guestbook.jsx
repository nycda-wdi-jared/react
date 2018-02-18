import React, { Component } from 'react';
import Autocomplete from 'react-autocomplete';

export default class Guestbook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            selectedOption: undefined,
            value: ''
        };
    }
    handleChange(e){
        console.log(e)
    }
    selectChange(e){
        this.setState({
            selectedOption: e,
            value: e
        })
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
        const {messages, selectedOption, value} = this.state;
        


        let autoArr = [];
        let filteredArr;
        if(messages.length > 0){
            if(selectedOption){
                filteredArr = messages.filter((message) => selectedOption.toLowerCase() === message.name.toLowerCase());
            }

            let mapSetNames = [...new Set(messages.map((message) => message.name))];
            mapSetNames.forEach((name) => {
                autoArr.push({label: name.charAt(0).toUpperCase() + name.substring(1, name.length)})
            })
        }
	    return (
	    	<div className="container">
                <h3>Messages</h3>
                <Autocomplete
                    getItemValue={(item) => item.label}
                    items={autoArr}
                    renderItem={(item, isHighlighted) => 
                        this.state.value ? 
                            <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                                {item.label}
                            </div> : <div></div>
                    }
                    shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
                    value={this.state.value}
                    onChange={e => this.setState({ value: e.target.value })}
                    onSelect={this.selectChange.bind(this)}
                />
                <br></br>
                <div>
                    {
                        filteredArr && filteredArr.length > 0 ?
                            filteredArr.map((arr, index) => {
                                return (
                                    <p key={index}><strong>{arr.name}</strong>: {arr.message}</p>
                                )
                            }) : <p>No Messages</p>
                    }
                </div> 
			</div>
	    );
  	}
};
