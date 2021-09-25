import { Form, Formik, FormikProps } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { RootState } from '../../../../setup'
import { accountTypes } from '../../../redux/types/accountTypes'
import { InputCustom } from '../../global/components/inputs'
import { initialValues } from './Helpers'

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

export const AccountsForm = () => {
  const history = useHistory()

  const loading: any = useSelector<RootState>(({ui}) => ui.loading)

  const dispatch = useDispatch()
  return (
    <>
      <Formik
        initialValues={initialValues}
        enableReinitialize={true}
        onSubmit={(values) => {
          dispatch({
            type: accountTypes.accountCreate,
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
                    <InputCustom type='text' name='acName' label='Nombre' required />
                  </div>
                  <div className='col-md-4 px-5 fv-row my-3'>
                    <InputCustom type='text' name='acPilotNumber' label='Número de piloto' required/>
                  </div>
                  <div className='col-md-4 px-5 fv-row my-3'>
                    <InputCustom type='text' name='acPilotProviderNumber' label='Número de piloto proveedor' />
                  </div>
                  <div className='col-md-4 px-5 fv-row my-3 text-center'>
                    <div className='my-auto h-100 text-center mt-4'>
                      <label></label>
                      <div className='form-check form-switch form-check-custom form-check-solid'>
                        <InputCustom
                          className='form-check-input h-30px w-50px'
                          type='checkbox'
                          name='acStatus'
                          checked
                          id='flexSwitchChecked'
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
                      />
                      <label className='form-check-label ms-5'>Vip</label>
                    </div>
                  </div>
                </div>
                <div className='px-5 pt-5 fv-row text-end'>
                  <button className='btn btn-primary mx-10' onClick={ () => history.push('/accounts')}>
                      Regresar
                  </button>
                  <button  type='submit' className='btn btn-primary' data-bs-dismiss='modal'>
                    {!loading && <span className='indicator-label'>Guardar</span>}
                      {loading && (
                        <span className='indicator-progress' style={{display: 'block'}}>
                          Guardar
                          <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                        </span>
                      )}
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
