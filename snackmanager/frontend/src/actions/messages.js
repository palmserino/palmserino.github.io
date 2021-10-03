import { CREATE_MESSAGE, GET_ERRORS } from "./types";

// creates a message with the given msg parameter and type of CREATE_MESSAGE 
export const createMessage = msg => {
    return {
        type: CREATE_MESSAGE,
        payload: msg 
    };
};

// returns errors
export const returnErrors = (msg, status) => {
    return {
        type: GET_ERRORS,
        payload: { msg, status }
    }
}