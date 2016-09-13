import { combineReducers } from 'redux'

import recipes from './recipes'
import shopping_lists from './shopping_lists'
import { routerReducer } from 'react-router-redux'

export default combineReducers({
  recipes,
  shopping_lists,
  routing: routerReducer
})
