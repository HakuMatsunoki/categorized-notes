import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    error: {
      message: '',
      show: false
    },
    info: {
      message: '',
      title: '',
      show: false
    }
  },
  reducers: {
    setError(state, action) {
      state.error.message = action.payload.message;
      state.error.show = true;
    },
    hideError(state) {
      state.error.show = false;
    },
    setInfo(state, action) {
      state.info.message = action.payload.message;
      state.info.title = action.payload.title;
      state.info.show = true;
    },
    hideInfo(state) {
      state.info.show = false;
    }
  }
});

export const uiActions = uiSlice.actions;

export default uiSlice;
