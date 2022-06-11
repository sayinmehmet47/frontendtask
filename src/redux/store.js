import { configureStore } from '@reduxjs/toolkit';
import historySlice from './historySlice';
//deneme1234
export const store = configureStore({
  reducer: {
    history: historySlice,
  },
});
