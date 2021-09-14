import { createStore, applyMiddleware} from 'redux'; 
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'; 
import rootReducer from './reducers'; 

const initialState = {};

const middleware = [thunk]; 


// need this to use redux dev tools 
const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)),
);

export default store; 