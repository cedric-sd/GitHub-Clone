import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Home from './pages/Main'

const Routes = () => {
  return (
    <BrowserRouter>
      <Route
        component={Home}
        path="/:user"
        render={(props) => <Home {...props} />}
      />
    </BrowserRouter>
  )
}

export default Routes
