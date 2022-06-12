import { configureStore } from '@reduxjs/toolkit';
import historySlice from './historySlice';
//ekleme
//eklemefeature
export const store = configureStore({
  reducer: {
    history: historySlice,
  },
});
