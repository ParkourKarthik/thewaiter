import { SET_ORDERS } from "../actionTypes";

export default (state = {}, action) => {
  switch (action.type) {
    case SET_ORDERS:
      return action.payload.orders || state;
    default:
      return state;
  }
};
