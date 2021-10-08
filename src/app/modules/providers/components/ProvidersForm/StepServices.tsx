import {Field, Form, Formik, FormikProps} from 'formik'
import React from 'react'
import {KTSVG} from '../../../../../_metronic/helpers'
import {InputCustom, InputSelect} from '../../../global/components/inputs'
import { initialValues } from './Helpers'

const optionsFamilies = [
  {value: '1', label: 'Addiuva'},
  {value: '2', label: 'Ikatech'},
  {value: '3', label: 'El Roble'},
]

export const StepServices = () => {
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
            <div className='w-100 card'>
              <div className='card-body p-10 mb-0'>
                <div className='row mb-6'>
                  <h3 className='card-title align-items-start flex-column'>
                    <span className='card-label fw-bolder fs-3 mb-1'>
                      Configuracion de servicios del proveedor
                    </span>
                    <br />
                    <span className='text-muted mt-1 fw-bold fs-7'>
                      Llena los campos para configurar los servicios que presta el proveeor
                    </span>
                  </h3>
                  <div className='col-md-6 px-5 fv-row my-3'>
                    <label className='col-form-label required fw-bold fs-6 py-2'>
                      Seleccione las familias
                    </label>
                    <Field name='coin' component={InputSelect} options={optionsFamilies} />
                  </div>
                </div>
                <div className='ps-2 py-5 mb-6'>
                  <h3 className='card-title align-items-start flex-column'>
                    <span className='card-label fw-bolder fs-3 mb-1'>
                      Listado de servicios configurados
                    </span>
                    <br />
                    <span className='text-muted mt-1 fw-bold fs-7'>
                      Colocale un check a los servicios que vas a prestar y configuralos
                    </span>
                  </h3>
                  <table className='table table-hover table-rounded gy-3 gs-3 table-sm'>
                    <thead className='bg-light round'>
                      <tr className='fw-bold fs-6 text-gray-800 border-bottom-2 border-gray-200'>
                        <th></th>
                        <th className='fw-bolder fs-5 text-uppercase w-300px'>Servicio</th>
                        <th className='fw-bolder text-center fs-5 text-uppercase'>Familia</th>
                        <th className='fw-bolder text-uppercase text-end w-250px py-2'>
                          <div className='d-flex align-items-center position-relative d-sm-none d-none d-md-block d-lg-block'>
                            <KTSVG
                              path='/media/icons/duotone/General/Search.svg'
                              className='svg-icon-2 svg-icon-lg-1 svg-icon-gray-500 position-absolute top-50 ms-5 translate-middle-y start-0'
                            />
                            <input
                              type='text'
                              className='form-control form-control-white px-15'
                              name='search'
                            />
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className='my-auto h-100 text-center mt-0'>
                            <div className='form-check form-check-custom form-check-solid'>
                              <InputCustom
                                className='form-check-input h-30px w-30px'
                                type='checkbox'
                                name='is_active'
                                checked
                                id='flexSwitchChecked'
                              />
                            </div>
                          </div>
                        </td>
                        <td className='fs-4 pt-5'>Cerrajeria</td>
                        <td className='fs-4 pt-5 fw-bolder text-center'>Hogar</td>
                        <td className='text-center'>
                          <div className='p-0'>
                            <a href='!#' className='btn btn-icon btn-success btn-sm me-1'>
                              <i className='fa fa-map'></i>
                            </a>
                            <a href='!#' className='btn btn-icon btn-info btn-sm'>
                              <i className='fa fa-file'></i>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className='my-auto h-100 text-center mt-0'>
                            <div className='form-check form-check-custom form-check-solid'>
                              <InputCustom
                                className='form-check-input h-30px w-30px'
                                type='checkbox'
                                name='is_active'
                                checked
                                id='flexSwitchChecked'
                              />
                            </div>
                          </div>
                        </td>
                        <td className='fs-4 pt-5'>Carpinteria</td>
                        <td className='fs-4 pt-5 fw-bolder text-center'>Hogar</td>
                        <td className='text-center'>
                          <div className='p-0'>
                            <a href='!#' className='btn btn-icon btn-success btn-sm me-1'>
                              <i className='fa fa-map'></i>
                            </a>
                            <a href='!#' className='btn btn-icon btn-info btn-sm'>
                              <i className='fa fa-file'></i>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className='my-auto h-100 text-center mt-0'>
                            <div className='form-check form-check-custom form-check-solid'>
                              <InputCustom
                                className='form-check-input h-30px w-30px'
                                type='checkbox'
                                name='is_active'
                                checked
                                id='flexSwitchChecked'
                              />
                            </div>
                          </div>
                        </td>
                        <td className='fs-4 pt-5'>Pintura</td>
                        <td className='fs-4 pt-5 fw-bolder text-center'>Hogar</td>
                        <td className='text-center'>
                          <div className='p-0'>
                            <a href='!#' className='btn btn-icon btn-success btn-sm me-1'>
                              <i className='fa fa-map'></i>
                            </a>
                            <a href='!#' className='btn btn-icon btn-info btn-sm'>
                              <i className='fa fa-file'></i>
                            </a>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  )
}
