import React from 'react'

export const RolesForm = () => {
  return (
    <>
      <form
        id='kt_modal_add_role_form'
        className='form fv-plugins-bootstrap5 fv-plugins-framework'
        action='#'
      >
        <div
          className='d-flex flex-column scroll-y me-n7 pe-7'
          id='kt_modal_add_role_scroll'
          data-kt-scroll='true'
          data-kt-scroll-activate='{default: false, lg: true}'
          data-kt-scroll-max-height='auto'
          data-kt-scroll-dependencies='#kt_modal_add_role_header'
          data-kt-scroll-wrappers='#kt_modal_add_role_scroll'
          data-kt-scroll-offset='300px'
          style={{maxHeight: '394px'}}
        >
          <div className='fv-row mb-10 fv-plugins-icon-container'>
            <label className='fs-5 fw-bolder form-label mb-2'>
              <span className='required'>Nombre</span>
            </label>
            <input
              className='form-control form-control-solid'
              placeholder='Nombre del Rol'
              name='role_name'
            />
            <div className='fv-plugins-message-container invalid-feedback'></div>
          </div>
          <div className='fv-row'>
            <label className='fs-5 fw-bolder form-label mb-2'>Permisos del Rol</label>
            <div className='table-responsive'>
              <table className='table align-middle table-row-dashed fs-6 gy-5'>
                <tbody className='text-gray-600 fw-bold'>
                  <tr>
                    <td className='text-gray-800'>
                      Acceso como Administrador
                      <i className='fas fa-exclamation-circle ms-1 fs-7'></i>
                    </td>
                    <td>
                      <label className='form-check form-check-custom form-check-solid me-9'>
                        <input
                          className='form-check-input'
                          type='checkbox'
                          value=''
                          id='kt_roles_select_all'
                        />
                        <span className='form-check-label'>Seleccionar todos</span>
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td className='text-gray-800'>User Management</td>
                    <td>
                      <div className='d-flex'>
                        <label className='form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            value=''
                            name='user_management_read'
                          />
                          <span className='form-check-label'>Ver</span>
                        </label>
                        <label className='form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            value=''
                            name='user_management_write'
                          />
                          <span className='form-check-label'>Editar</span>
                        </label>
                        <label className='form-check form-check-sm form-check-custom form-check-solid'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            value=''
                            name='user_management_create'
                          />
                          <span className='form-check-label'>Crear</span>
                        </label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className='text-gray-800'>Content Management</td>
                    <td>
                      <div className='d-flex'>
                        <label className='form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            value=''
                            name='content_management_read'
                          />
                          <span className='form-check-label'>Ver</span>
                        </label>
                        <label className='form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            value=''
                            name='content_management_write'
                          />
                          <span className='form-check-label'>Editar</span>
                        </label>
                        <label className='form-check form-check-sm form-check-custom form-check-solid'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            value=''
                            name='content_management_create'
                          />
                          <span className='form-check-label'>Crear</span>
                        </label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className='text-gray-800'>Financial Management</td>
                    <td>
                      <div className='d-flex'>
                        <label className='form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            value=''
                            name='financial_management_read'
                          />
                          <span className='form-check-label'>Ver</span>
                        </label>
                        <label className='form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            value=''
                            name='financial_management_write'
                          />
                          <span className='form-check-label'>Editar</span>
                        </label>
                        <label className='form-check form-check-sm form-check-custom form-check-solid'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            value=''
                            name='financial_management_create'
                          />
                          <span className='form-check-label'>Crear</span>
                        </label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className='text-gray-800'>Reporting</td>
                    <td>
                      <div className='d-flex'>
                        <label className='form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            value=''
                            name='reporting_read'
                          />
                          <span className='form-check-label'>Ver</span>
                        </label>
                        <label className='form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            value=''
                            name='reporting_write'
                          />
                          <span className='form-check-label'>Editar</span>
                        </label>
                        <label className='form-check form-check-sm form-check-custom form-check-solid'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            value=''
                            name='reporting_create'
                          />
                          <span className='form-check-label'>Crear</span>
                        </label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className='text-gray-800'>Payroll</td>
                    <td>
                      <div className='d-flex'>
                        <label className='form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            value=''
                            name='payroll_read'
                          />
                          <span className='form-check-label'>Ver</span>
                        </label>
                        <label className='form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            value=''
                            name='payroll_write'
                          />
                          <span className='form-check-label'>Editar</span>
                        </label>
                        <label className='form-check form-check-sm form-check-custom form-check-solid'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            value=''
                            name='payroll_create'
                          />
                          <span className='form-check-label'>Crear</span>
                        </label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className='text-gray-800'>Disputes Management</td>
                    <td>
                      <div className='d-flex'>
                        <label className='form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            value=''
                            name='disputes_management_read'
                          />
                          <span className='form-check-label'>Ver</span>
                        </label>
                        <label className='form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            value=''
                            name='disputes_management_write'
                          />
                          <span className='form-check-label'>Editar</span>
                        </label>
                        <label className='form-check form-check-sm form-check-custom form-check-solid'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            value=''
                            name='disputes_management_create'
                          />
                          <span className='form-check-label'>Crear</span>
                        </label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className='text-gray-800'>API Controls</td>
                    <td>
                      <div className='d-flex'>
                        <label className='form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            value=''
                            name='api_controls_read'
                          />
                          <span className='form-check-label'>Ver</span>
                        </label>
                        <label className='form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            value=''
                            name='api_controls_write'
                          />
                          <span className='form-check-label'>Editar</span>
                        </label>
                        <label className='form-check form-check-sm form-check-custom form-check-solid'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            value=''
                            name='api_controls_create'
                          />
                          <span className='form-check-label'>Crear</span>
                        </label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className='text-gray-800'>Database Management</td>
                    <td>
                      <div className='d-flex'>
                        <label className='form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            value=''
                            name='database_management_read'
                          />
                          <span className='form-check-label'>Ver</span>
                        </label>
                        <label className='form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            value=''
                            name='database_management_write'
                          />
                          <span className='form-check-label'>Editar</span>
                        </label>
                        <label className='form-check form-check-sm form-check-custom form-check-solid'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            value=''
                            name='database_management_create'
                          />
                          <span className='form-check-label'>Crear</span>
                        </label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className='text-gray-800'>Repository Management</td>
                    <td>
                      <div className='d-flex'>
                        <label className='form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            value=''
                            name='repository_management_read'
                          />
                          <span className='form-check-label'>Ver</span>
                        </label>
                        <label className='form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            value=''
                            name='repository_management_write'
                          />
                          <span className='form-check-label'>Editar</span>
                        </label>
                        <label className='form-check form-check-sm form-check-custom form-check-solid'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            value=''
                            name='repository_management_create'
                          />
                          <span className='form-check-label'>Crear</span>
                        </label>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className='text-center pt-15'>
          <button type='reset' className='btn btn-light me-3' data-kt-roles-modal-action='cancel'>
            Descartar
          </button>
          <button type='submit' className='btn btn-primary' data-kt-roles-modal-action='submit'>
            Guardar
          </button>
        </div>
      </form>
    </>
  )
}
