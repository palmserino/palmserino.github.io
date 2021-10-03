import axios from 'axios';
import { returnErrors } from './messages';

import { 
    USER_LOADED, 
    USER_LOADING, 
    AUTH_ERROR, 
    LOGIN_SUCCESS, 
    LOGIN_FAIL, 
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from './types';

// Checks the token and loads the user if the token is G2G
export const loadUser = () => (dispatch, getState) => {
    dispatch({ type: USER_LOADING });

    axios.get('/api/auth/user', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: USER_LOADED,
                payload: res.data 
            })
        }).catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status))
            dispatch({
                type: AUTH_ERROR
            })
        });
}

// logs the user in 
export const login = (username, password) => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    // Request body (turns into JSON)
    const body = JSON.stringify({
        username,
        password
    });

    axios.post('/api/auth/login', body, config)
        .then(res => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data 
            })
        }).catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status))
            dispatch({
                type: LOGIN_FAIL
            })
        });
}

// logs the user out 
export const logout = () => (dispatch, getState) => {
    axios.post('/api/auth/logout', null, tokenConfig(getState)) // need to pass in null as a body
        .then(res => {
            dispatch({
                type: LOGOUT_SUCCESS,
            })
        }).catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status))
        });
};

// registers a user
export const register = ({ username, password, email }) => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    // Request body (turns into JSON)
    const body = JSON.stringify({
        username,
        password,
        email
    });

    axios.post('/api/auth/register', body, config)
        .then(res => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data 
            })
        }).catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status))
            dispatch({
                type: REGISTER_FAIL
            })
        });
}

// helper function that sets up config w/ token
export const tokenConfig = getState => {
    const token = getState().auth.token // grab token from state 

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    // Adds authorization w/ token to header of request 
    if(token) {
        config.headers['Authorization'] = `Token ${token}`;
    }
    
    return config; 
}