import { createAsyncThunk } from '@reduxjs/toolkit';
import { carRentalApi } from '../carBrands/operations.js';

export const fetchCars = createAsyncThunk('fetchCars', async (params = {}, thunkAPI) => {
  try {
    const state = thunkAPI.getState();
    const currentPage = state.cars.currentPage;

    const { brand, price, mileageFrom, mileageTo } = params;

    const queryParams = {
      ...(brand && { brand }),
      ...(price && { rentalPrice: price }),
      ...(mileageFrom && { minMileage: mileageFrom }),
      ...(mileageTo && { maxMileage: mileageTo }),
      page: currentPage,
    };

    const response = await carRentalApi.get('/cars', { params: queryParams });
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});
