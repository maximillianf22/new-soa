import React from 'react'
import {Formik, Form, FormikProps, Field} from 'formik'
import {initialValues} from '../../Helpers'
import {InputCustom} from '../../../../global/components/inputs'

export const ModalBitacoraStage = () => {
  return (
    <>
      <div className='modal' tabIndex={-1} id='kt_modal_bitacora_etapa'>
        <div className='modal-dialog modal-dialog-centered'>
          <div className='modal-content'>
            <div className='modal-body'>
              <div className='card'>
                <div className='card-body'>
                  <div className='text-center w-100 '>
                    <h2 className='fw-bolder text-center text-dark'>Familias disponibles</h2>
                  </div>
                  <Formik
                    initialValues={initialValues}
                    enableReinitialize={true}
                    onSubmit={(values) => {}}
                  >
                    {(props: FormikProps<any>) => (
                      <Form>
                        <div className='row p-4'>
                          <h4 className='col-12'>Bitacora</h4>
                          <textarea
                            className='form-control mt-4 col-12'
                            id='exampleFormControlTextarea1'
                            rows={4}
                          ></textarea>
                        </div>
                        <div className='col-md-12 d-grid gap-2 text-nowrap'>
                          <button className='btn btn-sm btn-success'>
                            Guardar en Bitacora General
                          </button>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
              <div className='modal-footer p-0 m-0 border-0 pe-8'>
                <button type='button' className='btn btn-danger' data-bs-dismiss='modal'>
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
