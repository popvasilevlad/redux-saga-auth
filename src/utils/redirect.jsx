import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const RedirectHelper = props => props.page ? <Redirect to={props.page} /> : null;

const mapStateToProps = state => {
	return {
		page: state.page
	}
};

export default connect(mapStateToProps)(RedirectHelper);