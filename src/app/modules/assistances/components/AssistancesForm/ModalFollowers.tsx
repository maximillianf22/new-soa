import React from 'react'
import {Form, Formik, FormikProps} from 'formik'
import {KTSVG} from '../../../../../_metronic/helpers'
import {InputCustom} from '../../../global/components/inputs'
import {initialValues} from '../../../expedients/components/Helpers'

export const ModalFollowers = () => {
  return (
    <>
      <div className='modal' tabIndex={-1} id='kt_modal_followers'>
        <div className='modal-dialog modal-lg modal-dialog-centered'>
          <div className='modal-content'>
            <div className='modal-body'>
              <div className='card' style={{minHeight: '40vh'}}>
                <div className='card-body'>
                  <div className='w-100 card mt-7'>
                    <div className='fv-row'>
                      <Formik
                        initialValues={initialValues}
                        enableReinitialize={true}
                        onSubmit={(values) => {
                          console.log('en submit', values)
                        }}
                      >
                        {(props: FormikProps<any>) => (
                          <Form>
                            <div className='row mb-1'>
                              <h3 className='card-title align-items-start flex-column'>
                                <span className='card-label fw-bolder fs-3 mb-1'>
                                  Configuracion de seguidores del proveedor
                                </span>
                                <br />
                                <span className='text-muted mt-1 fw-bold fs-7'>
                                  Configura los seguidores a los que les apareceran las
                                  notificaciones asociadas a la asistencia
                                </span>
                              </h3>
                              <div className='d-flex bd-highlight w-75 my-3'>
                                <div className='pe-3 flex-fill bd-highlight w-100'>
                                  <InputCustom
                                    type='text'
                                    name='tipoinm'
                                    label='Busqueda de coordinadores'
                                    required
                                  />
                                  <p className='fs-help'>
                                    Porfavor ingresa el numero de documento o nombre del coordinador
                                  </p>
                                </div>
                                <div className='px-0 flex-fill bd-highlight mt-10'>
                                  <button className='btn btn-icon btn-info btn-form'>
                                    <i className='fa fa-filter'></i>
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className='ps-2 py-5 mb-6'>
                              <div className='d-flex justify-content-between text-start mb-4'>
                                <div className='col-md-12 fv-row mt-auto'>
                                  <h3 className='card-title align-items-start flex-column mt-auto'>
                                    <span className='card-label fw-bolder fs-3 mb-1'>
                                      Listado de seguidores agregados
                                    </span>
                                  </h3>
                                </div>
                              </div>

                              <table className='table table-hover table-rounded gy-3 gs-3 table-sm'>
                                <thead className='bg-light round'>
                                  <tr className='fw-bold fs-6 text-gray-800 border-bottom-2 border-gray-200 pb-5'>
                                    <th className='fw-bolder fs-5 text-uppercase w-20px pb-5'>
                                      RESP.
                                    </th>
                                    <th className='fw-bolder fs-5 text-uppercase w-300px pb-5'>
                                      Nombre
                                    </th>
                                    <th className='fw-bolder text-center fs-5 text-uppercase pb-5'>
                                      Rol
                                    </th>
                                    <th className='fw-bolder text-center fs-5 text-uppercase pb-5'>
                                      Telefono
                                    </th>
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
                                    <td className='fs-4 pt-5 text-nowrap'>Maximillian Fernandez</td>
                                    <td className='fs-4 pt-5 fw-bolder text-center'>Coordinador</td>
                                    <td className='fs-4 pt-5 fw-bolder text-center'>30526078890</td>
                                    <td className='text-center'>
                                      <div className='p-0'>
                                        <button className='btn btn-icon btn-danger btn-sm me-1'>
                                          <i className='fa fa-ban'></i>
                                        </button>
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
                                    <td className='fs-4 pt-5 text-nowrap'>Maximillian Fernandez</td>
                                    <td className='fs-4 pt-5 fw-bolder text-center'>Coordinador</td>
                                    <td className='fs-4 pt-5 fw-bolder text-center'>30526078890</td>
                                    <td className='text-center'>
                                      <div className='p-0'>
                                        <button className='btn btn-icon btn-danger btn-sm me-1'>
                                          <i className='fa fa-ban'></i>
                                        </button>
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
                                    <td className='fs-4 pt-5 text-nowrap'>Maximillian Fernandez</td>
                                    <td className='fs-4 pt-5 fw-bolder text-center'>Coordinador</td>
                                    <td className='fs-4 pt-5 fw-bolder text-center'>30526078890</td>
                                    <td className='text-center'>
                                      <div className='p-0'>
                                        <button className='btn btn-icon btn-danger btn-sm me-1'>
                                          <i className='fa fa-ban'></i>
                                        </button>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </Form>
                        )}
                      </Formik>
                    </div>
                  </div>
                </div>
                <div className='modal-footer p-0 m-0 border-0 pe-8'>
                  <button type='button' className='btn btn-primary px-20' data-bs-dismiss='modal'>
                    Guardar
                    <i className='fa fa-arrow-right svg-icon-3 ms-2 me-0'></i>

                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
