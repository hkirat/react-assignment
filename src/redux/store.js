// store.js

import { combineReducers, createStore } from 'redux';
import { idReducer } from './reducers';

const rootReducer = combineReducers({
  id: idReducer
});

const store = createStore(rootReducer);

export default store;
