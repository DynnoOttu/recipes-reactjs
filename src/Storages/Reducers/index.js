import { combineReducers } from "redux";
import user from "./users";
import menu from "./menu";
import delete_menu from "./deleteMenu";
import add_menu from "./addMenu";
import register from "./register";
import allRecipes from "./allRecipes"


const rootReducers = combineReducers({
  user,
  menu,
  delete_menu,
  add_menu,
  register,
  allRecipes
});

export default rootReducers;
