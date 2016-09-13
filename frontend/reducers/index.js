import { combineReducers } from 'redux'

import recipes from './recipes'
import shopping_lists from './shopping_lists'
import selections from './selections'
import { routerReducer } from 'react-router-redux'

export default combineReducers({
  selections,
  recipes,
  shopping_lists,
  routing: routerReducer
})
