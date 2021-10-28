import React from 'react'
import {PageTitle} from '../../../_metronic/layout/core'
import {Switch, Route, Redirect} from 'react-router-dom'
import {PageLink} from '../../../_metronic/layout/core'
import { JustificationsTable } from './components/JustificationsTable/JustificationsTable'

const JustificationsBreadCrumbs: Array<PageLink> = [
  {
    title: 'Justificaciones',
    path: '/justifications/home',
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

const JustificatiosPage: React.FC = () => {
  return (
    <Switch>
      <Route path='/justifications/home'>
        <PageTitle breadcrumbs={JustificationsBreadCrumbs}>Tabla de Servicios</PageTitle>
        <JustificationsTable />
      </Route>

      <Redirect from='/justifications' exact={true} to='/justifications/home' />
      <Redirect to='/justifications/home' />
    </Switch>
  )
}

export default JustificatiosPage
