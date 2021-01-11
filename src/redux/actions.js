import { SET_ORDERS, SET_TABLES, SET_MENUS } from "./actionTypes";

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

export const setMenus = (menus) => ({
  type: SET_MENUS,
  payload: {
    orders: menus
  }
});
