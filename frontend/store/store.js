import { applyMiddleware, createStore } from 'redux';
import rootReducer from './../reducers/root_reducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';



const configureStore = (preloadedState = {}) => {
  return createStore(rootReducer, preloadedState, applyMiddleware(logger));
}


export default configureStore;