import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducers.js';

const configureStore = (preloadedState = {}) => {
    return createStore(rootReducer, preloadedState);
}

export default configureStore;