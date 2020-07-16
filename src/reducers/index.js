import { combineReducers } from "redux";
import dogs from "./books";
import filter from "./filter";

export default combineReducers({
  dogs,
  filter
});
