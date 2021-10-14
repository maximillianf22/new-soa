import React from 'react'
import { PageTitle } from '../../../_metronic/layout/core'
import { Switch, Route, Redirect } from 'react-router-dom';
import { PageLink } from '../../../_metronic/layout/core';
import { ItemCostsTable } from './components/ItemCostsTable/ItemCostsTable';
import { ItemCostsView } from './components/ItemCostsView/ItemCostsView';


const ItemCostsBreadCrumbs: Array<PageLink> = [
    {
      title: 'Item de costos',
      path: '/item-costs/home',
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
 
  const ItemCostsPage: React.FC = () => {
    return (
      <Switch>
        <Route path='/item-costs/home'>
          <PageTitle breadcrumbs={ItemCostsBreadCrumbs}>Tabla de Item costos</PageTitle>
          <ItemCostsTable />
        </Route>
        <Route path='/item-costs/view'>
          <PageTitle breadcrumbs={ItemCostsBreadCrumbs}>Tabla de Item costos</PageTitle>
          <ItemCostsView />
        </Route>

        <Redirect from='/item-costs' exact={true} to='/item-costs/home' />
        <Redirect to='/item-costs/home' />
      </Switch>
    )
  }
  
  export default ItemCostsPage