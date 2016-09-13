import { combineReducers } from 'redux'

import recipes from './recipes'
import shopping_lists from './shopping_lists'
import selections from './selections'

export default combineReducers({
  selections,
  recipes,
  shopping_lists
})
