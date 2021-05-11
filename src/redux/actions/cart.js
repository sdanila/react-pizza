import { ADD_PIZZA_CART } from '.';

export const addPizzaCart = (pizzaObj) => ({
  type: ADD_PIZZA_CART,
  payload: pizzaObj,
});
