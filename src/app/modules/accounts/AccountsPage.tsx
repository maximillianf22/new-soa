import React from 'react'
import {PageTitle} from '../../../_metronic/layout/core'
import {Switch, Route, Redirect} from 'react-router-dom'
import {PageLink} from '../../../_metronic/layout/core'

const accountsBreadCrumbs: Array<PageLink> = [
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
        <PageTitle breadcrumbs={accountsBreadCrumbs}>Tabla de Cuentas</PageTitle>
        {/* <AccountsTable /> */}
      </Route>

      <Redirect from='/accounts' exact={true} to='/accounts/home' />
      <Redirect to='/accounts/home' />
    </Switch>
  )
}

export default AccountsPage
