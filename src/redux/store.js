import { configureStore } from '@reduxjs/toolkit';
import historySlice from './historySlice';
//anlamadim
//duzeltme
//edit2

export const store = configureStore({
  reducer: {
    history: historySlice,
  },
});
