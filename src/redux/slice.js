import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filter: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { filter } = filterSlice.actions;
export const filterSliceReducer = filterSlice.reducer;
