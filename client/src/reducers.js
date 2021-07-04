import { combineReducers } from 'redux';
import { HomePageReducer } from './pages/home/reducer';


const rootReducer = combineReducers({
  home: HomePageReducer,
});

export default rootReducer;
