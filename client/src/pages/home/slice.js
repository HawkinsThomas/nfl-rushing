import { createSlice } from '@reduxjs/toolkit';
import { fetchPlayerData } from './actions';

export const initialState = {
  loadingResults: false,
  playerData: null,
  numberOfResults: 1001,
  resultsPerPage: 10,
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlayerData.pending, (state) => {
        state.loadingResults = true;
      })
      .addCase(fetchPlayerData.fulfilled, (state, action) => {
        console.log(action.payload);
        state.playerData = action.payload;
        state.loadingResults = false;
      })
      .addCase(fetchPlayerData.rejected, (state) => {
        state.playerData = [];
        state.loadingResults = false;
      });
  },
});

export default homeSlice.reducer;
