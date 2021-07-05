import { fetchPlayerData } from './actions';


export const mapStateToProps = (state)=> ({
  playerData: state.home.playerData,
  loadingResults: state.home.loadingResults,
  resultsPerPage: state.home.resultsPerPage,
  numberOfResults: state.home.numberOfResults,
});

export const mapDispatchToProps = {
  fetchPlayerData,
};
