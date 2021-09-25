import React from 'react'
import {Field, Form, Formik, FormikProps} from 'formik'
import {InputCustom, InputDueDate, InputSelect} from '../../global/components/inputs'
import {initialValues} from './Helpers'

const optionsShared = [
  {value: 'id1', label: 'Al concluir'},
]

const optionsAccounts = [
  {value: 'id1', label: 'Claro'},
  {value: 'id2', label: 'Movistar'},
  {value: 'id3', label: 'WOM'},
]

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

export const PlansForm = () => {
  return (
    <>
      <Formik
        initialValues={initialValues}
        enableReinitialize={true}
        onSubmit={(values) => {
          console.log('en submit', values)
        }}
      >
        {(props: FormikProps<any>) => (
          <Form>
            <div className='row'>
              <div className='col-md-9'>
                <div className='card' style={{minHeight: '60vh'}}>
                  <div className='card-body'>
                    <div className='row'>
                      <div className='col-md-6 px-5 fv-row my-3'>
                        <InputCustom type='text' name='description' label='Descripcion' required />
                      </div>
                      <div className='col-md-6 px-5 fv-row my-3'>
                        <InputCustom type='number' name='url' label='Numero de piloto' />
                      </div>
                      <div className='col-md-6 px-5 fv-row my-3'>
                        <InputDueDate />
                      </div>
                      <div className='col-md-6 px-5 fv-row my-3'>
                        <InputCustom type='file' name='Contrato' label='Contrato' />
                      </div>
                      <div className='col-md-6 px-5 fv-row my-3'>
                        <label className='col-form-label required fw-bold fs-6  py-2'>Cuentas</label>
                        <Field name='clients' component={InputSelect} options={optionsAccounts} />
                      </div>

                      {/* Este input se muestra cuando se checkea envio automatico de notificacion de vencimiento */}
                      {/* <div className='col-md-6 px-5 fv-row mt-7'>
                        <InputCustom type='number' name='daystoDue' label='Dias para envio de notificacion' />
                      </div> */}

                      {/* Estos inputs se muestra cuando se checkea poliza compartida */}
                      {/* <div className='col-md-6 px-5 fv-row mt-7'>
                        <InputCustom type='text' name='daystoDue' label='Cuantos eventos compartidos' />
                      </div>
                      <div className='col-md-6 px-5 fv-row my-3'>
                        <label className='col-form-label required fw-bold fs-6  py-2'>Metodo de consumo</label>
                        <Field name='clients' component={InputSelect} options={optionsShared} />
                      </div> */}

                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-3'>
                <div className='card' style={{minHeight: '60vh'}}>
                  <div className='card-body'>
                    <div className='col-md-12 px-5 fv-row my-4 text-start'>
                      <label></label>
                      <div className='form-check form-check-custom form-check-solid my-auto h-75'>
                        <InputCustom
                          className='form-check-input h-30px w-30px'
                          type='checkbox'
                          name='password_change'
                          id='flexCheckChecked'
                        />
                        <label className='form-check-label ms-5'>
                          Envio automatico de notificacion de vencimiento
                        </label>
                      </div>
                    </div>
                    <div className='col-md-12 px-5 fv-row my-4 text-start'>
                      <label></label>
                      <div className='form-check form-check-custom form-check-solid my-auto h-75'>
                        <InputCustom
                          className='form-check-input h-30px w-30px'
                          type='checkbox'
                          name='password_change'
                          id='flexCheckChecked'
                        />
                        <label className='form-check-label ms-5'>Poliza Compartida</label>
                      </div>
                    </div>
                    <div className='col-md-12 px-5 fv-row my-4 text-start'>
                      <label></label>
                      <div className='form-check form-check-custom form-check-solid my-auto h-75'>
                        <InputCustom
                          className='form-check-input h-30px w-30px'
                          type='checkbox'
                          name='password_change'
                          id='flexCheckChecked'
                        />
                        <label className='form-check-label ms-5'>VIP</label>
                      </div>
                    </div>
                    <div className='col-md-12 px-5 fv-row my-4 text-start'>
                      <div className='my-auto h-100 text-center mt-4'>
                        <label></label>
                        <div className='form-check form-switch form-check-custom form-check-solid'>
                          <InputCustom
                            className='form-check-input h-30px w-50px'
                            type='checkbox'
                            name='is_active'
                            checked
                            id='flexSwitchChecked'
                          />
                          <label className='form-check-label ms-5'>¿Activo?</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='px-5 pt-5 fv-row text-end'>
                <button type='submit' className='btn btn-primary px-20' data-bs-dismiss='modal'>
                  Guardar
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  )
}
