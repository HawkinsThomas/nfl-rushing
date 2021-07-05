import { combineReducers } from 'redux';
import homeReducer from './pages/home/slice';


const rootReducer = combineReducers({
  home: homeReducer,
});

export default rootReducer;
