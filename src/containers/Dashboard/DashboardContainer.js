import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dashboard from '../../views/Pages/Dashboard/Dashboard';

const DashboardContainer = props => {

	return <Dashboard {...props} />
};

const mapStateToProps = state => {
	const { environment } = state;
	return {
		environment
	}
}

const mapDispatchToProps = dispatch => ({
})



export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
