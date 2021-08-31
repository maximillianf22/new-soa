import React, {FC} from 'react'
import { PageTitle } from '../../../_metronic/layout/core'
import { useIntl } from 'react-intl';
import { UsersTable } from './components/UsersTable/UsersTable';
import { Switch, Route, Redirect } from 'react-router-dom';
import { PageLink } from '../../../_metronic/layout/core';
import { UsersCreate } from './components/UsersCreate';


const usersBreadCrumbs: Array<PageLink> = [
    {
      title: 'Usuarios',
      path: '/usuarios/tabla',
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
  
  const UsersPage: React.FC = () => {
    return (
      <Switch>
        <Route path='/usuarios/tabla'>
          <PageTitle breadcrumbs={usersBreadCrumbs}>Tabla de Usuarios</PageTitle>
          <UsersTable />
        </Route>

        <Route path='/usuarios/crear'>
          <PageTitle breadcrumbs={usersBreadCrumbs}>Nuevo Usuario</PageTitle>
          <UsersCreate />
        </Route>

        <Redirect from='/usuarios' exact={true} to='/usuarios/tabla' />
        <Redirect to='/usuarios/tabla' />
      </Switch>
    )
  }
  
  export default UsersPage