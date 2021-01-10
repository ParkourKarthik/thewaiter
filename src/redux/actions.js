import { SET_ORDERS, SET_TABLES } from "./actionTypes";

export const setTables = (tables) => ({
  type: SET_TABLES,
  payload: {
    tables
  }
});

export const setOrders = (orders) => ({
  type: SET_ORDERS,
  payload: {
    orders
  }
});
