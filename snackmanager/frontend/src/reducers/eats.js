import { GET_EATS, DELETE_EAT, ADD_EAT } from '../actions/types.js'; 

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
        
        // deletes leads by filtering them against the id of the one to be deleted 
        case DELETE_EAT:
            return {
                ...state,
                eats: state.eats.filter(eat => eat.id !== action.payload)
            }

        case ADD_EAT:
            return {
                ...state,
                eats: [...state.eats, action.payload]
            }
        default:
            return {
                ...state
            }
    }
}

