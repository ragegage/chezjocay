import { createStore } from 'redux';
import RootReducer from '../reducers';
import RootMiddleware from '../middleware';

const configureStore = (preloadedState = {}) => (
  createStore(
    RootReducer,
    preloadedState,
    RootMiddleware
  )
);

export default configureStore;