/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {Registration} from './components/Registration'
import {ForgotPassword} from './components/ForgotPassword'
import {Login} from './components/Login'
import {KTSVG, toAbsoluteUrl} from '../../../_metronic/helpers'

export function AuthPage() {
  useEffect(() => {
    document.body.classList.add('bg-white')
    return () => {
      document.body.classList.remove('bg-white')
    }
  }, [])

  const toolbarButtonIconSizeClass = 'svg-icon-1'

  return (
    <>
      <div className='container-fluid px-3' style={{height: '105.2vh'}}>
        <div className='row h-100'>
          <div
            className='col-4 d-none d-lg-block d-xl-block bg-dark h-100 px-10'
            style={{
              backgroundImage: `url(${toAbsoluteUrl('/media/soa/login/addimg.jpg')})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          >
            <div
              className='d-flex flex-column mb-3 justify-content-between'
              style={{height: '100vh'}}
            >
              <div className='p-2'>
                <img
                  className='img-fluid mt-5'
                  style={{maxHeight: '55px'}}
                  src={`${toAbsoluteUrl('/media/soa/login/addiuva-logo.svg')}`}
                  alt='...'
                />
              </div>

              <div>
                <p className='text-white text-center display-6 fw-bolder'>Ayuda sin Fronteras</p>
              </div>

              <div className='d-flex justify-content-between text-white mb-2'>
                <p className='mb-0'>&copy; 2022 SOA</p>

                <ul className='nav'>
                  <li className='nav-item'>
                    <a className='p-1 text-white' href='#'>
                      Privacidad
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='p-1 text-white' href='#'>
                      Legal
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='p-1 text-white' href='#'>
                      Contacto
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <Switch>
            <Route path='/auth/login' component={Login} />
            <Route path='/auth/registration' component={Registration} />
            <Route path='/auth/forgot-password' component={ForgotPassword} />
            <Redirect from='/auth' exact={true} to='/auth/login' />
            <Redirect to='/auth/login' />
          </Switch>
        </div>
      </div>
    </>
  )
}
