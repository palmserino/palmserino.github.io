import { GET_SNACKS } from '../actions/types.js'; 

// initial state of the snacks GET resulting object 
const initialState = {
    snacks: []
};

// Dispatch an action to the reducer 
export default function(state = initialState, action) {
    // switch for the action type 
    switch (action.type) {
        case GET_SNACKS:
            return {
                ...state,
                snacks: action.payload
            }; 
        default:
            return {
                ...state
            }
    }
}