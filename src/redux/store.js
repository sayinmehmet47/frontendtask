import { configureStore } from '@reduxjs/toolkit';
import historySlice from './historySlice';
//ekleme
//eklemefeature
//master
export const store = configureStore({
  reducer: {
    history: historySlice,
  },
});
