/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import * as Yup from 'yup'
import clsx from 'clsx'
import {Link} from 'react-router-dom'
import {useFormik} from 'formik'
import * as auth from '../../../redux/reducers/AuthRedux'
import { RootState } from '../../../../setup/redux/RootReducer';
import { authTypes } from '../../../redux/types/types';

const loginSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Mínimo 3 carácteres')
    .max(50, 'Máximo 50 carácteres')
    .required('Usuario es requerido'),
  password: Yup.string()
    .min(3, 'Mínimo 3 carácteres')
    .max(16, 'Máximo 16 carácteres')
    .required('La contraseña es requerida'),
})

const initialValues = {
  username: '',
  password: '',
}

export function Login() {
  const [showPassword, setShowPassword] =useState(false)
  const dispatch = useDispatch()
  const {loading, error}: any = useSelector<RootState>(({auth}) => auth)
  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: (values, {setStatus, setSubmitting}) => {
      dispatch({type: authTypes.asyncLogin, payload: values})
    },
  })

  return (
    <>
      <div
        className='col-12  col-lg-8 col-xl-8 d-flex align-items-center bg-white rounded'
        style={{marginLeft: '-4px'}}
      >
        <div className='w-xl-50 w-lg-75 m-auto'>
          <div className='text-center mb-5 p-5'>
            <p className='fs-3x fw-bolder mb-0'>Bienvenido al SOA</p>
            <span className='text-muted fw-bold'>Ingrese su usuario y contraseña</span>
          </div>
          <form className='w-75 m-auto' onSubmit={formik.handleSubmit} id='kt_login_signin_form'>
            { error && 
              (<div className='form-text bg-light-danger rounded w-100 p-4 mb-5 text-dark'>
                {error}
              </div>) 
            }
            
            <div className='input-group input-group-lg mb-3 mt-5'>
              <input
                placeholder='Usuario'
                {...formik.getFieldProps('username')}
                className={clsx(
                  'form-control form-control-solid h-50px',
                  {'is-invalid': formik.touched.username && formik.errors.username},
                  {
                    'is-valid': formik.touched.username && !formik.errors.username,
                  }
                )}
                type='text'
                name='username'
                id='exampleInputEmail1'
              />
            </div>
            {formik.touched.username && formik.errors.username && (
              <div className='fv-plugins-message-container'>
                <span role='alert'>{formik.errors.username}</span>
              </div>
            )}
            <div className='text-end text-dark mt-5'>
              <Link to='/auth/forgot-password' className='text-dark' style={{marginLeft: '5px'}}>
                ¿Olvidó su contraseña?
              </Link>
            </div>

            <div className='input-group input-group-lg mb-3'>
              <input
                type={showPassword ? "text" : "password"}
                aria-describedby='inputGroup-sizing-lg'
                {...formik.getFieldProps('password')}
                className={clsx(
                  'form-control form-control-solid h-50px',
                  {
                    'is-invalid': formik.touched.password && formik.errors.password,
                  },
                  {
                    'is-valid': formik.touched.password && !formik.errors.password,
                  }
                )}
                id='inputPassword1'
                placeholder='Contraseña'
              />
              <span onClick= {() => {setShowPassword(!showPassword)}} className='input-group-text border-0' id='inputGroup-sizing-lg'>
                <i className={showPassword ? "fas fa-eye-slash fa-lg text-dark border-none cursor-pointer"
                  : "fas fa-eye fa-lg text-dark border-none cursor-pointer"}></i>
              </span>
            </div>
            {formik.touched.password && formik.errors.password && (
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>
                  <span role='alert'>{formik.errors.password}</span>
                </div>
              </div>
            )}
            <div className='d-grid mt-7'>
              {formik.values.password || formik.values.username 
                ? 
                  (<button
                    type='submit'
                    id='kt_sign_in_submit'
                    className='btn btn-lg btn-dark h-45px'
                    disabled={loading || !formik.isValid}
                  >
                    {!loading && <span className='indicator-label'>Iniciar sesión</span>}
                    {loading && (
                      <span className='indicator-progress' style={{display: 'block'}}>
                        Por favor espere...
                        <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                      </span>
                    )}
                  </button>)
                :
                  (<button
                    type='submit'
                    id='kt_sign_in_submit'
                    className='btn btn-lg btn-dark h-45px'
                    disabled={true}
                  >
                    {!loading && <span className='indicator-label'>Iniciar sesión</span>}
                    {loading && (
                      <span className='indicator-progress' style={{display: 'block'}}>
                        Por favor espere...
                        <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                      </span>
                    )}
                  </button>)
              }
            </div>
          </form>
        </div>
      </div>
    </>

  )
}