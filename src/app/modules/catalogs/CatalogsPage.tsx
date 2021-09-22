import React from 'react'
import {PageTitle} from '../../../_metronic/layout/core'
import {Switch, Route, Redirect} from 'react-router-dom'
import {PageLink} from '../../../_metronic/layout/core'
import { CatalogsHome } from './components/CatalogsHome'

const catalogsBreadCrumbs: Array<PageLink> = [
  {
    title: 'Cuentas',
    path: '/catalogs/home',
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

const CatalogsPage: React.FC = () => {
  return (
    <Switch>
      <Route path='/catalogs/home'>
        <PageTitle breadcrumbs={catalogsBreadCrumbs}>Tabla de Cuentas</PageTitle>
        <CatalogsHome />
      </Route>

      <Redirect from='/catalogs' exact={true} to='/catalogs/home' />
      <Redirect to='/catalogs/home' />
    </Switch>
  )
}

export default CatalogsPage
