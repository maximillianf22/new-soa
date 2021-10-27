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
  const ItemCostsPage = lazy(() => import('../modules/items_costs/ItemCostsPage'))
  const ExpedientsPage = lazy(() => import('../modules/expedients/ExpedientsPage'))
  const PlatformsPage = lazy(() => import('../modules/platforms/PlatformsPage'))
  const RolesPage = lazy(() => import('../modules/roles/RolesPage'))

  return (
    <Suspense fallback={<FallbackView />}>
      <Switch>
        <Route path='/home' component={IndexPage} />
        <Route path='/users' component={UsersPage} />
        <Route path='/accounts' component={AccountsPage} />
        <Route path='/plans' component={PlansPage} />
        <Route path='/services' component={ServicesPage} />
        <Route path='/item-costs' component={ItemCostsPage} />
        <Route path='/plan-service' component={PlanServicePage} />
        <Route path='/families' component={FamiliesPage} />
        <Route path='/providers' component={ProvidersPage} />
        <Route path='/expedients' component={ExpedientsPage} />
        <Route path='/platforms' component={PlatformsPage} />
        <Route path='/roles' component={RolesPage} />
        <Redirect from='/auth' to='/home' />
        <Redirect exact from='/' to='/home' />
        <Redirect to='error/404' />
      </Switch>
    </Suspense>
  )
}
