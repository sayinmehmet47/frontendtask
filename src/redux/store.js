import { configureStore } from '@reduxjs/toolkit';
import historySlice from './historySlice';
//deneme
//deneme1
export const store = configureStore({
  reducer: {
    history: historySlice,
  },
});
