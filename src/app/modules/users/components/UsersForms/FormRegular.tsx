import {Formik, Form, FormikProps, Field} from 'formik'
import {useDispatch, useSelector} from 'react-redux'
import {RootState} from '../../../../../setup'
import {InputCustom} from '../../../global/components/inputs'
import {InputSelect} from '../../../global/components/inputs/InputSelect'
import {InputDueDate} from '../../../global/components/inputs/InputDueDate'
import {InputProfile} from '../UserPermits/InputProfile'

// const optionsPlatforms = [
//   {value: 'addiuva', label: 'Addiuva'},
//   {value: 'ikatech', label: 'Ikatech'},
//   {value: 'elRoble', label: 'El Roble'},
// ]

const optionsClients = [
  {
    cltId: 1,
    cltName: 'addiuva',
  },
  {
    cltId: 2,
    cltName: 'ikatech',
  },
  {
    cltId: 3,
    cltName: 'El Roble',
  },
]

export const FormRegular = () => {
  const SelectedUser: any = useSelector<RootState>(({users}) => users.SelectedUser)
  const dispatch = useDispatch()
  const handleClose = () => {
    // dispatch(userActions.ClearSelectedUser());
  }

  return (
    <>
      <Formik
        initialValues={{...SelectedUser}}
        enableReinitialize={true}
        onSubmit={(values) => {
          console.log('en submit', values)
          // if (values.id.length > 0) {
          //   dispatch(actions.updateUser(values))
          // } else {
          //  dispatch(actions.createUser(values))
          // }
        }}
      >
        {(props: FormikProps<any>) => (
          <Form>
            <div className='card'>
              <div className='card-body'>
                <div className='row'>
                  <div className='col-md-4 px-5 fv-row my-3'>
                    <InputCustom type='text' name='first_name' label='Nombre' required />
                  </div>
                  {SelectedUser?.toEdit === true && (
                    <div className='col-md-4 px-5 fv-row my-3'>
                      <InputCustom type='text' name='id' label='id' />
                    </div>
                  )}
                  <div className='col-md-4 px-5 fv-row my-3'>
                    <InputCustom type='text' name='last_name' label='Apellido' required />
                  </div>
                  <div className='col-md-4 px-5 fv-row my-3'>
                    <InputCustom type='email' name='email' label='Correo' required />
                  </div>
                  <div className='col-md-4 px-5 fv-row my-3'>
                    <InputCustom type='text' name='username' label='Nombre de usuario' required />
                  </div>

                  {SelectedUser.id < 1 && (
                    <>
                      <div className='col-md-4 px-5 fv-row my-3'>
                        <InputCustom type='password' name='password' label='Contraseña' required />
                      </div>
                      <div className='col-md-4 px-5 fv-row my-3'>
                        <InputCustom
                          type='password'
                          name='confirmPassword'
                          label='Confirmar contraseña'
                          required
                        />
                      </div>
                    </>
                  )}
                  <div className='col-md-4 px-5 fv-row my-3'>
                    {SelectedUser ? (
                      <InputDueDate
                        init_name="init_date_validity"
                        end_name="end_date_validity"
                      />
                    ) : (
                      <InputDueDate />
                    )}
                  </div>
                  <div className='col-md-4 px-5 fv-row my-3'>
                    <label className='col-form-label required fw-bold fs-6 py-2'>Platforma</label>
                    <Field name='clients' component={InputSelect} options={optionsClients} />
                  </div>
                  <div className='col-md-4 px-5 fv-row my-3'>
                    <InputProfile />
                  </div>
                  <div className='col-md-3 px-5 fv-row text-end'>
                    <label></label>
                    <div className='form-check form-check-custom form-check-solid my-auto h-75'>
                      <InputCustom
                        className='form-check-input h-25px'
                        type='checkbox'
                        name='password_change'
                        checked={SelectedUser?.password_change}
                        id='flexCheckChecked'
                      />
                      <label className='form-check-label'>¿Permite cambio de contraseña?</label>
                    </div>
                  </div>
                  <div className='col-md-3 px-5 fv-row'>
                    <label></label>
                    <div className='form-check form-switch form-check-custom form-check-solid my-auto h-75'>
                      <InputCustom
                        className='form-check-input h-25px'
                        type='checkbox'
                        name='is_active'
                        id='flexSwitchChecked'
                      />
                      <label className='form-check-label'>¿Activo?</label>
                    </div>
                  </div>
                </div>
                <div className='px-5 pt-5 fv-row text-end'>
                  {SelectedUser?.toEdit === false ? (
                    <button
                      type='button'
                      className='btn btn-secondary'
                      data-bs-dismiss='modal'
                      onClick={handleClose}
                    >
                      Cerrar
                    </button>
                  ) : (
                    <>
                      <button
                        type='button'
                        className='btn btn-secondary'
                        data-bs-dismiss='modal'
                        onClick={handleClose}
                      >
                        Cerrar
                      </button>
                      <button
                        type='submit'
                        className='btn btn-primary ms-4'
                        data-bs-dismiss='modal'
                        onClick={handleClose}
                      >
                        Guardar cambios
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  )
}