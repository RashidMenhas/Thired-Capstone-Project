import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchURLData, searchByName } from '../../API/api';

export const GET_COUNTRIES = createAction('GET_COUNTRIES');
export const searchAction = createAction('searchAction');

export const countryReducer = (state = [], action) => {
  if (action.type === GET_COUNTRIES.type) {
    return action.payload;
  }
  if (action.type === searchAction.type) {
    return action.payload;
  }

  return state;
};

export const getCountries = createAsyncThunk(
  'countrystate/getCountries',
  async (_, thunkApi) => {
    const country = await (await fetchURLData()).country;
    thunkApi.dispatch(GET_COUNTRIES(country));
  },
);

export const countryDetail = createAsyncThunk(
  'showdetail/countryDetail',
  async (name, thunkApi) => {
    const Detail = await (await searchByName(name)).countrydetail;
    thunkApi.dispatch(searchAction(Detail));
  },
);
