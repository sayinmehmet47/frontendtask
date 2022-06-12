import { configureStore } from '@reduxjs/toolkit';
import historySlice from './historySlice';
//deneme
export const store = configureStore({
  reducer: {
    history: historySlice,
  },
});
