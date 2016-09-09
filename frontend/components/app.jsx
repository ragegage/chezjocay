import React from 'react'
import { Link } from 'react-router'
// import GreetingContainer from './greeting/greeting_container';

const App = ({children}) => (
  <div>
    <header>
      <Link to="/" className="header-link"><h1>Chez Jocay</h1></Link>
    </header>
    {children}
  </div>
)

export default App
