import { Form, Formik, FormikProps } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../../setup'
import { accountTypes } from '../../../redux/types/accountTypes'
import { InputCustom } from '../../global/components/inputs'
import { createAccountsSchemas, initialValues } from './Helpers'

// const optionsClients = [
//     {
//       cltId: 1,
//       cltName: 'addiuva',
//     },
//     {
//       cltId: 2,
//       cltName: 'ikatech',
//     },
//     {
//       cltId: 3,
//       cltName: 'El Roble',
//     },
//   ]

export const AccountsForm = () => {

  const {loading, editing: isEditing, viewing: isViewing}: any = useSelector<RootState>(({ui}) => ui)
  const selectedAccount: any = useSelector<RootState>(({accounts}) => accounts.selectedAccount)

  const dispatch = useDispatch()  

  return (
    <>
      <Formik
        initialValues={ (selectedAccount === {} || selectedAccount === undefined || (!isEditing && !isViewing)) ? initialValues : selectedAccount}
        enableReinitialize={true}
        validationSchema={createAccountsSchemas}
        
        onSubmit={(values) => {
          dispatch({
            type: isEditing ? accountTypes.update : accountTypes.create,
            payload: values
          })
        }}
      >
        {(props: FormikProps<any>) => (
          <Form>
            <div className='card'>
              <div className='card-body'>
                <div className='row'>
                  <div className='col-md-4 px-5 fv-row my-3'>
                    <InputCustom
                      type='text'
                      name='acName'
                      label='Nombre'
                      required
                      disabled={isViewing}
                    />
                  </div>
                  <div className='col-md-4 px-5 fv-row my-3'>
                    <InputCustom
                      type='text'
                      name='acPilotNumber'
                      label='Número de piloto'
                      required
                      disabled={isViewing}
                    />
                  </div>
                  <div className='col-md-4 px-5 fv-row my-3'>
                    <InputCustom
                      type='text'
                      name='acPilotProviderNumber'
                      label='Número de piloto proveedor'
                      disabled={isViewing}
                    />
                  </div>
                  <div className='col-md-4 px-5 fv-row my-3 text-center'>
                    <div className='my-auto h-100 text-center mt-4'>
                      <label></label>
                      <div className='form-check form-switch form-check-custom form-check-solid'>
                        <InputCustom
                          className='form-check-input h-30px w-50px'
                          type='checkbox'
                          name='acStatus'
                          id='flexCheckChecked'
                          disabled={isViewing}
                        />
                        <label className='form-check-label ms-5'>¿Activo?</label>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-4 px-5 fv-row text-end'>
                    <label></label>
                    <div className='form-check form-check-custom form-check-solid my-auto h-75'>
                      <InputCustom
                        className='form-check-input h-30px w-30px'
                        type='checkbox'
                        name='acHasBeneficiaries'
                        id='flexCheckChecked'
                        disabled={isViewing}
                      />
                      <label className='form-check-label ms-5'>Beneficiarios</label>
                    </div>
                  </div>
                  <div className='col-md-4 px-5 fv-row text-end'>
                    <label></label>
                    <div className='form-check form-check-custom form-check-solid my-auto h-75'>
                      <InputCustom
                        className='form-check-input h-30px w-30px'
                        type='checkbox'
                        name='acIsVip'
                        id='flexCheckChecked'
                        disabled={isViewing}
                      />
                      <label className='form-check-label ms-5'>Vip</label>
                    </div>
                  </div>
                </div>
                <div className='px-5 pt-5 fv-row text-end'>
                  {!isViewing 
                  ?
                    <button 
                      type='submit'
                      className='btn btn-primary'
                      data-bs-dismiss='modal'
                      disabled={!props.dirty || !props.isValid}
                    >
                      {!loading && <span className='indicator-label'>{isEditing? 'Actualizar': 'Guardar'}</span>}
                        {loading && (
                          <span className='indicator-progress' style={{display: 'block'}}>
                            {isEditing? 'Actualizar': 'Guardar'}
                            <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                          </span>
                        )}
                      </button>
                    :
                    <a href='/accounts/detail'>
                      <button type='button' className='btn btn-info mx-8'>
                        Ver planes
                      </button>
                    </a>
                    }
                  <button type='button' className='btn btn-primary mx-8' data-bs-dismiss='modal'>
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  )
}
