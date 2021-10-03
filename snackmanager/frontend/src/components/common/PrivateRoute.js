// Proxy for a regular route (just checks if user is logged in)
// adds a layer of protection

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, auth, ...rest}) => (
    <Route 
        {...rest}
        render={props => {
            if(auth.isLoading) { // If we're in between firing the request and action, display a loading state 
                return <h2>Loading...</h2>;
            } else if(!auth.isAuthenticated) { // If we aren't authenticated redirect to the login page 
                return <Redirect to='/login' />;
            } else {
                return <Component {...props} />;
            }
        }}
    />
)

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps)(PrivateRoute); 