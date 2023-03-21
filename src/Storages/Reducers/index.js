import { combineReducers } from "redux";
import user from "./users";
import menu from "./menu";
import delete_menu from "./deleteMenu";
import add_menu from "./addMenu";

const rootReducers = combineReducers({
  user,
  menu,
  delete_menu,
  add_menu,
});

export default rootReducers;
