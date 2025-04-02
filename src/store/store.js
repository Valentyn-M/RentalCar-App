import { configureStore } from '@reduxjs/toolkit';
import { carBrandsReducer } from './carBrands/slice';

export const store = configureStore({
  reducer: {
    carBrands: carBrandsReducer,
  },
});
