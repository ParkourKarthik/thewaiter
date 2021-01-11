import { SET_MENUS } from "../actionTypes";

const menuItems = [
  { id: 1, name: "King size Burger" },
  { id: 2, name: "Medium Burger" },
  { id: 3, name: "Medium Pizza" },
  { id: 4, name: "Large Pizza" }
];

export default (state = menuItems, action) => {
  switch (action.type) {
    case SET_MENUS:
      return action.payload.menus || state;
    default:
      return state;
  }
};
