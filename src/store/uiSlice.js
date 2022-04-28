import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    error: {
      message: '',
      show: false
    }
  },
  reducers: {
    setError(state, action) {
      state.error = action.payload;
    },
    hideError(state) {
      state.error.show = false;
    }
  }
});

export const uiActions = uiSlice.actions;

export default uiSlice;
