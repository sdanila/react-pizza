import { SET_PIZZAS, SET_LOADING } from '.';

export const setPizzas = (items) => ({
  type: SET_PIZZAS,
  payload: items,
});

export const setLoading = (items) => ({
  type: SET_LOADING,
  payload: items,
});
