// ROOT REDUCER 
// contains all other reducers (see combineReducers)

import { combineReducers } from "redux";
import snacks from './snacks';
import errors from './errors';
import messages from './messages';

export default combineReducers({
    snacks,
    errors,
    messages 
});