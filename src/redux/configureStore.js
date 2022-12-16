import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { countryReducer } from './countries/countrystate';
import { showReducer } from './countries/showdetail';

const rootreducer = combineReducers({
  countryReducer,
  showReducer,
});

const store = configureStore({ reducer: rootreducer });

export default store;
