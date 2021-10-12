import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth'
/* Creates a nav bar */

export class Header extends Component {

    static propTypes = {
        auth: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired
    }

    render() {
        // pull out isAuthenticated and the user to hide certain links
        const { isAuthenticated, user } = this.props.auth;
        
        const authLinks = (
            <ul className="navbar-nav ">
                <div className="d-inline-flex p-2">
                    <strong>
                        { user ? `Welcome ${user.username}` : ''}
                    </strong>
                </div>
                <li className="nav-item">
                    <button onClick={this.props.logout} className="nav-link btn btn-info btn-sm text-light">
                        Logout
                    </button>
                </li>
            </ul>
        );

        const guestLinks = (
            <ul className="navbar-nav">
                <li className="nav-item">
                <Link to="/register" className="nav-link">Register</Link>
                </li>
                <li className="nav-item">
                <Link to="/login" className="nav-link">Login</Link>
                </li>
            </ul>           
        );


        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a className="navbar-brand" href="/">Snack Manager</a>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link to="/eat" className="nav-link">Eat</Link>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/api/snacks">API</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/admin">Admin</a>
                        </li>
                    </ul>
                    { isAuthenticated ? authLinks : guestLinks}
                    </div>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { logout })(Header); 