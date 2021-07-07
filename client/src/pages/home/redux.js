import { fetchPlayerData, downloadPlayerData } from './actions';
import { setPlayerFilter } from './slice';


export const mapStateToProps = (state) => ({
  playerData: state.home.playerData,
  loadingResults: state.home.loadingResults,
  resultsPerPage: state.home.resultsPerPage,
  numberOfResults: state.home.numberOfResults,
  currentPage: state.home.currentPage,
  sortKey: state.home.sortKey,
  inverted: state.home.invertedSort,
  playerFilter: state.home.playerFilter,
});

export const mapDispatchToProps = {
  fetchPlayerData,
  setPlayerFilter,
};
