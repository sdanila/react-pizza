import { combineReducers } from 'redux';

import pizzas from './pizzas';
import filter from './filters';

const rootReducer = combineReducers({
  pizzas,
  filter,
});

export default rootReducer;
