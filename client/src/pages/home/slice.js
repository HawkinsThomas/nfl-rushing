import { createSlice } from '@reduxjs/toolkit';
import { fetchPlayerData } from './actions';

export const initialState = {
  loadingResults: false,
  playerData: null,
  numberOfResults: 0,
  resultsPerPage: 20,
  currentPage: 0,
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setPage(state, action) {
      state.currentPage = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlayerData.pending, (state) => {
        state.loadingResults = true;
      })
      .addCase(fetchPlayerData.fulfilled, (state, action) => {
        state.playerData = action.payload.data;
        state.numberOfResults = action.payload.numberOfResults;
        state.loadingResults = false;
      })
      .addCase(fetchPlayerData.rejected, (state) => {
        state.playerData = [];
        state.loadingResults = false;
      });
  },
});

export const { setPage } = homeSlice.actions;
export default homeSlice.reducer;