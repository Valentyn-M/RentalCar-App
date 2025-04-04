import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from './operations';

const initialState = {
  items: [],
  loading: false,
  error: null,
  currentPage: 1,
  totalPages: 0,
};

const slice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    resetItems: (state) => {
      state.items = [];
    },
    setCurrentPage: (state) => {
      state.currentPage += 1;
    },
    resetCurrentPage: (state) => {
      state.currentPage = 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCars.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCars.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      // Prevent duplication by filtering the array (this happens because of StrictMode: in development mode, strict mode React intentionally runs useEffect twice)
      const newCars = action.payload.cars.filter((car) => !state.items.some((existing) => existing.id === car.id));
      state.items.push(...newCars);
      state.totalPages = action.payload.totalPages;
    });
    builder.addCase(fetchCars.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export const { resetItems, setCurrentPage, resetCurrentPage } = slice.actions;

export const carsReducer = slice.reducer;
