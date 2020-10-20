import React from 'react'
import {withRouter, Route, Switch} from 'react-router-dom'
import {Projects, Navbar, About} from './components'

const App = () => {
  return(
    <div>
    <Navbar/>
    <Switch>
      <Route exact path='/' component={About}/>
      <Route path='/projects' component={Projects}/>
    </Switch>
    </div>
  )
}

export default withRouter(App)
