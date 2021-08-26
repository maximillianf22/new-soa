/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect} from 'react'
// import {Redirect, Route, Switch} from 'react-router-dom'
// import {Registration} from './components/Registration'
// import {ForgotPassword} from './components/ForgotPassword'
// import {Login} from './components/Login'
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


    <div className="container-fluid container-full-height px-3">
      <div className="row h-100">
  
        <div 
          className="col-4 bg-dark h-100 px-10"
          style={{
            backgroundImage: `url(${toAbsoluteUrl('/media/soa/login/addimg.jpg')})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
          }}
        >

          <div className="d-flex flex-column mb-3 justify-content-between" style={{height: "100vh"}}>
            <div className="p-2">
              <img className="img-fluid mt-5" src={`${toAbsoluteUrl('/media/soa/login/addiuva-logo.svg')}`} alt="..." />
            </div>

            <div>
              <p className="text-white text-center display-4 fw-bolder">
                Ayuda sin Fronteras
              </p>
            </div>

            <div className="d-flex justify-content-between text-white mb-2 p-3">
              <p className="">&copy; 2022 SOA</p>
              
              <ul className="nav">
                <li className="nav-item">
                  <a className="p-1 text-white" href="#">Privacidad</a>
                </li>
                <li className="nav-item">
                  <a className="p-1 text-white" href="#">Legal</a>
                </li>
                <li className="nav-item">
                  <a className="p-1 text-white" href="#">Contacto</a>
                </li>
              </ul>
              
            </div>
          </div>

        </div>


        <div className="col-8 d-flex align-items-center">
          
          {/* <div className="d-flex justify-content-center"> */}
          <div className="w-50 m-auto">
            <div className="text-center mb-10 p-5">
              <p className="fs-3x fw-bolder mb-0">Bienvenido al SOA</p>
              <span className="text-muted fw-bold">Ingrese su usuario y contraseña</span>
            </div>
            <form className="w-75 m-auto">
              <div className="form-text bg-light-danger rounded w-100 p-4 mb-5 text-dark">El <b>usuario</b> o <b>contraseña</b> está incorrecto por favor verifique e intente de nuevo.</div>
              <div className="input-group input-group-lg mb-3 mt-10">
                <input type="email" className="form-control form-control-solid h-60px" id="exampleInputEmail1" placeholder="Usuario" />
              </div>
              <div className="text-end text-dark mt-5">
                <a href="!#" className="text-dark">¿Olvidó su contraseña?</a>
              </div>
              <div className="input-group input-group-lg mb-3">
                <input aria-describedby="inputGroup-sizing-lg" type="password" className="form-control form-control-solid h-60px" id="exampleInputPassword1" placeholder="Contraseña" />
                <span className="input-group-text border-0" id="inputGroup-sizing-lg"><i className="fas fa-eye fa-lg text-dark border-none"></i></span>
              </div>

              <div className="d-grid mt-7">
                <button type="submit" className="btn btn-lg btn-dark h-50px">Submit</button>
              </div>
            </form>
          </div>
          
        </div>


      </div>
    </div>















    // <div
    //   className='d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed'
    //   style={{
    //     backgroundImage: `url(${toAbsoluteUrl('/media/illustrations/progress-hd.png')})`,
    //   }}
    // >
    //   {/* begin::Content */}
    //   <div className='d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20'>
    //     {/* begin::Logo */}
    //     <a href='#' className='mb-12'>
    //       <img alt='Logo' src={toAbsoluteUrl('/media/logos/logo-2-dark.svg')} className='h-45px' />
    //     </a>
    //     {/* end::Logo */}
    //     {/* begin::Wrapper */}
    //     <div className='w-lg-500px bg-white rounded shadow-sm p-10 p-lg-15 mx-auto'>
    //       <Switch>
    //         <Route path='/auth/login' component={Login} />
    //         <Route path='/auth/registration' component={Registration} />
    //         <Route path='/auth/forgot-password' component={ForgotPassword} />
    //         <Redirect from='/auth' exact={true} to='/auth/login' />
    //         <Redirect to='/auth/login' />
    //       </Switch>
    //     </div>
    //     {/* end::Wrapper */}
    //   </div>
    //   {/* end::Content */}
    //   {/* begin::Footer */}
    //   <div className='d-flex flex-center flex-column-auto p-10'>
    //     <div className='d-flex align-items-center fw-bold fs-6'>
    //       <a href='#' className='text-muted text-hover-primary px-2'>
    //         About
    //       </a>

    //       <a href='#' className='text-muted text-hover-primary px-2'>
    //         Contact
    //       </a>

    //       <a href='#' className='text-muted text-hover-primary px-2'>
    //         Contact Us
    //       </a>
    //     </div>
    //   </div>
    //   {/* end::Footer */}
    // </div>
  )
}
