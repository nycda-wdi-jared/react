import React, {Component} from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/indexes/User_Home_Index';

class CreateRecordForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resumeSubmitted: '',
            replied: ''
        };
    }
    handleResumeRadio(e){
        this.setState({
            resumeSubmitted: e.target.value
        })
    }
    handleRepliedRadio(e){
        this.setState({
            replied: e.target.value
        })
    }
	onCreateRecord(e){

		e.preventDefault();

		const creds = {};
		const { resumeSubmitted, replied } = this.state;
		var companyName = this.refs.companyName.value;
		var position = this.refs.position.value;
		var dateApplied = this.refs.dateApplied.value;
		var nextEvent = this.refs.nextEvent.value;
		var notes = this.refs.notes.value;

		if (companyName.length > 0) {
            this.refs.companyName.value = '';
            creds.companyName = companyName;
        } else {
            alert('Be Sure Enter Company Name');
        }

		if (position.length > 0) {
            this.refs.position.value = '';
            creds.position = position;
        } else {
            alert('Be Sure Enter Position Applied For');
        }

		if (dateApplied.length > 0) {
            this.refs.dateApplied.value = '';
            creds.dateApplied = dateApplied;
        } else {
            alert('Be Sure Enter the date you applied for job');
        }

		if (nextEvent.length > 0) {
            this.refs.nextEvent.value = '';
            creds.nextEvent = nextEvent;
        }

		if (notes.length > 0) {
            this.refs.notes.value = '';
            creds.notes = notes;
        }  

        if(replied){
            creds.replied = replied;
            this.setState({
                replied: ''
            })
        }

        if(resumeSubmitted){
            creds.resumeSubmitted = resumeSubmitted;
            this.setState({
                resumeSubmitted: ''
            })
        }

		var {dispatch} = this.props;

		dispatch(actions.createNewRecord(creds));
	}
	render() {
		return (
			<div className="grid-x">
				<div className="small-4 cell">
				</div>
				<div className="small-4 cell">
					<form onSubmit={this.onCreateRecord.bind(this)}>
							<label>
								Company Name
								<input type="text" ref="companyName"/>
							</label>
							<label>
								Position Applied For
								<input type="text" ref="position"/>
							</label>
							<label>
								Date Applied
								<input type="text" ref="dateApplied"/>
							</label>
		                    <div>
		                        <span>
			                        <p>Did employer reply?</p>
			                            <p>Yes
			                            <input 
			                                className="yesReplied" 
			                                type="radio" 
			                                value="Yes" 
			                                name="repliedChoice"
			                                checked={this.state.replied === "Yes"} 
			                                onChange={this.handleRepliedRadio.bind(this)}
			                            />
			                            No
			                            <input 
			                                className="noReplied" 
			                                type="radio" 
			                                value="No" 
			                                name ="repliedChoice"
			                                checked={this.state.replied === "No"} 
			                                onChange={this.handleRepliedRadio.bind(this)}
			                            />
			                            </p>
		                        </span>
		                    </div>
		                    <label>
								Next Event
								<input type="text" ref="nextEvent"/>
							</label>
		                    <label>
								Notes
								<textarea type="text" ref="notes"/>
							</label>
		                    <div>
		                        <span>
			                        <p>Did you submit your resume?</p>
			                            <p>Yes
			                            <input 
			                                className="yesResume" 
			                                type="radio" 
			                                value="Yes" 
			                                name="resumeChoice"
			                                checked={this.state.resumeSubmitted === "Yes"} 
			                                onChange={this.handleResumeRadio.bind(this)}
			                            />
			                            No
			                            <input 
			                                className="noResume" 
			                                type="radio" 
			                                value="No" 
			                                name ="resumeChoice"
			                                checked={this.state.resumeSubmitted === "No"} 
			                                onChange={this.handleResumeRadio.bind(this)}
			                            />
			                            </p>
		                        </span>
		                    </div>
							<div className="text-center">
								<input className="button success expanded" type="submit" value="Submit"/>
							</div>
					</form>
				</div>
				<div className="small-4 cell">
				</div>
			</div>
		);
	}
};

export default connect()(CreateRecordForm);