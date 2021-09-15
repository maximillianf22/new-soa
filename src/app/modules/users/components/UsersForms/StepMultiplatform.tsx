import Select from 'react-select'
import {KTSVG} from '../../../../../_metronic/helpers'
import {InputSelect, InputProfile} from '../../../global/components/inputs'
import {Field} from 'formik'

export function StepMultiplatform() {
  const optionsProfile = [
    {value: 'admin', label: 'Administrador'},
    {value: 'supervisor', label: 'Supervisor'},
    {value: 'coordinador', label: 'Coordinador'},
  ]

  const optionsPlataforms = [
    {value: 'addiuva', label: 'Addiuva'},
    {value: 'ikatech', label: 'Ikatech'},
    {value: 'elRoble', label: 'El Roble'},
  ]

  return (
    <>
      <div>
        <div id='kt_account_profile_details' className='collapse show w-100'>
          <div className='card-body py-0 px-4'>
            <div className='row mb-6'>
              <h3 className='card-title align-items-start flex-column'>
                <span className='card-label fw-bolder fs-3 mb-1'>
                  Configuracion de usuario multi-plataforma
                </span>
                <br />
                <span className='text-muted mt-1 fw-bold fs-7'>
                Seleccione el cliente, el perfil de usuario de ese cliente y luego en el boton de
                agregar para guardar, esta accion es por cada cliente
                </span>
              </h3>
              <div className='col-md-5 px-5 fv-row my-3'>
                  <label className='col-form-label required fw-bold fs-6'>Plataforma</label>
                  <Field name={'plataform'} component={InputSelect} options={optionsPlataforms} />
                </div>

                <div className='col-md-5 px-5 fv-row my-3'>
                  <InputProfile />
                </div>
              <div className='col-md-2 mt-16 d-grid gap-2'>
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
                    <th className='fw-bolder fs-5 text-uppercase text-center w-300px'>#</th>
                    <th className='fw-bolder text-center fs-5 text-uppercase'>
                      Cliente / Plataforma
                    </th>
                    <th className='fw-bolder text-center fs-5 text-uppercase'>Perfil</th>
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
                    <td className='text-center fs-4 pt-5'>1</td>
                    <td className='fs-4 pt-5 fw-bolder text-center'>Addiuva</td>
                    <td className='fs-4 pt-5 text-center'>Administrador</td>
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
                    <td className='text-center fs-4 pt-5'>1</td>
                    <td className='fs-4 pt-5 fw-bolder text-center'>Addiuva</td>
                    <td className='fs-4 pt-5 text-center'>Administrador</td>
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
      </div>
    </>
  )
}
