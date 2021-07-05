import { fetchPlayerData } from './actions';


export const mapStateToProps = (state)=> ({
  playerData: state.home.playerData,
  loadingResults: state.home.loadingResults,
});

export const mapDispatchToProps = {
  fetchPlayerData,
};
