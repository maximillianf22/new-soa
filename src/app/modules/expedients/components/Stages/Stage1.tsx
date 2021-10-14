import React from 'react'
import {Formik, Form, FormikProps, Field} from 'formik'
import {initialValues} from '../Helpers'
import {InputCustom} from '../../../global/components/inputs'

export const Stage1 = () => {
  return (
    <>
      <div className='card'>
        <div className='card-header border-0 pt-5'>
          <h3 className='card-title align-items-start flex-column'>
            <span className='card-label fw-bolder fs-3 mb-1'>Etapa 2 Creacion del expediente</span>
            <span className='text-muted mt-1 fw-bold fs-7'>
              En esta etapa se realiza la asignacion del proveedor a la asistencia
            </span>
          </h3>
        </div>
        <div className='card-body'>
          <div className='row'>
            <div className='col-md-6 px-5'>
              <div className='row mb-4'>
                <h4 className='col-12'>Datos del afiliado</h4>
                <div className='col-md-6 mb-4'>
                  <b>Beneficiario:</b> Maximillian Fernandez <br />
                  <b>Cuenta:</b> Claro <br />
                  <b>Plan:</b> Noches a mil <br />
                  <b>Ubicación:</b> Casa <br />
                </div>
                <div className='col-md-6 text-end'>
                  <b>Contactante:</b> Titular <br />
                  <b>Tipo Servicio:</b> Hogar <br />
                  <b>Servicio:</b> Cerrajeria Hogar <br />
                  <b>Reembolso:</b> <br />
                </div>
              </div>
              <div className='row mb-4'>
                <h4 className='col-12'>Datos del Proveedor</h4>
                <div className='col-md-6 mb-4'>
                  <b>Proveedor:</b> Ikatech <br />
                  <b>Fecha de asignación:</b> 19/04/2021 <br />
                  <b>Tipo Servicio:</b> Cerrajeria Hogar <br />
                  <b>Telefono:</b> 3069087689 <br />
                </div>
                <div className='col-md-6 text-end'>
                  <b>Contacto:</b> Anderson Martinez <br />
                  <b>Hora de Asignacion:</b> 8:08:am <br />
                  <b>Telefono:</b> 3069087689 <br />
                  <b>Correo:</b> contacto@cocto.com
                  <br />
                </div>
              </div>
              <Formik
                initialValues={initialValues}
                enableReinitialize={true}
                onSubmit={(values) => {}}
              >
                {(props: FormikProps<any>) => (
                  <Form>
                    <div className='row mt-15'>
                      <h4 className='col-12'>Preguntas de Cobertura</h4>
                      <div className='col-md-6 fv-row my-3'>
                        <InputCustom type='text' name='tipoinm' label='Pregunta' required />
                      </div>
                      <div className='col-md-6 fv-row my-3'>
                        <InputCustom type='text' name='tipoinm' label='Pregunta' required />
                      </div>
                      <div className='col-md-6 fv-row my-3'>
                        <InputCustom type='text' name='tipoinm' label='Pregunta' required />
                      </div>
                      <div className='col-md-6 fv-row my-3'>
                        <InputCustom type='text' name='tipoinm' label='Pregunta' required />
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
            <div className='col-md-3 px-5'>
              <div className='row mb-4 fs-6 mt-0'>
                <div className='col-md-6 text-nowrap'>
                  <b>Expediente:</b> 20394290449
                </div>
                <div className='col-md-6 text-end text-nowrap'>
                  <b>Asistencia:</b> 429340389
                </div>
              </div>
              <div className='row mb-4 fs-6 mt-0'>
                <div className='col-md-6 d-grid gap-2 text-nowrap'>
                  <button className='btn btn-sm btn-primary'>Bitacora</button>
                </div>
                <div className='col-md-6 d-grid gap-2 text-nowrap'>
                  <button className='btn btn-sm btn-primary'>Detalles</button>
                </div>
              </div>
              <div className='row mb-4 fs-6 mt-0'>
                <span className='text-muted mt-1 fw-bold fs-7 mt-7 mb-5'>Opciones de la Etapa</span>
                <div className='col-md-12 d-grid gap-2 text-nowrap'>
                  <button className='btn btn-sm btn-info'>Solicitud app proveedores</button>
                  <button className='btn btn-sm btn-info'>Calcular Rutas</button>
                </div>
              </div>
              <Formik
                initialValues={initialValues}
                enableReinitialize={true}
                onSubmit={(values) => {}}
              >
                {(props: FormikProps<any>) => (
                  <Form className='pt-12'>
                    <div className='row mt-20 p-4'>
                      <h4 className='col-12'>Bitacora</h4>
                      <textarea
                        className='form-control mt-4 col-12'
                        id='exampleFormControlTextarea1'
                        rows={4}
                      ></textarea>
                    </div>
                    <div className='col-md-12 d-grid gap-2 text-nowrap'>
                        <button className='btn btn-sm btn-success'>Guardar en Bitacora General</button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
            <div className='col-md-3 px-5'>
              <div className='card h-100'>
                <div className='card-body bg-secondary rounded'>
                  <h3 className='card-title align-items-start flex-column'>
                    <span className='fw-bolder mb-2 text-dark'>Registro de actividades</span>
                  </h3>
                  <div className='timeline-label p-10'>
                    <div className='timeline-item my-7'>
                      <div className='timeline-label fw-bolder text-gray-800 fs-6'>08:42</div>
                      <div className='timeline-badge'>
                        <i className='fa fa-genderless text-warning fs-1'></i>
                      </div>
                      <div className='fw-mormal timeline-content text-muted ps-3'>
                        Se ha registrado confirmación del servicio
                      </div>
                    </div>
                    <div className='timeline-item my-7'>
                      <div className='timeline-label fw-bolder text-gray-800 fs-6'>10:00</div>
                      <div className='timeline-badge'>
                        <i className='fa fa-genderless text-success fs-1'></i>
                      </div>
                      <div className='timeline-content d-flex'>
                        <span className='fw-bolder text-gray-800 ps-3'>
                          Se ha monitoreado el proveedor
                        </span>
                      </div>
                    </div>
                    <div className='timeline-item my-7'>
                      <div className='timeline-label fw-bolder text-gray-800 fs-6'>16:50</div>
                      <div className='timeline-badge'>
                        <i className='fa fa-genderless text-primary fs-1'></i>
                      </div>
                      <div className='timeline-content fw-mormal text-muted ps-3'>
                        Se ha monitoreado el afiliado
                      </div>
                    </div>
                    <div className='timeline-item my-7'>
                      <div className='timeline-label fw-bolder text-gray-800 fs-6'>21:03</div>
                      <div className='timeline-badge'>
                        <i className='fa fa-genderless text-danger fs-1'></i>
                      </div>
                      <div className='timeline-content fw-bold text-gray-800 ps-3'>
                        Se ha guardado “El proveedor ha llegado sin novedad al sitio” en bitacora
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
