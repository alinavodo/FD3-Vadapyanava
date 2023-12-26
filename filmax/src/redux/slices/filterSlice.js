import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchValue: '',
  currentPage: 1,
  sort: {
    name: 'популярности',
    sortProperty: 'imDbRating',
  },
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setFilters(state, action) {
      if (Object.keys(action.payload).length) {
        state.currentPage = Number(action.payload.currentPage);
        state.sort = action.payload.sort;
      } else {
        state.currentPage = 1;
        state.sort = {
          name: 'популярности',
          sortProperty: 'imDbRating',
        };
      }
    },
  },
});

export const selectFilter = (state) => state.filter;
export const selectSort = (state) => state.filter.sort;

export const { setSort, setCurrentPage, setFilters, setSearchValue } =
  filterSlice.actions;

export default filterSlice.reducer;
