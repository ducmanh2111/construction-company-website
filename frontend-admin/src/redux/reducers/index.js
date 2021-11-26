import { combineReducers } from "redux";
import houseCategoryReducer from "./houseCategory";

const rootReducers = combineReducers({
  houseCategory: houseCategoryReducer
})

export default rootReducers;
