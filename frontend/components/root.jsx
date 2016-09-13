import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './app'
import RecipeIndexContainer from './recipe_index_container'
import RecipeShowContainer from './recipe_show_container'

const Root = ({store}) => {
  return (
    <Provider store={store}>
      <Router history={ browserHistory }>
        <Route path="/" component={ App }>
          <IndexRoute component={ RecipeIndexContainer } />
          <Route path="r/:recipeId" component={ RecipeShowContainer } />
        </Route>
      </Router>
    </Provider>
  )
}

export default Root
