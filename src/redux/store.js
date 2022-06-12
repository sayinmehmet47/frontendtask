import { configureStore } from '@reduxjs/toolkit';
import historySlice from './historySlice';
//deneme
//gelistirme

export const store = configureStore({
  reducer: {
    history: historySlice,
  },
});
