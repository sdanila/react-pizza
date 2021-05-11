import { combineReducers } from 'redux';

import pizzas from './pizzas';
import filter from './filters';
import cart from './cart';

const rootReducer = combineReducers({
  pizzas,
  filter,
  cart,
});

export default rootReducer;
