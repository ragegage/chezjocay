import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './app'
import RecipeIndexContainer from './recipe_index_container'
import RecipeShowContainer from './recipe_show_container'

class AppRouter extends React.Component{
  render(){
    return(
      <Router history={ browserHistory }>
        <Route path="/" component={ App }>
          <IndexRoute component={ RecipeIndexContainer } />
          <Route path="/:recipeId" component={ RecipeShowContainer } />
        </Route>
      </Router>
    )
  }
}

export default AppRouter
