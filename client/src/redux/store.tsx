import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import {thunk} from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import inventoryReducer from './inventoryStates/slice';
import themeReducer from './themeStates/slice';
import preLoginReducer from './preLoginStates/slice';

// Combine reducers
const rootReducer = combineReducers({
  inventory: inventoryReducer,
  theme: themeReducer,
  preLogin: preLoginReducer,
});

// Enable Redux DevTools extension
// const composeEnhancers = composeWithDevTools || compose;

const middleware = [thunk];


// Create store with rootReducer, initial state, middleware, and enhancers
const store: any = createStore(
  rootReducer,
  compose(applyMiddleware(...middleware)) // Use composeWithDevTools
);

export default store;
