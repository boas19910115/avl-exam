import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import { LoginPage } from 'containers/LoginPage'
import ProtectedRoute from 'components/ProtectedRoute'
import { UserPage } from 'containers/UserPage'
import { ShopTimePage } from 'containers/ShopTimePage'

const AppRoutesContainer = () => {
  return (
    <Switch>
      <Route exact path='/home'>
        HOME
      </Route>
      <Route exact path='/about'>
        ABOUT
      </Route>
      <Route exact path='/login'>
        <LoginPage />
      </Route>
      <ProtectedRoute exact path='/shop-time'>
        <ShopTimePage />
      </ProtectedRoute>
      <ProtectedRoute exact path='/user-info'>
        <UserPage />
      </ProtectedRoute>
      <Redirect from='/' to='/home' />
    </Switch>
  )
}

export default AppRoutesContainer
