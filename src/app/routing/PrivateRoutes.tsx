import React, {Suspense, lazy} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {FallbackView} from '../../_metronic/partials'
import {IndexPage} from '../pages/home'


export function PrivateRoutes() {
  const UsersPage = lazy(() => import('../modules/users/UsersPage'))

  return (
    <Suspense fallback={<FallbackView />}>
      <Switch>
        <Route path='/inicio' component={IndexPage} />
        <Route path='/usuarios' component={UsersPage} />
        <Redirect from='/auth' to='/inicio' />
        <Redirect exact from='/' to='/inicio' />
        <Redirect to='error/404' />
      </Switch>
    </Suspense>
  )
}
