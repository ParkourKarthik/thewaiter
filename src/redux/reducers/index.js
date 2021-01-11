import { combineReducers } from "redux";
import tables from "./tables";
import orders from "./orders";
import menus from "./menus";

export default combineReducers({ tables, orders, menus });
