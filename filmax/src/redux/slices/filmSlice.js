import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchFilms = createAsyncThunk('film/fetchFilmsStatus', async (params, thunkAPI) => {
  const { sortBy, order, search, currentPage } = params;
  const { data } = await axios.get(
    `https://657315f9192318b7db418659.mockapi.io/items?page=${currentPage}&limit=10&sortBy=${sortBy}&order=${order}${search}`,
  );
  return data;
});

const initialState = {
  items: [],
  status: 'loading', 
};

const filmSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchFilms.pending]: (state) => {
      state.status = 'loading';
      state.items = [];
    },
    [fetchFilms.fulfilled]: (state, action) => {
      console.log('dfdfdgfdfgfh');
      state.items = action.payload;
      state.status = 'success';
    },
    [fetchFilms.rejected]: (state, action) => {
      state.status = 'error';
      state.items = [];
    },
  },
});

export const selectFilmData = (state) => state.films;

export const { setItems } = filmSlice.actions;

export default filmSlice.reducer;
