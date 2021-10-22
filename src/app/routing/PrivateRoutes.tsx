import React, {Suspense, lazy} from 'react'
import { useSelector } from 'react-redux'
import {Redirect, Route, Switch} from 'react-router-dom'
import { RootState } from '../../setup'
import {FallbackView} from '../../_metronic/partials'
import { permitByModule } from '../modules/permits/PermitFilter'
import {IndexPage} from '../pages/home'


export function PrivateRoutes() {
  const UsersPage = lazy(() => import('../modules/users/UsersPage'))
  const AccountsPage = lazy(() => import('../modules/accounts/AccountsPage'))
  const FamiliesPage = lazy(() => import('../modules/families/FamiliesPage'))
  const PlansPage = lazy(() => import('../modules/plans/PlansPage'))
  const ServicesPage = lazy(() => import('../modules/services/ServicesPage'))
  const PlanServicePage = lazy(() => import('../modules/plan_services/PlanServicePage'))
  const ProvidersPage = lazy(() => import('../modules/providers/ProvidersPage'))

  const {permits}: any = useSelector<RootState>(({permits}) => permits)

  return (
    <Suspense fallback={<FallbackView />}>
      <Switch>
        <Route path='/home' component={IndexPage} />
        <Route path='/users' component={UsersPage} />
        { permitByModule(permits, '_Accounts_') && (
          <Route path='/accounts' component={AccountsPage} />
        )}
        { permitByModule(permits, '_Plans_') && (
          <Route path='/plans' component={PlansPage} />
        )}
        { permitByModule(permits, '_Sercices_') && (
          <Route path='/services' component={ServicesPage} />
        )}
        { permitByModule(permits, '_ServicesPlans_') && (
          <Route path='/plan-service' component={PlanServicePage} />
        )}
        { permitByModule(permits, '_Families_') && (
          <Route path='/families' component={FamiliesPage} />
        )}
        { permitByModule(permits, '_Providers_') && (
          <Route path='/providers' component={ProvidersPage} />
        )}
        <Redirect from='/auth' to='/home' />
        <Redirect exact from='/' to='/home' />
        <Redirect to='/home' />
      </Switch>
    </Suspense>
  )
}
