import React from 'react'
import {PageTitle} from '../../../_metronic/layout/core'
import {Switch, Route, Redirect} from 'react-router-dom'
import {PageLink} from '../../../_metronic/layout/core'
import { RolesList } from './components/RolesList'
import { RolesView } from './components/RolesView'

const RolesBreadCrumbs: Array<PageLink> = [
  {
    title: 'Roles',
    path: '/roles/home',
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

const RolesPage: React.FC = () => {
  return (
    <Switch>
      <Route path='/roles/home'>
        <PageTitle breadcrumbs={RolesBreadCrumbs}>Listado de Roles</PageTitle>
        <RolesList />
      </Route>

      <Route path='/roles/view'>
        <PageTitle breadcrumbs={RolesBreadCrumbs}>Detalle de Rol</PageTitle>
        <RolesView />
      </Route>

      <Redirect from='/roles' exact={true} to='/roles/home' />
      <Redirect to='/roles/home' />
    </Switch>
  )
}

export default RolesPage
