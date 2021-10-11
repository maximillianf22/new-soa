import React from 'react'
import {KTSVG} from '../../../../../_metronic/helpers'
import {InputCustom} from '../../../global/components/inputs'
import {Form, Formik, FormikProps} from 'formik'
import {initialValues} from './Helpers'

const optionsQuestions = [
  {value: '1', label: 'Addiuva'},
  {value: '2', label: 'Ikatech'},
  {value: '3', label: 'El Roble'},
]

const optionsStages = [
  {value: '1', label: 'Etapa 1'},
  {value: '2', label: 'Etapa 2'},
  {value: '3', label: 'Etapa 3'},
]

export const StepContacts = () => {
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
                      Configuracion de experiencia
                    </span>
                    <br />
                    <span className='text-muted mt-1 fw-bold fs-7'>
                      Configure y guarde la expericnia del proveedor
                    </span>
                  </h3>
                  <div className='col-md-4 px-5 fv-row my-3'>
                    <InputCustom type='text' name='compañia' label='Nombre' />
                  </div>
                  <div className='col-md-4 px-5 fv-row my-3'>
                    <InputCustom type='text' name='ap_paterno' label='Apellido Paterno' />
                  </div>
                  <div className='col-md-4 px-5 fv-row my-3'>
                    <InputCustom type='text' name='ap_materno' label='Apellido Materno' />
                  </div>
                  <div className='col-md-4 px-5 fv-row my-3'>
                    <InputCustom type='text' name='documento' label='Documento' />
                  </div>
                  <div className='col-md-4 px-5 fv-row my-3'>
                    <InputCustom type='text' name='telefono' label='Telefono' />
                  </div>
                  <div className='col-md-4 px-5 fv-row my-3'>
                    <InputCustom type='email' name='correo' label='Correo' />
                  </div>
                  <div className='col-md-4 px-5 fv-row my-3'>
                    <InputCustom type='date' name='fecha_nacimiento' label='Fecha de Naciiento' />
                  </div>
                  <div className='col-md-4 px-5 fv-row my-3'>
                    <InputCustom type='text' name='cuenta' label='Cuenta' />
                  </div>
                  <div className='col-md-4 px-5 fv-row my-3'>
                    <InputCustom type='text' name='vechiculo' label='Vehiculo' />
                  </div>
                  <div className='col-md-4 px-5 fv-row my-3'>
                    <InputCustom name='username' type='text' label='Usuario' />
                  </div>
                  <div className='col-md-4 px-5 fv-row my-3'>
                    <InputCustom name='password' type='password' label='Contraseña' />
                  </div>
                  <div className='col-md-4 px-5 fv-row my-3'>
                    <InputCustom
                      name='confirmPassword'
                      type='password'
                      label='Confirmar contraseña'
                    />
                  </div>
                  <div className='col-md-4 px-5 fv-row my-4 text-start'>
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
                  <div className='col-md-4 px-5 fv-row my-4 text-start'>
                    <div className='my-auto h-100 text-center mt-4'>
                      <label></label>
                      <div className='form-check form-check-custom form-check-solid'>
                        <InputCustom
                          className='form-check-input h-30px w-30px'
                          type='checkbox'
                          name='is_active'
                          checked
                          id='flexSwitchChecked'
                        />
                        <label className='form-check-label ms-5'>Responsable</label>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-4 px-5 fv-row my-3'>
                    <InputCustom name='obervaciones' type='text' label='Observaciones' />
                  </div>
                  <div className='col-md-2 mt-13 d-grid gap-2'>
                    <button className='btn btn-success btn-form'>
                      <i className='fa fa-save fa-lg'></i> Horario
                    </button>
                  </div>
                  <div className='col-md-2 mt-13 d-grid gap-2'>
                    <button className='btn btn-info btn-form'>
                      <i className='fa fa-save fa-lg'></i> Cuentas
                    </button>
                  </div>
                  <div className='col-md-2 mt-13 d-grid gap-2'>
                    <button className='btn btn-primary btn-form'>
                      <i className='fa fa-save fa-lg'></i> Guardar
                    </button>
                  </div>
                </div>
                <div className='ps-2 py-5 mb-6'>
                  <h3 className='card-title align-items-start flex-column'>
                    <span className='card-label fw-bolder fs-3 mb-1'>
                      Listado de experiencia del proveedor
                    </span>
                  </h3>
                  <table className='table table-hover table-rounded gy-3 gs-3 table-sm'>
                    <thead className='bg-light round'>
                      <tr className='fw-bold fs-6 text-gray-800 border-bottom-2 border-gray-200'>
                        <th className='fw-bolder fs-5 text-uppercase text-center w-300px'>
                          Nombre
                        </th>
                        <th className='fw-bolder text-center fs-5 text-uppercase'>Telefono</th>
                        <th className='fw-bolder text-center fs-5 text-uppercase'>Sedes</th>
                        <th className='fw-bolder text-center fs-5 text-uppercase'>Responsable</th>
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
                              placeholder='Buscar'
                            />
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className='text-center fs-4 pt-5'>Yeison Jimenez</td>
                        <td className='fs-4 pt-5 fw-bolder text-center'>3069056789</td>
                        <td className='fs-4 pt-5 text-center'>Sede principal</td>
                        <td className='fs-4 pt-5 text-center'>Si</td>
                        <td className='text-center'>
                          <div className='p-0'>
                            <a href='!#' className='btn btn-icon btn-success btn-sm me-1'>
                              <i className='fa fa-edit'></i>
                            </a>
                            <a href='!#' className='btn btn-icon btn-danger btn-sm'>
                              <i className='fa fa-trash'></i>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className='text-center fs-4 pt-5'>Didiel Figueroa</td>
                        <td className='fs-4 pt-5 fw-bolder text-center'>3069056789</td>
                        <td className='fs-4 pt-5 text-center'>Sede principal</td>
                        <td className='fs-4 pt-5 text-center'>No</td>
                        <td className='text-center'>
                          <div className='p-0'>
                            <a href='!#' className='btn btn-icon btn-success btn-sm me-1'>
                              <i className='fa fa-edit'></i>
                            </a>
                            <a href='!#' className='btn btn-icon btn-danger btn-sm'>
                              <i className='fa fa-trash'></i>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className='text-center fs-4 pt-5'>Deiner Martinez</td>
                        <td className='fs-4 pt-5 fw-bolder text-center'>3069056789</td>
                        <td className='fs-4 pt-5 text-center'>Sede principal</td>
                        <td className='fs-4 pt-5 text-center'>No</td>
                        <td className='text-center'>
                          <div className='p-0'>
                            <a href='!#' className='btn btn-icon btn-success btn-sm me-1'>
                              <i className='fa fa-edit'></i>
                            </a>
                            <a href='!#' className='btn btn-icon btn-danger btn-sm'>
                              <i className='fa fa-trash'></i>
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
