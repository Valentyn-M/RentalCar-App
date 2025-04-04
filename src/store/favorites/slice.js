import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: JSON.parse(localStorage.getItem('favorites')) || [],
};

const slice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addOrRemoveFavorite: (state, action) => {
      const id = action.payload;
      if (state.items.includes(id)) {
        state.items = state.items.filter((item) => item !== id);
      } else {
        state.items.push(id);
      }
      localStorage.setItem('favorites', JSON.stringify(state.items));
    },
  },
});

export const { addOrRemoveFavorite } = slice.actions;

export const favoritesReducer = slice.reducer;
