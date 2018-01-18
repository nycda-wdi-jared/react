import React, { Component, PropTypes } from 'react'; 
import { connect } from 'react-redux';

import * as actions from './../../actions/indexes/User_Home_Index';
import CreateRecordForm from './../app_forms/CreateRecordForm';

class ShowHideForm extends Component {
    render() {
		const formShow = () => {
			if(this.props.showForm){
				return (
					<div>
						<div className="grid-x">
						  	<div className="small-9 cell"></div>
  							<div className="small-3 cell">
								<button type="button" className="button alert" onClick={() => {this.props.formViewing()}}>Hide Form</button>
							</div>
						</div>
						<CreateRecordForm/>
					</div>
				)
			} else {
				return (
					<div>
						<div className="grid-x">
						  	<div className="small-9 cell"></div>
  							<div className="small-3 cell">
								<button type="button" className="button success" onClick={() => {this.props.formViewing()}}>Show Form</button>
							</div>
						</div>
					</div>
				)
			}
		}
    	return (
      		<div>
	      		{formShow()}
      		</div>
		);
	}
}

const mapStateToProps = (state) => {
    return {
        showForm: state.user.showForm
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        formViewing: () => dispatch(actions.setShowHideForm())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowHideForm);