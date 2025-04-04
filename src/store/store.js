import { configureStore } from '@reduxjs/toolkit';
import { carBrandsReducer } from './carBrands/slice';
import { carsReducer } from './cars/slice';
import { filtersReducer } from './filters/slice';
import { favoritesReducer } from './favorites/slice';

export const store = configureStore({
  reducer: {
    carBrands: carBrandsReducer,
    cars: carsReducer,
    filters: filtersReducer,
    favorites: favoritesReducer,
  },
});
