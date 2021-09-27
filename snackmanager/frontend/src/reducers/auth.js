import { USER_LOADED, USER_LOADING, AUTH_ERROR } from '../actions/types';


const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null, // once we log in null goes to True and the token is stored 
    isLoading: false, 
    user: null 
}

export default function(state = initialState, action) {
    switch(action.type) {
        case USER_LOADING:
            return {
                ...state,
                isLoading: true 
            }
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload 
            }
        // When we have an error, clear the token and set back to initial state 
        case AUTH_ERROR:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                user: null,
                isLoading: false,
                isAuthenticated: false    
            }
        default:
            return state; 
    }
}