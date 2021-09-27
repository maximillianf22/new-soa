import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {Redirect, Switch} from 'react-router-dom'
import { accountsActions } from '../../redux/actions/accountsActions';
import { authActions } from '../../redux/actions/actions';

export function Logout() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(authActions.logout())
    dispatch(accountsActions.clear())
    document.location.reload()
  }, [dispatch])

  return (
    <Switch>
      <Redirect to='/auth/login' />
    </Switch>
  )
}
