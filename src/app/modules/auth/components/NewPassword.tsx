import {useState} from 'react'
import * as Yup from 'yup'
import clsx from 'clsx'
import {Link, useParams} from 'react-router-dom'
import {useFormik} from 'formik'
import {NewPasswordModel, newPassword} from '../../../api/AuthCRUD'

const initialValues: NewPasswordModel = {
  new_password1: '',
  new_password2: '',
  uid: '',
  token: ''
}

const newPasswordSchema = Yup.object().shape({
  new_password1: Yup.string()
    .min(3, 'Mínimo 3 carácteres')
    .max(16, 'Máximo 16 carácteres')
    .required('La contraseña es requerida'),

  new_password2: Yup.string()
    .min(3, 'Mínimo 3 carácteres')
    .max(16, 'Máximo 16 carácteres')
    .required('Este campo es requerido')
    .oneOf(
      [
        Yup.ref('new_password1'),
      ],
      'Las contraseñas deben de coincidir'
    ),
})

export function NewPassword() {
  const [loading, setLoading] = useState(false)
  const [hasErrors, setHasErrors] = useState<boolean | undefined>(undefined)
  const [showPassword1, setShowPassword1] = useState(false)
  const [showPassword2, setShowPassword2] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')
  const { uid, token } = useParams<{ uid: string, token: string }>();

  initialValues.uid = uid;
  initialValues.token = token;
    
  const formik = useFormik({
    initialValues,
    validationSchema: newPasswordSchema,
    onSubmit: (values) => {
      setLoading(true)
      newPassword(values)
        .then(response => {
          console.log(response)
          setAlertMessage(response.data.detail)
          setHasErrors(false)
          setLoading(false)
        })
        .catch(error => {
          console.log(error.response)
          if (error.response !== undefined) {
            if (error.response.status === 400) {
              setAlertMessage('Por favor revisar el uid y el token proporcionado.')
            } else {
              setAlertMessage('Error al cambiar la contraseña.')
            }
          }
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
              <p className='fs-2x fw-bolder m4-2 lh-1'>Nueva contraseña</p>
              {/* end::Title */}

              {/* begin::Link */}
              <span className='text-muted fw-bold'>
                Ingrse su nueva contraseña.
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
            <div className='input-group input-group-lg mb-4'>
              <input
                type={showPassword1 ? "text" : "password"}
                aria-describedby='inputGroup-sizing-lg'
                {...formik.getFieldProps('new_password1')}
                className={clsx(
                  'form-control form-control-solid h-50px',
                  {
                    'is-invalid': formik.touched.new_password1 && formik.errors.new_password1,
                  },
                  {
                    'is-valid': formik.touched.new_password1 && !formik.errors.new_password1,
                  }
                )}
                id='inputPassword1'
                placeholder='Contraseña'
              />
              <span onClick= {() => {setShowPassword1(!showPassword1)}} className='input-group-text border-0' id='inputGroup-sizing-lg'>
              <i className={showPassword1 ? "fas fa-eye-slash fa-lg text-dark border-none cursor-pointer"
                  : "fas fa-eye fa-lg text-dark border-none cursor-pointer"}></i>
              </span>
            </div>
            {formik.touched.new_password1 && formik.errors.new_password1 && (
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>
                  <span role='alert'>{formik.errors.new_password1}</span>
                </div>
              </div>
            )}
            <div className='input-group input-group-lg mb-3'>
              <input
                type={showPassword2 ? "text" : "password"}
                aria-describedby='inputGroup-sizing-lg'
                {...formik.getFieldProps('new_password2')}
                className={clsx(
                  'form-control form-control-solid h-50px',
                  {
                    'is-invalid': formik.touched.new_password2 && formik.errors.new_password2,
                  },
                  {
                    'is-valid': formik.touched.new_password2 && !formik.errors.new_password2,
                  }
                )}
                id='inputPassword2'
                placeholder='Confirmar contraseña'
              />
              <span onClick= {() => {setShowPassword2(!showPassword2)}}  className='input-group-text border-0' id='inputGroup-sizing-lg'>
              <i className={showPassword2 ? "fas fa-eye-slash fa-lg text-dark border-none cursor-pointer"
                  : "fas fa-eye fa-lg text-dark border-none cursor-pointer"}></i>
              </span>
            </div>
            {formik.touched.new_password2 && formik.errors.new_password2 && (
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>
                  <span role='alert'>{formik.errors.new_password2}</span>
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
                  {!loading && <span className='indicator-label'>Cambiar contraseña</span>}
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
