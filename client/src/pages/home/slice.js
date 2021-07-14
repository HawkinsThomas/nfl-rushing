import { createSlice } from '@reduxjs/toolkit';
import { fetchPlayerData } from './actions';
import { addT } from './addT';


export const initialState = {
  loadingResults: false,
  playerData: null,
  sortKey: null,
  invertedSort: false,
  numberOfResults: 0,
  resultsPerPage: 20,
  currentPage: 0,
  playerFilter: '',
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setPage(state, action) {
      state.currentPage = action.payload;
    },
    setInverted(state, action) {
      state.invertedSort = action.payload;
    },
    setSortKey(state, action) {
      state.sortKey = action.payload;
    },
    setPlayerFilter(state, action) {
      state.playerFilter = action.payload;
      state.currentPage = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlayerData.pending, (state) => {
        state.loadingResults = true;
      })
      .addCase(fetchPlayerData.fulfilled, (state, action) => {
        state.playerData = addT(action.payload.data);
        state.numberOfResults = action.payload.numberOfRecords;
        state.loadingResults = false;
      })
      .addCase(fetchPlayerData.rejected, (state) => {
        state.playerData = [];
        state.loadingResults = false;
      });
  },
});

export const {
  setPage, setInverted, setSortKey, setPlayerFilter,
} = homeSlice.actions;
export default homeSlice.reducer;
