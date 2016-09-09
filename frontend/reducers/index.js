import { combineReducers } from 'redux'

import recipes from './recipes';
import shopping_lists from './shopping_lists';

export default combineReducers({
  recipes,
  shopping_lists
});