import React, {FC} from 'react'
import { PageTitle } from '../../../_metronic/layout/core'
import { useIntl } from 'react-intl';
import { Switch, Route, Redirect } from 'react-router-dom';
import { PageLink } from '../../../_metronic/layout/core';
import { SelectType } from './components/UsersCreate/SelectType';
import { UsersTable } from './components/UsersTable';
import { UserRegularForm } from './components/UsersCreate/Forms/UserRegular';
import { WizzardForm } from './components/UsersCreate/Forms/UserMultiplataform/WizzardForm';


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
          <SelectType />
        </Route>
        <Route path='/usuarios/crear-multiplataforma' component={WizzardForm} />
        <Route path='/usuarios/crear-regular' component={UserRegularForm} />

        <Redirect from='/usuarios' exact={true} to='/usuarios/tabla' />
        <Redirect to='/usuarios/tabla' />
      </Switch>
    )
  }
  
  export default UsersPage