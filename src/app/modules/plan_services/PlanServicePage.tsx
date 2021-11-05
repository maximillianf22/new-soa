import React from 'react'
import {PageTitle} from '../../../_metronic/layout/core'
import {Switch, Route, Redirect} from 'react-router-dom'
import {PageLink} from '../../../_metronic/layout/core'
import {PlanServiceTable} from './components/PlanServiceTable/PlanServiceTable'
import {FormWizzard} from './components/PlanServiceForm/FormWizzard'
import {ViewEditForm} from './components/PlanServiceForm/ViewEditForm'

const PlanServiceBreadCrumbs: Array<PageLink> = [
  {
    title: 'Servicios',
    path: '/plan-service/home',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]

const PlanServicePage: React.FC = () => {
  return (
    <Switch>
      <Route path='/plan-service/home'>
        <PageTitle breadcrumbs={PlanServiceBreadCrumbs}>Tabla de Servicios</PageTitle>
        <PlanServiceTable />
      </Route>

      <Route path='/plan-service/create'>
        <PageTitle breadcrumbs={PlanServiceBreadCrumbs}>Registro de Servicios</PageTitle>
        <FormWizzard />
      </Route>

      <Route path='/plan-service/view'>
        <PageTitle breadcrumbs={PlanServiceBreadCrumbs}>Registro de Servicios</PageTitle>
        <ViewEditForm />
      </Route>

      <Route path='/plan-service/edit'>
        <PageTitle breadcrumbs={PlanServiceBreadCrumbs}>Registro de Servicios</PageTitle>
      </Route>

      <Redirect from='/plan-service/' exact={true} to='/plan-service/home' />
      <Redirect to='/plan-service/home' />
    </Switch>
  )
}

export default PlanServicePage
