// ROOT REDUCER 
// contains all other reducers (see combineReducers)

import { combineReducers } from "redux";
import snacks from './snacks';
import eats from './eats';
import errors from './errors';
import messages from './messages';
import auth from './auth';

export default combineReducers({
    snacks,
    eats,
    errors,
    messages,
    auth
});