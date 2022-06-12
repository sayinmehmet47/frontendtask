import { configureStore } from '@reduxjs/toolkit';
import historySlice from './historySlice';

export const store = configureStore({
  reducer: {
    history: historySlice,
  },
});
