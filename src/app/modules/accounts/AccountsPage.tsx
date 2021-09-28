import React from 'react'
import { PageTitle } from '../../../_metronic/layout/core'
import { Switch, Route, Redirect } from 'react-router-dom';
import { PageLink } from '../../../_metronic/layout/core';
import { AccountsForm } from './components/AccountsForm';
import { AccountsTable } from './components/AccountsTable/AccountsTable';
import { AccountsView } from './components/AccountsView/AccountsView';


const AccountsBreadCrumbs: Array<PageLink> = [
    {
      title: 'Cuentas',
      path: '/accounts/home',
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
 
  const AccountsPage: React.FC = () => {
    return (
      <Switch>
        <Route path='/accounts/home'>
          <PageTitle breadcrumbs={AccountsBreadCrumbs}>Tabla de cuentas</PageTitle>
          <AccountsTable />
        </Route>
        <Route path='/accounts/create'>
          <PageTitle breadcrumbs={AccountsBreadCrumbs}>Registro de cuenta</PageTitle>
          <AccountsForm />
        </Route>
        <Route path='/accounts/view'>
          <PageTitle breadcrumbs={AccountsBreadCrumbs}>Registro de cuenta</PageTitle>
          <AccountsView />
        </Route>

        <Redirect from='/accounts' exact={true} to='/accounts/home' />
        <Redirect to='/accounts/home' />
      </Switch>
    )
  }
  
  export default AccountsPage