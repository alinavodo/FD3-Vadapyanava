import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalPrice: 0,
  items: JSON.parse(localStorage.getItem('film')) || [],
};

const listSlice = createSlice({
  name: 'film',
  initialState,
  reducers: {
    addItem(state, action) {
      const findFilm = state.items.find((obj) => obj.id === action.payload.id);

      if (findFilm) {
        findFilm.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    removeItem(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const selectFilm = (state) => state.film;
export const selectFilmItemById = (id) => (state) => state.film.items.find((obj) => obj.id === id);

export const { addItem, removeItem, minusItem, clearItems } = listSlice.actions;

export default listSlice.reducer;
