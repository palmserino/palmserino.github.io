import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from "./auth";

import { GET_EATS, ADD_EAT } from './types';

// Gets eats (temporary)
export const getEats = () => (dispatch, getState) => {
    axios.get("/api/eats/", tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_EATS,
                payload: res.data 
            });
        }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

// Adds snacks 
export const addEat = (eat) => (dispatch, getState) => {
    axios.post("/api/eats/", eat, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ addEat: 'Eat added!'}));
            dispatch({
                type: ADD_EAT,
                payload: res.data 
            });
        }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};