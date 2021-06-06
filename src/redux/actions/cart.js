import { ADD_PIZZA_CART, REMOVE_CART, REMOVE_CART_ITEM, PLUS_CART_ITEM, MINUS_CART_ITEM } from '.';

export const addPizzaCart = (pizzaObj) => ({
  type: ADD_PIZZA_CART,
  payload: pizzaObj,
});

export const removeCart = () => ({
  type: REMOVE_CART,
});

export const removeCartItem = (id) => ({
  type: REMOVE_CART_ITEM,
  payload: id,
});

export const plusItem = (id) => ({
  type: PLUS_CART_ITEM,
  payload: id,
});

export const minusItem = (id) => ({
  type: MINUS_CART_ITEM,
  payload: id,
});
