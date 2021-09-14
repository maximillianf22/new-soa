import React from 'react'
import { PageTitle } from '../../../_metronic/layout/core'
import { Switch, Route, Redirect } from 'react-router-dom';
import { PageLink } from '../../../_metronic/layout/core';
import { UsersTable } from './components/UsersTable';
import { FormRegular } from './components/UsersForms/FormRegular';
import { FormMultiplatform } from './components/UsersForms/FormMultiplatform';


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

        <Route path='/usuarios/crear-multiplataforma'>
          <PageTitle breadcrumbs={usersBreadCrumbs}>Registro de usuario Multiplataforma</PageTitle>
          <FormMultiplatform />
        </Route>

        <Route path='/usuarios/crear-regular'>
          <PageTitle breadcrumbs={usersBreadCrumbs}>Registro de usuario</PageTitle>
          <FormRegular />
        </Route>

        <Redirect from='/usuarios' exact={true} to='/usuarios/tabla' />
        <Redirect to='/usuarios/tabla' />
      </Switch>
    )
  }
  
  export default UsersPage