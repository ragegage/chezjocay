import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './app'
import IndexContainer from './index_container'

class AppRouter extends React.Component{
  render(){
    return(
      <Router history={ browserHistory }>
        <Route path="/" component={ App }>
          <IndexRoute component={ IndexContainer } />
        </Route>
      </Router>
    )
  }
}

export default AppRouter
