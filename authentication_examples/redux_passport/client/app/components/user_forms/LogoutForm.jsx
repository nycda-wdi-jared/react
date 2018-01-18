import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/indexes/Authentication_Index.jsx';

class LogoutForm extends Component {
	onFormSubmit(e){
		e.preventDefault();
		const {dispatch} = this.props;

		dispatch(actions.logoutUser());
	}
	render() {
		return (
			<div className="row">
				<div className="col-md-1">
					<form onSubmit={this.onFormSubmit.bind(this)}>
						<button className="button alert">Logout</button>
					</form>
				</div>
			</div>
		);
	}
};


export default connect()(LogoutForm);