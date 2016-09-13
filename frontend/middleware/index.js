import { applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'

import recipe from './recipe'
import shopping_list from './shopping_list'

export default applyMiddleware(
  recipe,
  shopping_list,
  routerMiddleware(browserHistory)
)
