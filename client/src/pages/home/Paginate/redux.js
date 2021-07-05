import { setPage } from '../slice';

export const mapStateToProps = (state)=> ({
  currentPage: state.home.currentPage,
});

export const mapDispatchToProps = {
  setPage,
};
