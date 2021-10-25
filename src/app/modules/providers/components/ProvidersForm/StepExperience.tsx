import {Field} from 'formik'
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
export const StepExperience = () => {
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
            <div className='row mb-0'>
              <h3 className='card-title align-items-start flex-column'>
                <span className='card-label fw-bolder fs-3 mb-1'>Configuracion de experiencia</span>
                <br />
                <span className='text-muted mt-1 fw-bold fs-7'>
                  Configure y guarde la expericnia del proveedor
                </span>
              </h3>
              <div className='col-md-3 px-5 fv-row my-3'>
                <InputCustom type='text' name='compañia' label='Compañia' />
              </div>
              <div className='col-md-4 px-5 fv-row my-3'>
                <InputCustom type='number' name='tiempo' label='Tiempo en meses' />
              </div>
              <div className='col-md-3 px-5 fv-row my-3'>
                <InputCustom type='file' name='img' label='Soporte' />
              </div>
              <div className='col-md-2 mt-10 d-grid gap-2'>
                <button className='btn btn-primary btn-form'>
                  <i className='fa fa-save fa-lg'></i> Guardar
                </button>
              </div>
            </div>
            <div className='ps-2 py-5 mb-0'>
              <h3 className='card-title align-items-start flex-column'>
                <span className='card-label fw-bolder fs-3 mb-1'>
                  Listado de experiencia del proveedor
                </span>
              </h3>

              <div style={{maxHeight: '70vh', overflowY: 'auto'}}>
                <table className='table table-hover table-rounded gy-3 gs-3 table-sm'>
                  <thead className='bg-light round'>
                    <tr className='fw-bold fs-6 text-gray-800 border-bottom-2 border-gray-200'>
                      <th className='fw-bolder fs-5 text-uppercase text-center w-300px pb-5'>
                        Compañia
                      </th>
                      <th className='fw-bolder text-center fs-5 text-uppercase  pb-5'>Tiempo en meses</th>
                      <th className='fw-bolder text-center fs-5 text-uppercase  pb-5'>Soporte</th>
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
                      <td className='text-center fs-4 pt-5'>Addiuva</td>
                      <td className='fs-4 pt-5 fw-bolder text-center'>12 Meses</td>
                      <td className='fs-4 pt-5 text-center'>certificado.pdf</td>
                      <td className='text-center'>
                        <div className='p-0'>
                          <a href='!#' className='btn btn-icon btn-info btn-sm me-1'>
                            <i className='fa fa-file-pdf'></i>
                          </a>
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
                      <td className='text-center fs-4 pt-5'>Ikatech</td>
                      <td className='fs-4 pt-5 fw-bolder text-center'>12 Meses</td>
                      <td className='fs-4 pt-5 text-center'>certificado.pdf</td>
                      <td className='text-center'>
                        <div className='p-0'>
                          <a href='!#' className='btn btn-icon btn-info btn-sm me-1'>
                            <i className='fa fa-file-pdf'></i>
                          </a>
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
                      <td className='text-center fs-4 pt-5'>MAServicios</td>
                      <td className='fs-4 pt-5 fw-bolder text-center'>12 Meses</td>
                      <td className='fs-4 pt-5 text-center'>certificado.pdf</td>
                      <td className='text-center'>
                        <div className='p-0'>
                          <a href='!#' className='btn btn-icon btn-info btn-sm me-1'>
                            <i className='fa fa-file-pdf'></i>
                          </a>
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
                      <td className='text-center fs-4 pt-5'>MAServicios</td>
                      <td className='fs-4 pt-5 fw-bolder text-center'>12 Meses</td>
                      <td className='fs-4 pt-5 text-center'>certificado.pdf</td>
                      <td className='text-center'>
                        <div className='p-0'>
                          <a href='!#' className='btn btn-icon btn-info btn-sm me-1'>
                            <i className='fa fa-file-pdf'></i>
                          </a>
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
                      <td className='text-center fs-4 pt-5'>MAServicios</td>
                      <td className='fs-4 pt-5 fw-bolder text-center'>12 Meses</td>
                      <td className='fs-4 pt-5 text-center'>certificado.pdf</td>
                      <td className='text-center'>
                        <div className='p-0'>
                          <a href='!#' className='btn btn-icon btn-info btn-sm me-1'>
                            <i className='fa fa-file-pdf'></i>
                          </a>
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
                      <td className='text-center fs-4 pt-5'>MAServicios</td>
                      <td className='fs-4 pt-5 fw-bolder text-center'>12 Meses</td>
                      <td className='fs-4 pt-5 text-center'>certificado.pdf</td>
                      <td className='text-center'>
                        <div className='p-0'>
                          <a href='!#' className='btn btn-icon btn-info btn-sm me-1'>
                            <i className='fa fa-file-pdf'></i>
                          </a>
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
                      <td className='text-center fs-4 pt-5'>MAServicios</td>
                      <td className='fs-4 pt-5 fw-bolder text-center'>12 Meses</td>
                      <td className='fs-4 pt-5 text-center'>certificado.pdf</td>
                      <td className='text-center'>
                        <div className='p-0'>
                          <a href='!#' className='btn btn-icon btn-info btn-sm me-1'>
                            <i className='fa fa-file-pdf'></i>
                          </a>
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
                      <td className='text-center fs-4 pt-5'>MAServicios</td>
                      <td className='fs-4 pt-5 fw-bolder text-center'>12 Meses</td>
                      <td className='fs-4 pt-5 text-center'>certificado.pdf</td>
                      <td className='text-center'>
                        <div className='p-0'>
                          <a href='!#' className='btn btn-icon btn-info btn-sm me-1'>
                            <i className='fa fa-file-pdf'></i>
                          </a>
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
                      <td className='text-center fs-4 pt-5'>MAServicios</td>
                      <td className='fs-4 pt-5 fw-bolder text-center'>12 Meses</td>
                      <td className='fs-4 pt-5 text-center'>certificado.pdf</td>
                      <td className='text-center'>
                        <div className='p-0'>
                          <a href='!#' className='btn btn-icon btn-info btn-sm me-1'>
                            <i className='fa fa-file-pdf'></i>
                          </a>
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
                      <td className='text-center fs-4 pt-5'>MAServicios</td>
                      <td className='fs-4 pt-5 fw-bolder text-center'>12 Meses</td>
                      <td className='fs-4 pt-5 text-center'>certificado.pdf</td>
                      <td className='text-center'>
                        <div className='p-0'>
                          <a href='!#' className='btn btn-icon btn-info btn-sm me-1'>
                            <i className='fa fa-file-pdf'></i>
                          </a>
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
                      <td className='text-center fs-4 pt-5'></td>
                      <td className='fs-4 pt-5 fw-bolder text-center'></td>
                      <td className='fs-4 pt-5 text-center'></td>
                      <td className='text-center'>
                        <h4 className='fw-bold'>TOTAL: 3 años</h4>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className='text-end mb-5'>
              <button type='submit' className='btn btn-lg btn-primary me-0 mt-10 px-20'>
                <span className='indicator-label'>
                  Guardar
                  <i className='fa fa-arrow-right svg-icon-3 ms-2 me-0'></i>
                </span>
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  )
}
