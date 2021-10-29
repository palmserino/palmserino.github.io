// any actions we want to fire off go in here 
// all of the HTTP requests go into here 
// using axios for requests (async requests)

import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from "./auth";

import { GET_SNACKS, DELETE_SNACK, ADD_SNACK, GET_EATS } from './types';

// GET SNACKS
export const getSnacks = () => (dispatch, getState) => {
    axios.get("/api/snacks/", tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_SNACKS,
                payload: res.data 
            });
        }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

// Deletes snacks 
export const deleteSnack = (id) => (dispatch, getState) => {
    axios.delete(`/api/snacks/${id}/`, tokenConfig(getState))
    .then(res => {
        dispatch(createMessage({ deleteSnack: 'Snack deleted!'}));
        dispatch({
            type: DELETE_SNACK,
            payload: id 
        });
    }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

// Adds snacks 
export const addSnack = (snack) => (dispatch, getState) => {
    axios.post("/api/snacks/", snack, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ addSnack: 'Snack added!'}));
            dispatch({
                type: ADD_SNACK,
                payload: res.data 
            });
        }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

/* // Gets eats (temporary)
export const getEats = () => (dispatch, getState) => {
    axios.get("/api/eats/", tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_EATS,
                payload: res.data 
            });
        }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}; */