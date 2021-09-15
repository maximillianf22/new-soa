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
      path: '/users/home',
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
        <Route path='/users/home'>
          <PageTitle breadcrumbs={usersBreadCrumbs}>Tabla de Usuarios</PageTitle>
          <UsersTable />
        </Route>

        <Route path='/users/create-multiplatform'>
          <PageTitle breadcrumbs={usersBreadCrumbs}>Registro de usuario Multiplataforma</PageTitle>
          <FormMultiplatform />
        </Route>

        <Route path='/users/create-regular'>
          <PageTitle breadcrumbs={usersBreadCrumbs}>Registro de usuario</PageTitle>
          <FormRegular />
        </Route>

        <Redirect from='/users' exact={true} to='/users/home' />
        <Redirect to='/users/home' />
      </Switch>
    )
  }
  
  export default UsersPage