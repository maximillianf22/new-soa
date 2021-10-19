import React from 'react'
import {Field, Form, Formik, FormikProps} from 'formik'
import {initialValues} from '../Helpers'
import {InputCustom, InputSelect} from '../../../../global/components/inputs'

const optionsConditions = [
  {value: 'id1', label: 'Interno'},
  {value: 'id2', label: 'Externo'},
]

export const ModalAccounts = () => {
  return (
    <>
      <div
        className='modal fade'
        id='kt_modal_accounts'
        tabIndex={-1}
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-dialog-centered modal-lg '>
          <div className='modal-content bg-secondary'>
            <div className='modal-body p-13 card bg-secondary'>
              <div className='card-header border-0 p-0 ps-2 pe-4 mb-5'>
                <h2 className='card-title align-items-start flex-column'>
                  <span className='card-label fw-bolder fs-2 mb-1'>Registrar Cuenta</span>
                  <span className='text-muted mt-1 fw-bold fs-6'>
                    Seleccione la cuenta y la prioridad
                  </span>
                </h2>
                <div className='card-toolbar'>
                  <button
                    type='button'
                    className='btn-close'
                    data-bs-dismiss='modal'
                    aria-label='Close'
                  ></button>
                </div>
              </div>
              <div className='card'>
                <Formik
                  initialValues={initialValues}
                  enableReinitialize={true}
                  onSubmit={(values) => {
                    console.log('en submit', values)
                  }}
                >
                  {(props: FormikProps<any>) => (
                    <Form>
                      <div className='menu-item px-10 text-start py-10'>
                        <h4 className='fw-bold m-0'>Guardar configuración</h4>
                        <p className='text-muted'>Coloque prioridad a la cuenta</p>
                        <div className='row'>
                          <div className='col-md-6 px-5 fv-row my-3'>
                            <label className='col-form-label fw-bold fs-6 py-2'>Cuenta</label>
                            <Field
                              name='condicion'
                              component={InputSelect}
                              options={optionsConditions}
                            />
                          </div>
                          <div className='col-md-6 px-5 fv-row my-3'>
                            <label className='col-form-label fw-bold fs-6 py-2'>Prioridad</label>
                            <Field
                              name='condicion'
                              component={InputSelect}
                              options={optionsConditions}
                            />
                          </div>
                        </div>
                        <div className='text-center mb-0'>
                          <button type='submit' className='btn btn-lg btn-primary me-0 mt-5 px-20'>
                            <span className='indicator-label'>
                              Guardar <i className='fa fa-save text-white ms-2 me-0'></i>
                            </span>
                          </button>
                        </div>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
