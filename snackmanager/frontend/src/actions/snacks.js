// any actions we want to fire off go in here 
// all of the HTTP requests go into here 
// using axios for requests (async requests)

import axios from 'axios';

import { GET_SNACKS, DELETE_SNACK, ADD_SNACK } from './types';

// GET SNACKS
export const getSnacks = () => dispatch => {
    axios.get("/api/snacks/")
        .then(res => {
            dispatch({
                type: GET_SNACKS,
                payload: res.data 
            });
        }).catch(err => console.log(err));
};

// Deletes snacks 
export const deleteSnack = (id) => dispatch => {
    axios.delete(`/api/snacks/${id}/`)
    .then(res => {
        dispatch({
            type: DELETE_SNACK,
            payload: id 
        });
    }).catch(err => console.log(err));
}

// Adds snacks 
export const addSnack = (snack) => dispatch => {
    axios.post("/api/snacks/", snack)
        .then(res => {
            dispatch({
                type: ADD_SNACK,
                payload: res.data 
            });
        }).catch(err => console.log(err));
};