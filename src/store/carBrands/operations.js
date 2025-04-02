import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const carRentalApi = axios.create({
  baseURL: 'https://car-rental-api.goit.global',
});

export const fetchCarBrands = createAsyncThunk('fetchCarBrands', async (_, thunkAPI) => {
  try {
    const response = await carRentalApi.get('/brands');
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});
