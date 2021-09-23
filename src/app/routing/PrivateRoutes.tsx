import React, {Suspense, lazy} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {FallbackView} from '../../_metronic/partials'
import {IndexPage} from '../pages/home'


export function PrivateRoutes() {
  const UsersPage = lazy(() => import('../modules/users/UsersPage'))
  const CatalogsPage = lazy(() => import('../modules/catalogs/CatalogsPage'))
  const AccountsPage = lazy(() => import('../modules/accounts/AccountsPage'))
  const FamiliesPage = lazy(() => import('../modules/families/FamiliesPage'))

  return (
    <Suspense fallback={<FallbackView />}>
      <Switch>
        <Route path='/home' component={IndexPage} />
        <Route path='/users' component={UsersPage} />
        <Route path='/catalogs' component={CatalogsPage} />
        <Route path='/accounts' component={AccountsPage} />
        <Route path='/families' component={FamiliesPage} />
        <Redirect from='/auth' to='/home' />
        <Redirect exact from='/' to='/home' />
        <Redirect to='error/404' />
      </Switch>
    </Suspense>
  )
}
