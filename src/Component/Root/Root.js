import React, { Component } from 'react'
import './Root.css'
import { Switch, Route, HashRouter } from 'react-router-dom'
import Login from '../Login/Login'

class Root extends Component {

  render() {
    return (
      <HashRouter>
        <div>
          <Switch>
            <Route
              exact
              path="/"
              render={props => <Login/>}
            />
          </Switch>
        </div>
      </HashRouter>
    )
  }
}

export default Root
