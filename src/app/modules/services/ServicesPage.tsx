import React from 'react'
import {PageTitle} from '../../../_metronic/layout/core'
import {Switch, Route, Redirect} from 'react-router-dom'
import {PageLink} from '../../../_metronic/layout/core'
import {ServicesTable} from './components/ServicesTable/ServicesTable'
import {ServicesForm} from './components/ServicesForm'

const ServicesBreadCrumbs: Array<PageLink> = [
  {
    title: 'Servicios',
    path: '/services/home',
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

const ServicesPage: React.FC = () => {
  return (
    <Switch>
      <Route path='/services/home'>
        <PageTitle breadcrumbs={ServicesBreadCrumbs}>Tabla de Servicios</PageTitle>
        <ServicesTable />
      </Route>

      <Route path='/services/create'>
        <PageTitle breadcrumbs={ServicesBreadCrumbs}>Registro de Servicios</PageTitle>
        <ServicesForm />
      </Route>

      <Redirect from='/services' exact={true} to='/services/home' />
      <Redirect to='/services/home' />
    </Switch>
  )
}

export default ServicesPage
