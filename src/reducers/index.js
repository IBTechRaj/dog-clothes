import { combineReducers } from 'redux';
import dogs from './dogs';
import filter from './filter';

export default combineReducers({
  dogs,
  filter,
});
