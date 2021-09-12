// any actions we want to fire off go in here 
// all of the HTTP requests go into here 
// using axios for requests (async requests)

import axios from 'axios';

import { GET_SNACKS } from './types';

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