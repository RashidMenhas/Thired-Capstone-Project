import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { searchByName } from '../../API/api';

export const SHOWCOUNTRYDETAILS = createAction('SHOWCOUNTRYDETAILS');

export const showReducer = (state = [], action) => {
  if (action.type === SHOWCOUNTRYDETAILS.type) {
    return action.payload;
  }

  return state;
};

export const countryDetail = createAsyncThunk(
  'showdetail/countryDetail',
  async (key, thunkApi) => {
    const Detail = await (await searchByName(key)).countrydetail;
    thunkApi.dispatch(SHOWCOUNTRYDETAILS(Detail));
  },
);
