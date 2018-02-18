import React, { Component } from 'react';
import Autocomplete from 'react-autocomplete';

export default class GoogleSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            selectedOption: undefined,
            value: ''
        };
    }
    selectChange(e){
        this.setState({
            selectedOption: e,
            value: e
        })
    }
    onMouseOver(high){
        this.setState({
            selectedOption: high.label
        })
    }
	componentWillMount(){
		fetch('/api/articles', {
			headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            }
		}).then((response) => response.json())
        .then((results) => {
            this.setState({
                articles: results
            })
        });
	}
  	render() {
        const {articles, selectedOption, value} = this.state;
        let autoArr = [];
        let filteredArr;
        if(articles.length > 0){
            if(selectedOption){
                filteredArr = articles.filter((article) => selectedOption === article.tag);
            }

            let mapSetTags = [...new Set(articles.map((article) => article.tag))];
            mapSetTags.forEach((tag) => {
                autoArr.push({label: tag})
            })
        }
	    return (
	    	<div className="container">
                <h3>Articles</h3>
                <Autocomplete
                    getItemValue={(item) => item.label}
                    items={autoArr}
                    renderItem={(item, isHighlighted) => 
                        this.state.value ? 
                            <div 
                                style={{ background: isHighlighted ? 'lightgray' : 'white' }}
                                onMouseOver={() => this.onMouseOver(item)}
                                onKeyPress={() => this.changeThis(item)}
                            >
                                {item.label}
                            </div> : <div></div>
                    }
                    shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
                    value={this.state.value}
                    onChange={
                        (e) => {
                            this.setState({ value: e.target.value })
                        }
                    }
                    onSelect={this.selectChange.bind(this)}
                />
                <br></br>
                <br></br>
                <div>
                    {
                        filteredArr && filteredArr.length > 0 ?
                            filteredArr.map((arr, index) => {
                                return (
                                    <div>
                                        <a href={arr.link} key={index}>{arr.title}</a>
                                    </div>
                                )
                            }) : <p>No Results</p>
                    }
                </div> 
			</div>
	    );
  	}
};
