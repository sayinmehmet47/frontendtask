import { configureStore } from '@reduxjs/toolkit';
import historySlice from './historySlice';
//ekleme
//eklemefeature
//feature
export const store = configureStore({
  reducer: {
    history: historySlice,
  },
});
