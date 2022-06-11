import { configureStore } from '@reduxjs/toolkit';
import historySlice from './historySlice';
//anlamadim
export const store = configureStore({
  reducer: {
    history: historySlice,
  },
});
