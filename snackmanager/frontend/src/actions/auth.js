import axios from 'axios';
import { returnErrors } from './messages';

import { USER_LOADED, USER_LOADING, AUTH_ERROR } from './types';

// Checks the token and loads the user if the token is G2G
export const loadUser = () => (dispatch, getState) => {
    dispatch({ type: USER_LOADING });
    
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

    axios.get('/api/auth/user', config)
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