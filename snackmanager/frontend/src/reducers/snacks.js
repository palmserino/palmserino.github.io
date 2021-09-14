import { GET_SNACKS, DELETE_SNACK, ADD_SNACK } from '../actions/types.js'; 

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
        
        // deletes leads by filtering them against the id of the one to be deleted 
        case DELETE_SNACK:
            return {
                ...state,
                snacks: state.snacks.filter(lead => lead.id !== action.payload)
            }

        case ADD_SNACK:
            return {
                ...state,
                snacks: [...state.snacks, action.payload]
            }
        default:
            return {
                ...state
            }
    }
}