// src/redux/store.js
// 3er page is to be created is of store
import { createStore } from 'redux';
import counterReducer from './reducer';

const store = createStore(counterReducer);

export default store;
