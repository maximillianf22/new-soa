/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {Registration} from './components/Registration'
import {ForgotPassword} from './components/ForgotPassword'
import {Login} from './components/Login'
import {KTSVG, toAbsoluteUrl} from '../../../_metronic/helpers'
import './authPage.css'



export function AuthPage() {
  useEffect(() => { 
    document.body.classList.add('bg-white')
    return () => {
      document.body.classList.remove('bg-white')
    }
  }, [])

  const toolbarButtonIconSizeClass = 'svg-icon-1'

  return (
    <div>
      <Switch>
        <Route path='/auth/login' component={Login} />
        <Route path='/auth/registration' component={Registration} />
        <Route path='/auth/forgot-password' component={ForgotPassword} />
        <Redirect from='/auth' exact={true} to='/auth/login' />
        <Redirect to='/auth/login' />
      </Switch>
    </div>
  )
}
