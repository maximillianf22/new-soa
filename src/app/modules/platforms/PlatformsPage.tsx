import React from 'react'
import {PageTitle} from '../../../_metronic/layout/core'
import {Switch, Route, Redirect} from 'react-router-dom'
import {PageLink} from '../../../_metronic/layout/core'
import {PlatformsTable} from './components/PlatformsTable/PlatformsTable'
import { PlatformsView } from './components/PlatformsView/PlatformsView'

const PlatformsBreadCrumbs: Array<PageLink> = [
  {
    title: 'Plataformas',
    path: '/platforms/home',
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

const PlatformsPage: React.FC = () => {
  return (
    <Switch>
      <Route path='/platforms/home'>
        <PageTitle breadcrumbs={PlatformsBreadCrumbs}>Tabla de Servicios</PageTitle>
        <PlatformsTable />
      </Route>

      <Route path='/platforms/view'>
        <PageTitle breadcrumbs={PlatformsBreadCrumbs}>Registro de Servicios</PageTitle>
        <PlatformsView />
      </Route>

      <Redirect from='/platforms' exact={true} to='/platforms/home' />
      <Redirect to='/platforms/home' />
    </Switch>
  )
}

export default PlatformsPage
