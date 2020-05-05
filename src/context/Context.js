import createDataContext from './indexContext';
import { MEALS } from '../data/dummy-data';

// Set my state
const initialState = {
  meals: [],
  orders: [],
};

// Add Reducer if using reducer
const mealReducer = (state, action) => {
  switch (action.type) {
    case 'get_meals':
      console.log('meals', action.meals);
      return { ...state, meals: action.meals };
    case 'add_to_order':
      return { ...state, orders: state.orders.concat(action.order) };
    case 'remove_order':
      return {
        ...state,
        orders: state.orders.filter(order => order.id !== action.orderId),
      };

    case 'get_orders':
      return state;

    // create set_favorite case that returns the updated state

    default:
      return state;
  }
};

const getMeals = dispatch => {
  return () => {
    const meals = MEALS;

    console.log('getting here');

    dispatch({ type: 'get_meals', meals });
  };
};

const addToOrder = dispatch => {
  return order => {
    let createOrderId = Math.random().toString(36).substring(2, 15);
    order.id = createOrderId;
    dispatch({ type: 'add_to_order', order });
  };
};

const getOrders = dispatch => {
  return () => {
    dispatch({ type: 'get_orders' });
  };
};

const removeOrder = dispatch => {
  return orderId => {
    dispatch({ type: 'remove_order', orderId });
  };
};

export const { Context, Provider } = createDataContext(
  mealReducer,
  { addToOrder, getOrders, removeOrder, getMeals },
  initialState
);
