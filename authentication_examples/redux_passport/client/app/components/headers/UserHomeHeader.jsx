import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from './../../actions/indexes/User_Home_Index';

class UserHomeHeader extends Component {
    componentWillMount(){
        this.props.userHomeData()
    }
	render() {
		const { user } = this.props;
		if(user != undefined){
			return (
				<div id="userHomeHeader">
					<h5 id="userHomeHeaderText" className="text-center">{user.name}</h5>
					<img id="userHomeHeaderImage" src='./images/trollsm.png' className="troll-picture"/>
				</div>
			);
		} else {
			return (
				<div></div>
			)
		}
	}
}

const mapStateToProps = (state) => {
    return {
        user: state.user.user,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        userHomeData: () => dispatch(actions.userHome())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserHomeHeader);