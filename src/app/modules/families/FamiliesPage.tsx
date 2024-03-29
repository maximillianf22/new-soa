import React from 'react'
import { PageTitle } from '../../../_metronic/layout/core'
import { Switch, Route, Redirect } from 'react-router-dom';
import { PageLink } from '../../../_metronic/layout/core';
import { FamiliesTable } from './components/FamiliesTable/FamiliesTable';
import { FamiliesView } from './components/FamiliesView/FamiliesView';


const FamiliesBreadCrumbs: Array<PageLink> = [
    {
      title: 'Familias',
      path: '/families/home',
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
 
  const FamiliesPage: React.FC = () => {
    return (
      <Switch>
        <Route path='/families/home'>
          <PageTitle breadcrumbs={FamiliesBreadCrumbs}>Tabla de Familias</PageTitle>
          <FamiliesTable />
        </Route>
        <Route path='/families/view'>
          <PageTitle breadcrumbs={FamiliesBreadCrumbs}>Tabla de Familias</PageTitle>
          <FamiliesView />
        </Route>

        <Redirect from='/Families' exact={true} to='/families/home' />
        <Redirect to='/families/home' />
      </Switch>
    )
  }
  
  export default FamiliesPage