import { CREATE_MESSAGE } from "./types";

// creates a message with the given msg parameter and type of CREATE_MESSAGE 
export const createMessage = msg => {
    return {
        type: CREATE_MESSAGE,
        payload: msg 
    }
}