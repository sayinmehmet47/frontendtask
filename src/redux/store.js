import { configureStore } from '@reduxjs/toolkit';
import historySlice from './historySlice';
//gitpull denemesi
export const store = configureStore({
  reducer: {
    history: historySlice,
  },
});
