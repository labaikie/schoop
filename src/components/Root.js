import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from './App'
import Explore from '../containers/Explore'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path='/' component={App} />
        <Route path={`/explore/:institutionId?/:slug?`} component={Explore} />
      </Switch>
    </Router>
  </Provider>
)

export default Root
