import { SET_TABLES } from "../actionTypes";

const stateInit = [
  { id: 1, name: "Table 1" },
  { id: 2, name: "Table 2" },
  { id: 3, name: "Table 3" },
  { id: 4, name: "Table 4" }
];
export default (state = stateInit, action) => {
  switch (action.type) {
    case SET_TABLES:
      return action.payload.tables || state;
    default:
      return state;
  }
};
