import { createSlice } from '@reduxjs/toolkit';
import { fetchCarBrands } from './operations';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const slice = createSlice({
  name: 'carBrands',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCarBrands.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCarBrands.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.items = action.payload;
    });
    builder.addCase(fetchCarBrands.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export const carBrandsReducer = slice.reducer;
