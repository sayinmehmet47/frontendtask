import { configureStore } from '@reduxjs/toolkit';
import historySlice from './historySlice';
//ekleme
//eklememaster
export const store = configureStore({
  reducer: {
    history: historySlice,
  },
});
