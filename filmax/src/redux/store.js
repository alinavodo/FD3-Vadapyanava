import { configureStore } from '@reduxjs/toolkit';


import films from './slices/filmSlice';
import film from './slices/listSlice';
import filter from './slices/filterSlice';


export const store = configureStore({
  reducer: {
    filter,
    film,
    films,
  },
});
