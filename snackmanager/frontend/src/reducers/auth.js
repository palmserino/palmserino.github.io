const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null, // once we log in null goes to True and the token is stored 
    isLoading: false, 
    user: null 
}

export default function(state = initialState, action) {
    switch(action.type) {
        default:
            return state; 
    }
}