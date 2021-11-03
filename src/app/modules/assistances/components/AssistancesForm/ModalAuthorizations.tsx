import {Field, Form, Formik, FormikProps} from 'formik'
import React from 'react'
import {InputCustom, InputSelect} from '../../../global/components/inputs'
import {initialValues} from '../Helpers'

export const ModalAuthorization = () => {
  const optionsAuthorizations = [{value: 'id', label: 'Interna'}]
  return (
    <>
      <div className='modal' tabIndex={-1} id='kt_modal_authorizations'>
        <div className='modal-dialog modal-lg modal-dialog-centered'>
          <div className='modal-content'>
            <div className='modal-body'>
              <div className='card' style={{minHeight: '40vh'}}>
                <div className='card-header border-0 py-0 my-0 mh-20px'>
                  <h2 className='card-title align-items-start flex-column'>
                    <span className='card-label fw-bolder fs-3 mb-1'>Autorización</span>
                    <p>Seleccione el metodo de autorización</p>
                  </h2>
                </div>
                <div className='card-body'>
                  <div className='w-100 card mt-7'>
                    <Formik
                      initialValues={initialValues}
                      enableReinitialize={true}
                      onSubmit={(values) => {}}
                    >
                      {(props: FormikProps<any>) => (
                        <Form>
                          <div className='row'>
                            <div className='col-md-4 fv-row my-3'>
                              <label className='col-form-label required fw-bold fs-6 py-2'>
                                Metodo de autorización
                              </label>
                              <Field
                                name={'autorizations'}
                                component={InputSelect}
                                options={optionsAuthorizations}
                              />
                            </div>
                            <div className='col-md-4 fv-row my-3'>
                              <InputCustom type='text' name='mnombres' label='Comentario' />
                            </div>
                            <div className='col-md-4 fv-row my-3'>
                              <InputCustom type='file' name='appaterno' label='Archivo' required />
                            </div>
                          </div>
                        </Form>
                      )}
                    </Formik>
                  </div>
                </div>
                <div className='modal-footer p-0 m-0 border-0 pe-8'>
                  <a className='btn btn-primary' href='stage1'>
                    Autorizar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
