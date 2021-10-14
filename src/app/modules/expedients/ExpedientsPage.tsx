import React from 'react'
import { PageTitle } from '../../../_metronic/layout/core'
import { Switch, Route, Redirect } from 'react-router-dom';
import { PageLink } from '../../../_metronic/layout/core';
import { ExpedientsTable } from './components/ExpedientsTable/ExpedientsTable';
import { ExpedientsForm } from './components/ExpedientsForm/ExpedientsForm';
import { Stage1 } from './components/Stages/Stage1';


const ExpedientsBreadCrumbs: Array<PageLink> = [
    {
      title: 'Expedientes',
      path: '/expedients/home',
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
 
  const ExpedientsPage: React.FC = () => {
    return (
      <Switch>
        <Route path='/expedients/home'>
          <PageTitle breadcrumbs={ExpedientsBreadCrumbs}>Tabla de Expedientes</PageTitle>
          <ExpedientsTable />
        </Route>
        <Route path='/expedients/create'>
          <PageTitle breadcrumbs={ExpedientsBreadCrumbs}>Crear Expedientes</PageTitle>
          <ExpedientsForm />
        </Route>

        <Route path='/expedients/stage1'>
          <PageTitle breadcrumbs={ExpedientsBreadCrumbs}>Etapas del sertvicio</PageTitle>
          <Stage1 />
        </Route>

        <Redirect from='/expedients' exact={true} to='/expedients/home' />
        <Redirect to='/expedients/home' />
      </Switch>
    )
  }
  
  export default ExpedientsPage