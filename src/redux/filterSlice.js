import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',

  reducers: {
    filterData(state, action) {
      return action.payload;
    },
  },
});

export const { filterData } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
