import { configureStore } from '@reduxjs/toolkit';
import historySlice from './historySlice';
//deneme
<<<<<<< HEAD

//deneme2
=======
//deneme1
>>>>>>> master
export const store = configureStore({
  reducer: {
    history: historySlice,
  },
});
