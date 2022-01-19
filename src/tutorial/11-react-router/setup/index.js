import React from 'react'
// react router
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
// pages
import Home from './Home'
import About from './About'
import People from './People'
import Error from './Error'
import Person from './Person'
// navbar
import Navbar from './Navbar'
const ReactRouterSetup = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/people'>
          <People />
        </Route>

        {/* home / page should be the last one. cause matches everything. Or we can place "exact" word */}
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/person/:id' children={<Person />}></Route>
        {/* SHOULD BE LAST route.
        if any wrong adress is entered we are going to error page, thanks to the * star, cause start matches every character */}
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  )
}

export default ReactRouterSetup
