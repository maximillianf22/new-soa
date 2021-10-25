import {useState} from 'react'
import {Field, Formik, Form, FormikProps} from 'formik'
import {KTSVG} from '../../../../../../_metronic/helpers'
import {InputCustom, InputSelect} from '../../../../global/components/inputs'
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css'
import './styles.css'
import { ModalOptions } from './ModalOptions'

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

export const StepQuestions = () => {
  const [state, setState] = useState({tags: []})

  const handleChange = (tags: any) => {
    setState({tags})
  }
  return (
    <>
      <Formik
        initialValues={state}
        onSubmit={console.log}
        render={({values, handleSubmit, setFieldValue}) => (
          <Form>
            <div id='kt_account_profile_details' className='w-100 card'>
              <div className='card-body'>
                <div className='row mb-6'>
                  <h3 className='card-title align-items-start flex-column'>
                    <span className='card-label fw-bolder fs-3 mb-1'>
                      Configuracion de usuario multi-platforma
                    </span>
                    <br />
                    <span className='text-muted mt-1 fw-bold fs-7'>
                      Seleccione el cliente, el perfil de usuario de ese cliente y luego en el boton
                      de agregar para guardar, esta accion es por cada cliente
                    </span>
                  </h3>
                  <div className='col-md-3 px-5 fv-row my-3'>
                    <label className='col-form-label required fw-bold fs-6 py-2'>
                      Tipo de pregunta
                    </label>
                    <Field
                      name={'question_type'}
                      component={InputSelect}
                      options={optionsQuestions}
                    />
                  </div>
                  <div className='col-md-5 px-5 fv-row my-3'>
                    <InputCustom type='text' name='question' label='Pregunta' required/>
                    <label className='col-form-label fw-bold fs-6 py-2 mt-1'>
                      Opciones
                    </label>

                    {/* Este Tags input solo va cuando el tipo de pregunta es de selección el las otras no se muestra */}
                    <TagsInput
                      className='form-control form-control white h-40px pt-1 mt-0'
                      name='tags'
                      value={values.tags}
                      onChange={(tags: any) => {
                        setFieldValue('tags', tags)
                      }}
                    />
                    {/* Este Tags input solo va cuando el tipo de pregunta es de selección el las otras no se muestra */}

                  </div>
                  <div className='col-md-2 px-5 fv-row my-3'>
                    <label className='col-form-label required fw-bold fs-6 py-2'>Etapa</label>
                    <Field name={'stage'} component={InputSelect} options={optionsStages} />
                  </div>
                  <div className='col-md-2 mt-mod d-grid gap-2 h-40px'>
                    <button className='btn btn-primary btn-form'>
                      <i className='fa fa-save fa-lg'></i> Guardar
                    </button>
                  </div>
                </div>
                <div className='ps-2 py-5 mb-6'>
                  <h3 className='card-title align-items-start flex-column'>
                    <span className='card-label fw-bolder fs-3 mb-1'>
                      Listado de configuraciones guardadas
                    </span>
                  </h3>
                  <table className='table table-hover table-rounded gy-3 gs-3 table-sm'>
                    <thead className='bg-light round'>
                      <tr className='fw-bold fs-6 text-gray-800 border-bottom-2 border-gray-200'>
                        <th className='fw-bolder fs-5 text-uppercase text-center w-300px pb-5'>
                          Tipo de pregunta
                        </th>
                        <th className='fw-bolder text-center fs-5 text-uppercase pb-5'>Pregunta</th>
                        <th className='fw-bolder text-center fs-5 text-uppercase  pb-5'>Etapa</th>
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
                        <td className='text-center fs-4 pt-5'>Pregunta simple</td>
                        <td className='fs-4 pt-5 fw-bolder text-center'>
                          ¿Aqui va una pregunta simple?
                        </td>
                        <td className='fs-4 pt-5 text-center'>Etapa 1</td>
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
                        <td className='text-center fs-4 pt-5'>Pregunta Archivo</td>
                        <td className='fs-4 pt-5 fw-bolder text-center'>
                          Aqui le pide que suba un archivo
                        </td>
                        <td className='fs-4 pt-5 text-center'>Etapa 3</td>
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
                        <td className='text-center fs-4 pt-5'>Pregunta Seleccion</td>
                        <td className='fs-4 pt-5 fw-bolder text-center'>
                          las opciones estan el boton azul
                          <button
                            className='btn btn-info btn-icon btn-sm p-1 ms-3'
                            data-bs-toggle='modal'
                            data-bs-target='#kt_modal_options'
                          >
                            <i className='fa fa-eye'></i>
                          </button>
                        </td>
                        <td className='fs-4 pt-5 text-center'>Etapa 3</td>
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
      />
    <ModalOptions />
    </>
  )
}
