import React from 'react'
import {PageTitle} from '../../../_metronic/layout/core'
import {Switch, Route, Redirect} from 'react-router-dom'
import {PageLink} from '../../../_metronic/layout/core'
import { ProvidersTable } from './components/ProvidersTable/ProvidersTable'
import { FormTab } from './components/ProvidersForm/FormTab'

const ProvidersBreadCrumbs: Array<PageLink> = [
  {
    title: 'Proveedores',
    path: '/providers/home',
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

const ProvidersPage: React.FC = () => {
  return (
    <Switch>
      <Route path='/providers/home'>
        <PageTitle breadcrumbs={ProvidersBreadCrumbs}>Tabla de Proveedor</PageTitle>
        <ProvidersTable />
      </Route>

      <Route path='/providers/create'>
        <PageTitle breadcrumbs={ProvidersBreadCrumbs}>Registro de Proveedor</PageTitle>
        <FormTab />
      </Route>

      <Route path='/providers/edit'>
        <PageTitle breadcrumbs={ProvidersBreadCrumbs}>Detalle del Proveedor</PageTitle>
        <FormTab />
      </Route>

      <Redirect from='/providers/' exact={true} to='/providers/home' />
      <Redirect to='/providers/home' />
    </Switch>
  )
}

export default ProvidersPage
