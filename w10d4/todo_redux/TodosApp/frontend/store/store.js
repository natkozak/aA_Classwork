import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducers.js';
import { applyMiddleware } from 'redux';
import  myMiddleware  from './../middleware/thunk';

const configureStore = (preloadedState = {}) => {
    return createStore(rootReducer, preloadedState, applyMiddleware(myMiddleware));
}

export default configureStore;