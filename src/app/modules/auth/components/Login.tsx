/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import * as Yup from 'yup'
import clsx from 'clsx'
import {Link} from 'react-router-dom'
import {useFormik} from 'formik'
import * as auth from '../redux/AuthRedux'
import {login} from '../redux/AuthCRUD'
import {toAbsoluteUrl} from '../../../../_metronic/helpers'

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Formato de correo incorrecto')
    .min(3, 'Mínimo 3 carácteres')
    .max(50, 'Máximo 50 carácteres')
    .required('Usuario es requerido'),
  password: Yup.string()
    .min(3, 'Mínimo 3 carácteres')
    .max(16, 'Máximo 16 carácteres')
    .required('La contraseña es requerida'),
});

const initialValues = {
  email: 'admin@demo.com',
  password: 'demo',
}

/*
  Formik+YUP+Typescript:
  https://jaredpalmer.com/formik/docs/tutorial#getfieldprops
  https://medium.com/@maurice.de.beijer/yup-validation-and-typescript-and-formik-6c342578a20e
*/

export function Login() {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: (values, {setStatus, setSubmitting}) => {
      setLoading(true)
        login(values.email, values.password)
          .then(({data: {accessToken}}) => {
            setLoading(false)
            dispatch(auth.actions.login(accessToken))
          })
          .catch(() => {
            setLoading(false)
            setSubmitting(false)
            setStatus('The login detail is incorrect')
          })
    },
  })

  return (

    <>
      <div className="container-fluid container-full-height px-3">
        <div className="row h-100">
  
          <div 
          className="col-4 d-none d-lg-block d-xl-block bg-dark h-100 px-10"
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


        <div className="col-12  col-lg-8 col-xl-8 d-flex align-items-center">
          
          {/* <div className="d-flex justify-content-center"> */}
          <div className="px-7 m-auto">
            <div className="text-center mb-10 p-5">
              <p className="fs-3tx fw-bolder mb-0">Bienvenido al SOA</p>
              <span className="text-muted fw-bold">Ingrese su usuario y contraseña</span>
            </div>



            <form 
              className="w-100 w-lg-100 w-xl-75 m-auto"
              onSubmit={formik.handleSubmit}
              id='kt_login_signin_form'
            >
              <div className="form-text bg-light-danger rounded w-100 p-4 mb-5 text-dark">El <b>usuario</b> o <b>contraseña</b> está incorrecto por favor verifique e intente de nuevo.</div>
              <div className="input-group input-group-lg mb-3 mt-10">
                <input 
                  placeholder="Usuario" 
                  {...formik.getFieldProps('email')}
                  className={clsx(
                    'form-control form-control-solid h-60px',
                    {'is-invalid': formik.touched.email && formik.errors.email},
                    {
                      'is-valid': formik.touched.email && !formik.errors.email,
                    }
                    )} 
                  type="email" 
                  name="email"
                  id="exampleInputEmail1"
                /> 
              </div>
                {formik.touched.email && formik.errors.email && (
                  <div className='fv-plugins-message-container'>
                    <span role='alert'>{formik.errors.email}</span>
                  </div>
                )}
              <div className="text-end text-dark mt-5">
                <a href="!#" className="text-dark">¿Olvidó su contraseña?</a>
              </div>



              <div className="input-group input-group-lg mb-3">
                <input 
                  type="password" 
                  aria-describedby="inputGroup-sizing-lg" 
                  {...formik.getFieldProps('password')}
                  className={clsx(
                    'form-control form-control-solid h-60px',
                    {
                      'is-invalid': formik.touched.password && formik.errors.password,
                    },
                    {
                      'is-valid': formik.touched.password && !formik.errors.password,
                    }
                  )}
                  id="exampleInputPassword1" 
                  placeholder="Contraseña"
                />
                <span className="input-group-text border-0" id="inputGroup-sizing-lg"><i className="fas fa-eye fa-lg text-dark border-none"></i></span>
              </div>
                {formik.touched.password && formik.errors.password && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>
                      <span role='alert'>{formik.errors.password}</span>
                    </div>
                  </div>
                )}



              <div className="d-grid mt-7">
                <button 
                  type="submit" 
                  id='kt_sign_in_submit'
                  className="btn btn-lg btn-dark h-50px"
                  disabled={formik.isSubmitting || !formik.isValid}
                >
                  {!loading && <span className='indicator-label'>Iniciar sesión</span>}
                  {loading && (
                    <span className='indicator-progress' style={{display: 'block'}}>
                      Por favor espere...
                      <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                    </span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
    
    // <form
    //   className='form w-100'
    //   onSubmit={formik.handleSubmit}
    //   noValidate
    //   id='kt_login_signin_form'
    // >
    //   {/* begin::Heading */}
    //   <div className='text-center mb-10'>
    //     <h1 className='text-dark mb-3'>Sign In to Metronic</h1>
    //     <div className='text-gray-400 fw-bold fs-4'>
    //       New Here?{' '}
    //       <Link to='/auth/registration' className='link-primary fw-bolder'>
    //         Create an Account
    //       </Link>
    //     </div>
    //   </div>
    //   {/* begin::Heading */}

    //   {formik.status ? (
    //     <div className='mb-lg-15 alert alert-danger'>
    //       <div className='alert-text font-weight-bold'>{formik.status}</div>
    //     </div>
    //   ) : (
    //     <div className='mb-10 bg-light-info p-8 rounded'>
    //       <div className='text-info'>
    //         Use account <strong>admin@demo.com</strong> and password <strong>demo</strong> to
    //         continue.
    //       </div>
    //     </div>
    //   )}

    //   {/* begin::Form group */}
    //   <div className='fv-row mb-10'>
    //     <label className='form-label fs-6 fw-bolder text-dark'>Email</label>
    //     <input
    //       placeholder='Email'
    //       {...formik.getFieldProps('email')}
    //       className={clsx(
    //         'form-control form-control-lg form-control-solid',
    //         {'is-invalid': formik.touched.email && formik.errors.email},
    //         {
    //           'is-valid': formik.touched.email && !formik.errors.email,
    //         }
    //       )}
    //       type='email'
    //       name='email'
    //       autoComplete='off'
    //     />
    //     {formik.touched.email && formik.errors.email && (
    //       <div className='fv-plugins-message-container'>
    //         <span role='alert'>{formik.errors.email}</span>
    //       </div>
    //     )}
    //   </div>
    //   {/* end::Form group */}

    //   {/* begin::Form group */}
    //   <div className='fv-row mb-10'>
    //     <div className='d-flex justify-content-between mt-n5'>
    //       <div className='d-flex flex-stack mb-2'>
    //         {/* begin::Label */}
    //         <label className='form-label fw-bolder text-dark fs-6 mb-0'>Password</label>
    //         {/* end::Label */}
    //         {/* begin::Link */}
    //         <Link
    //           to='/auth/forgot-password'
    //           className='link-primary fs-6 fw-bolder'
    //           style={{marginLeft: '5px'}}
    //         >
    //           Forgot Password ?
    //         </Link>
    //         {/* end::Link */}
    //       </div>
    //     </div>
    //     <input
    //       type='password'
    //       autoComplete='off'
    //       {...formik.getFieldProps('password')}
    //       className={clsx(
    //         'form-control form-control-lg form-control-solid',
    //         {
    //           'is-invalid': formik.touched.password && formik.errors.password,
    //         },
    //         {
    //           'is-valid': formik.touched.password && !formik.errors.password,
    //         }
    //       )}
    //     />
    //     {formik.touched.password && formik.errors.password && (
    //       <div className='fv-plugins-message-container'>
    //         <div className='fv-help-block'>
    //           <span role='alert'>{formik.errors.password}</span>
    //         </div>
    //       </div>
    //     )}
    //   </div>
    //   {/* end::Form group */}

    //   {/* begin::Action */}
    //   <div className='text-center'>
    //     <button
    //       type='submit'
    //       id='kt_sign_in_submit'
    //       className='btn btn-lg btn-primary w-100 mb-5'
    //       disabled={formik.isSubmitting || !formik.isValid}
    //     >
    //       {!loading && <span className='indicator-label'>Continue</span>}
    //       {loading && (
    //         <span className='indicator-progress' style={{display: 'block'}}>
    //           Please wait...
    //           <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
    //         </span>
    //       )}
    //     </button>

    //     {/* begin::Separator */}
    //     <div className='text-center text-muted text-uppercase fw-bolder mb-5'>or</div>
    //     {/* end::Separator */}

    //     {/* begin::Google link */}
    //     <a href='#' className='btn btn-flex flex-center btn-light btn-lg w-100 mb-5'>
    //       <img
    //         alt='Logo'
    //         src={toAbsoluteUrl('/media/svg/brand-logos/google-icon.svg')}
    //         className='h-20px me-3'
    //       />
    //       Continue with Google
    //     </a>
    //     {/* end::Google link */}

    //     {/* begin::Google link */}
    //     <a href='#' className='btn btn-flex flex-center btn-light btn-lg w-100 mb-5'>
    //       <img
    //         alt='Logo'
    //         src={toAbsoluteUrl('/media/svg/brand-logos/facebook-4.svg')}
    //         className='h-20px me-3'
    //       />
    //       Continue with Facebook
    //     </a>
    //     {/* end::Google link */}

    //     {/* begin::Google link */}
    //     <a href='#' className='btn btn-flex flex-center btn-light btn-lg w-100'>
    //       <img
    //         alt='Logo'
    //         src={toAbsoluteUrl('/media/svg/brand-logos/apple-black.svg')}
    //         className='h-20px me-3'
    //       />
    //       Continue with Apple
    //     </a>
    //     {/* end::Google link */}
    //   </div>
    //   {/* end::Action */}
    // </form>
  )
}
