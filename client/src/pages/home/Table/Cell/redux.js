import { setInverted, setSortKey } from '../../slice';


export const mapStateToProps = (state) => ({
  sortKey: state.home.sortKey,
  invertedSort: state.home.invertedSort,
});

export const mapDispatchToProps = {
  setInverted,
  setSortKey,
};
