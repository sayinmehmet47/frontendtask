import { createSlice } from '@reduxjs/toolkit';
//history edit

export const HistoryData = createSlice({
  name: 'history',
  initialState: {
    data: JSON.parse(localStorage.getItem('history')) || [],
  },
  reducers: {
    addLocalStorage: (state, action) => {
      state.data.push(action.payload);
      localStorage.setItem('history', JSON.stringify(state.data));
    },
  },
});
export default HistoryData.reducer;
export const { addLocalStorage } = HistoryData.actions;
