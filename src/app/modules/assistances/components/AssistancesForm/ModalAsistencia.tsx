import React from 'react'
import {Formik, Form, FormikProps, Field} from 'formik'
import {initialValues} from '../../../expedients/components/Helpers'
import {InputCustom} from '../../../global/components/inputs'
import {ModalFollowers} from './ModalFollowers'

export const ModalAsistencia = () => {
  return (
    <>
      <div className='modal' tabIndex={-1} id='kt_modal_asistencia'>
        <div className='modal-dialog modal-lg modal-dialog-centered'>
          <div className='modal-content'>
            <div className='modal-body'>
              <div className='card' style={{minHeight: '40vh'}}>
                <div className='card-header border-0 py-0 my-0 mh-20px'>
                  <h2 className='card-title align-items-start flex-column'>
                    <span className='card-label fw-bolder fs-3 mb-1'>
                      Creacion de la Asistencia
                    </span>
                  </h2>
                  <div className='card-toolbar'>
                    <button
                      className='btn btn-info btn-icon ms-2 btn-circle'
                      data-bs-toggle='modal'
                      data-bs-target='#kt_modal_followers'
                      data-bs-dismiss='modal'
                    >
                      <i className='fa fa-plus'></i>
                    </button>
                  </div>
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
                          <div className='row mb-4 border-bottom'>
                            <div className='col-md-6 mb-4'>
                              <b>Beneficiario:</b> Maximillian Fernandez <br />
                              <b>Cuenta:</b> Claro <br />
                              <b>Plan:</b> Noches a mil <br />
                              <b>Ubicación:</b> Casa <br />
                            </div>
                            <div className='col-md-6 text-end'>
                              <b>Contactante:</b> Titular
                              <br />
                              <b>Tipo Servicio:</b> Hogar
                              <br />
                              <b>Servicio:</b> Cerrajeria Hogar
                              <br />
                              <b>Reembolso:</b> <br />
                            </div>
                          </div>
                          <div className='row'>
                            <b className='col-12'>Datos del servicio</b>
                            <div className='col-md-3 fv-row my-3'>
                              <InputCustom
                                type='text'
                                name='tipoinm'
                                label='Tipo Inmueble'
                                required
                              />
                            </div>
                            <div className='col-md-3 fv-row my-3'>
                              <InputCustom type='text' name='mnombres' label='Ambito' required />
                            </div>
                            <div className='col-md-3 fv-row my-3'>
                              <InputCustom
                                type='text'
                                name='appaterno'
                                label='Tipo Atención'
                                required
                              />
                            </div>
                            <div className='col-md-3 fv-row my-3'>
                              <InputCustom
                                type='text'
                                name='appaterno'
                                label='Condicion'
                                required
                              />
                            </div>
                            <b className='col-12 mt-7'>Preguntas de coberturas</b>
                            <div className='col-md-4 fv-row my-3'>
                              <InputCustom
                                type='text'
                                name='tipoinm'
                                label='Ubicacion del daño'
                                required
                              />
                            </div>
                            <div className='col-md-4 fv-row my-3'>
                              <InputCustom type='text' name='mnombres' label='' required />
                            </div>
                            <div className='col-md-4 fv-row my-3'>
                              <InputCustom
                                type='text'
                                name='appaterno'
                                label='Sub Servicio'
                                required
                              />
                            </div>
                            <div className='col-md-6 fv-row my-3'>
                              <InputCustom
                                type='text'
                                name='appaterno'
                                label='Descripcion de lo ocurrido'
                                required
                              />
                            </div>
                            <div className='col-md-6 fv-row my-3'>
                              <InputCustom
                                type='text'
                                name='appaterno'
                                label='Detalle pieza dañada'
                                required
                              />
                            </div>
                            <div className='col-md-6 fv-row my-3'>
                              <InputCustom
                                type='text'
                                name='appaterno'
                                label='Recomendaciones'
                                required
                              />
                            </div>
                            <div className='col-md-6 fv-row my-3'>
                              <InputCustom
                                type='text'
                                name='appaterno'
                                label='Materiales utilizados'
                                required
                              />
                            </div>
                          </div>
                        </Form>
                      )}
                    </Formik>
                  </div>
                </div>
                <div className='modal-footer p-0 m-0 border-0 pe-8'>
                  <a className='btn btn-primary' href='stage1'>
                    Guardar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalFollowers />
    </>
  )
}
