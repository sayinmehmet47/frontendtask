import { configureStore } from '@reduxjs/toolkit';
import historySlice from './historySlice';
//deneme

//deneme2
//deneme3
export const store = configureStore({
  reducer: {
    history: historySlice,
  },
});
