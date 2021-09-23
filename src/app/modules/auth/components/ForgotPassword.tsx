import React, {useState} from 'react'
import * as Yup from 'yup'
import clsx from 'clsx'
import {Link} from 'react-router-dom'
import {useFormik} from 'formik'
import {forgotPassword} from '../../../api/AuthCRUD'

const initialValues = {
  email: '',
}

const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email('Formato de email erróneo')
    .min(3, 'Mínimo 3 carácteres')
    .max(50, 'Máximo 50 carácteres')
    .required('El Email es requerido'),
})

export function ForgotPassword() {
  const [loading, setLoading] = useState(false)
  const [hasErrors, setHasErrors] = useState<boolean | undefined>(undefined)
  const [alertMessage, setAlertMessage] = useState('')
  const formik = useFormik({
    initialValues,
    validationSchema: forgotPasswordSchema,
    onSubmit: (values) => {
      setLoading(true)
      forgotPassword(values.email)
        .then(response => {
          setAlertMessage(response.data.success)
          setHasErrors(false)
          setLoading(false)
        })
        .catch(error => {
          setAlertMessage(error.response.data.email)
          setHasErrors(true)
          setLoading(false)
        })
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
              <p className='fs-2x fw-bolder m4-2 lh-1'>Recuperación de contraseña</p>
              {/* end::Title */}

              {/* begin::Link */}
              <span className='text-muted fw-bold'>
                Ingrese su correo para recuperar su contraseña.
              </span>
              {/* end::Link */}
            </div>

            {/* begin::Title */}
            {hasErrors === true && (
              <div className='mb-lg-8 alert alert-danger'>
                <div className='alert-text font-weight-bold'>
                  { alertMessage }
                </div>
              </div>
            )}

            {hasErrors === false && (
              <div className='mb-8 bg-light-info p-8 rounded'>
                <div className='text-info'>{ alertMessage }</div>
              </div>
            )}
            {/* end::Title */}

            {/* begin::Form group */}
            <div className='input-group input-group-lg'>
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
            </div>
            {formik.touched.email && formik.errors.email && (
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>
                  <span role='alert'>{formik.errors.email}</span>
                </div>
              </div>
            )}
            {/* end::Form group */}

            {/* begin::Form group */}
            <div className='row mt-8'>
              <div className='col-lg-8 col-md-12 d-grid gap-2'>
                <button
                  type='submit'
                  id='kt_password_reset_submit'
                  className='btn btn-lg btn-dark h-45px px-0'
                  disabled={loading || !formik.isValid}
                >
                  {!loading && <span className='indicator-label'>Recuperar contraseña</span>}
                  {loading && (
                    <span className='indicator-progress' style={{display: 'block'}}>
                      Por favor espere...
                      <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                    </span>
                  )}
                </button>
              </div>
              <div className='col-lg-4 col-md-12 d-grid gap-2'>
                <Link to='/auth/login' className='btn btn-lg btn-light-danger fw-bolder px-0'>
                    Regresar
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
