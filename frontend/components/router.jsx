import React from 'react'
//Router
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
//Components
import App from './app'
// import SearchContainer from '../search/search_container';
// import BenchFormContainer from '../bench_form/bench_form_container';
// import BenchShowContainer from '../bench_show/bench_show_container';
// import ReviewFormContainer from '../bench_show/review_form_container';
// import SessionFormContainer from '../session_form/session_form_container';

class AppRouter extends React.Component{
  render(){
    return(
      <Router history={ browserHistory }>
        <Route path="/" component={ App }>
        </Route>
      </Router>
    )
  }
}

export default AppRouter
