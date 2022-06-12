import { configureStore } from '@reduxjs/toolkit';
import historySlice from './historySlice';
//ekleme

export const store = configureStore({
  reducer: {
    history: historySlice,
  },
});
