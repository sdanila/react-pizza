import {
  ADD_PIZZA_CART,
  REMOVE_CART,
  REMOVE_CART_ITEM,
  MINUS_CART_ITEM,
  PLUS_CART_ITEM,
} from '../actions';

const initialState = {
  items: {},
  totalPrice: 0,
  pizzaCount: 0,
};

const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);

const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PIZZA_CART: {
      const currentPizzaItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];

      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentPizzaItems,
          totalPrice: getTotalPrice(currentPizzaItems),
        },
      };

      const items = Object.values(newItems).map((obj) => obj.items);
      const allPizzas = [].concat.apply([], items);
      const totalPrice = getTotalPrice(allPizzas);

      return {
        ...state,
        items: newItems,
        pizzaCount: allPizzas.length,
        totalPrice,
      };
    }

    case REMOVE_CART:
      return {
        items: {},
        totalPrice: 0,
        pizzaCount: 0,
      };

    case REMOVE_CART_ITEM: {
      const newItems = {
        ...state.items,
      };
      const currentTotalPrice = newItems[action.payload].totalPrice;
      const currentTotalCount = newItems[action.payload].items.length;
      delete newItems[action.payload];
      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - currentTotalPrice,
        pizzaCount: state.pizzaCount - currentTotalCount,
      };
    }

    case PLUS_CART_ITEM: {
      const newsItems = [
        ...state.items[action.payload].items,
        state.items[action.payload].items[0],
      ];
      return {
        ...state,
        items: {
          ...state.items,
          [action.payload]: {
            items: newsItems,
            totalPrice: getTotalPrice(newsItems),
          },
        },
        totalPrice: state.totalPrice + newsItems[0].price,
        pizzaCount: state.pizzaCount + 1,
      };
    }

    case MINUS_CART_ITEM: {
      const newsItems = state.items[action.payload].items.slice(1);
      return {
        ...state,
        items: {
          ...state.items,
          [action.payload]: {
            items: newsItems,
            totalPrice: getTotalPrice(newsItems),
          },
        },
        totalPrice: state.totalPrice - newsItems[0].price,
        pizzaCount: state.pizzaCount - 1,
      };
    }

    default:
      return state;
  }
};

export default cart;
