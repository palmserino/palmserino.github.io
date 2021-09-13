/* meeting place for all other reducers */
import { combineReducers } from "redux";
import snacks from './snacks';
import errors from './errors';

export default combineReducers({
    snacks,
    errors
});