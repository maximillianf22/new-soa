import React, {useState} from 'react'
import * as Yup from 'yup'
import clsx from 'clsx'
import {Link} from 'react-router-dom'
import {useFormik} from 'formik'
import {requestPassword} from '../redux/AuthCRUD'

const initialValues = {
  email: 'admin@demo.com',
}

const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email('Wrong email format')
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Email is required'),
})

export function ForgotPassword() {
  const [loading, setLoading] = useState(false)
  const [hasErrors, setHasErrors] = useState<boolean | undefined>(undefined)
  const formik = useFormik({
    initialValues,
    validationSchema: forgotPasswordSchema,
    onSubmit: (values, {setStatus, setSubmitting}) => {
      setLoading(true)
      setHasErrors(undefined)
      setTimeout(() => {
        requestPassword(values.email)
          .then(({data: {result}}) => {
            setHasErrors(false)
            setLoading(false)
          })
          .catch(() => {
            setHasErrors(true)
            setLoading(false)
            setSubmitting(false)
            setStatus('The login detail is incorrect')
          })
      }, 1000)
    },
  })

  return (
    <>
      <div
        className='col-12 col-lg-8 col-xl-8 d-flex align-items-center bg-white rounded'
        style={{marginLeft: '-4px'}}
      >
        <div className='w-xl-50 w-lg-75 m-auto'>
          <form
            className='w-75 m-auto'
            noValidate
            id='kt_login_password_reset_form'
            onSubmit={formik.handleSubmit}
          >
            <div className='text-center mb-10'>
              {/* begin::Title */}
              <p className='fs-2x fw-bolder mb-0 lh-1'>Recuperación de contraseña</p>
              {/* end::Title */}

              {/* begin::Link */}
              <span className='text-muted fw-bold'>
                Ingrese su correo para recuperar su contraseña.
              </span>
              {/* end::Link */}
            </div>

            {/* begin::Title */}
            {hasErrors === true && (
              <div className='mb-lg-15 alert alert-danger'>
                <div className='alert-text font-weight-bold'>
                  Sorry, looks like there are some errors detected, please try again.
                </div>
              </div>
            )}

            {hasErrors === false && (
              <div className='mb-10 bg-light-info p-8 rounded'>
                <div className='text-info'>Sent password reset. Please check your email</div>
              </div>
            )}
            {/* end::Title */}

            {/* begin::Form group */}
            <div className='input-group input-group-lg mb-3 mt-5'>
              <input
                type='email'
                placeholder=''
                autoComplete='off'
                {...formik.getFieldProps('email')}
                className={clsx(
                  'form-control form-control-solid h-50px',
                  {'is-invalid': formik.touched.email && formik.errors.email},
                  {
                    'is-valid': formik.touched.email && !formik.errors.email,
                  }
                )}
              />
              {formik.touched.email && formik.errors.email && (
                <div className='fv-plugins-message-container'>
                  <div className='fv-help-block'>
                    <span role='alert'>{formik.errors.email}</span>
                  </div>
                </div>
              )}
            </div>
            {/* end::Form group */}

            {/* begin::Form group */}
            <div className='row'>
            <div className='col-8 d-grid gap-2'>
              <button
                type='submit'
                id='kt_password_reset_submit'
                className='btn btn-lg btn-dark h-45px'
              >
                <span className='indicator-label'>Recuperar contraseña</span>
                {loading && (
                  <span className='indicator-progress'>
                    Por favor espere...
                    <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                  </span>
                )}
              </button>
            </div>
            <div className='col-4 d-grid gap-2'>
              <Link to='/auth/login' className='btn btn-lg btn-light-danger fw-bolder px-0'>
                  Cancelar
              </Link>{' '}
            </div>
            </div>
            {/* end::Form group */}
          </form>
        </div>
      </div>
    </>
  )
}
