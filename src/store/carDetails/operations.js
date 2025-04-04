import { createAsyncThunk } from '@reduxjs/toolkit';
import { carRentalApi } from '../carBrands/operations.js';

export const fetchCarDetails = createAsyncThunk('fetchCarDetails', async (carId, thunkAPI) => {
  try {
    const response = await carRentalApi.get(`/cars/${carId}`);
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});
