import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
  search: searchReducer,
  cart: cartReducer,
  
});

export default rootReducer;
