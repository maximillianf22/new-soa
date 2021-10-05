import React, {Suspense, lazy} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {FallbackView} from '../../_metronic/partials'
import {IndexPage} from '../pages/home'


export function PrivateRoutes() {
  const UsersPage = lazy(() => import('../modules/users/UsersPage'))
  const AccountsPage = lazy(() => import('../modules/accounts/AccountsPage'))
  const FamiliesPage = lazy(() => import('../modules/families/FamiliesPage'))
  const PlansPage = lazy(() => import('../modules/plans/PlansPage'))
  const ServicesPage = lazy(() => import('../modules/services/ServicesPage'))
  const PlanServicePage = lazy(() => import('../modules/plan_services/PlanServicePage'))
  const ProvidersPage = lazy(() => import('../modules/providers/ProvidersPage'))

  return (
    <Suspense fallback={<FallbackView />}>
      <Switch>
        <Route path='/home' component={IndexPage} />
        <Route path='/users' component={UsersPage} />
        <Route path='/accounts' component={AccountsPage} />
        <Route path='/plans' component={PlansPage} />
        <Route path='/services' component={ServicesPage} />
        <Route path='/plan-service' component={PlanServicePage} />
        <Route path='/families' component={FamiliesPage} />
        <Route path='/providers' component={ProvidersPage} />
        <Redirect from='/auth' to='/home' />
        <Redirect exact from='/' to='/home' />
        <Redirect to='error/404' />
      </Switch>
    </Suspense>
  )
}
