import { configureStore } from '@reduxjs/toolkit';
import historySlice from './historySlice';
//anlamadim
//duzeltme

export const store = configureStore({
  reducer: {
    history: historySlice,
  },
});
