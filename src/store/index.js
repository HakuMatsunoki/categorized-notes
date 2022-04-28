import { configureStore } from '@reduxjs/toolkit';

import noteSlice from './noteSlice';
import uiSlice from './uiSlice';

const store = configureStore({
  reducer: {
    note: noteSlice.reducer,
    ui: uiSlice.reducer
  }
});

export default store;
