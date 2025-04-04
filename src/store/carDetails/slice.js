import { createSlice } from '@reduxjs/toolkit';
import { fetchCarDetails } from './operations';

const initialState = {
  item: null,
  loading: false,
  error: null,
};

const slice = createSlice({
  name: 'carDetails',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCarDetails.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCarDetails.fulfilled, (state, action) => {
      state.item = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(fetchCarDetails.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export const carDetailsReducer = slice.reducer;
