import { GET_EATS } from '../actions/types.js'; 

// initial state of the snacks GET resulting object 
const initialState = {
    eats: []
};

// Dispatch an action to the reducer 
export default function(state = initialState, action) {
    // switch for the action type 
    switch (action.type) {
        case GET_EATS:
            return {
                ...state,
                eats: action.payload
            }; 
        default:
            return {
                ...state
            }
    }
}