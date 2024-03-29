import React, { useEffect } from 'react'
import {PageTitle} from '../../../_metronic/layout/core'
import {Switch, Route, Redirect} from 'react-router-dom'
import {PageLink} from '../../../_metronic/layout/core'
import {PlansTable} from './components/PlansTable/PlansTable'
import { PlansForm } from './components/PlansForm'
import { useDispatch } from 'react-redux'
import { accountsActions } from '../../redux/actions/accountsActions'
import { accountTypes } from '../../redux/types/accountTypes'

const PlansBreadCrumbs: Array<PageLink> = [
  {
    title: 'Planes',
    path: '/plans/home',
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

const PlansPage: React.FC = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(accountsActions.resetSelectedAccount())
    dispatch({type: accountTypes.get})
  }, [dispatch])
  return (
    <Switch>
      <Route path='/plans/home'>
        <PageTitle breadcrumbs={PlansBreadCrumbs}>Tabla de Planes</PageTitle>
        <PlansTable />
      </Route>

      <Route path='/plans/create'>
        <PageTitle breadcrumbs={PlansBreadCrumbs}>Registro de planes</PageTitle>
        <PlansForm />
      </Route>

      <Redirect from='/plans' exact={true} to='/plans/home' />
      <Redirect to='/plans/home' />
    </Switch>
  )
}

export default PlansPage
