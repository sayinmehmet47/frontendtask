import { configureStore } from '@reduxjs/toolkit';
import historySlice from './historySlice';
//deneme
//gelistirme
//upgrade2
export const store = configureStore({
  reducer: {
    history: historySlice,
  },
});
