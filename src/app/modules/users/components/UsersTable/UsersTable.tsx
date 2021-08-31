/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom';
import {UsersStats} from './UsersStats'

type Props = {
  className?: string
}

const UsersTable: React.FC<Props> = ({className}) => {
  return (
<>
    <UsersStats />
    <div className="card p-5">
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder fs-3 mb-1'>Listado de Usuarios</span>
          <span className='text-muted mt-1 fw-bold fs-7'>439 Usuarios registrados</span>
        </h3>
        <div
          className='card-toolbar'
          data-bs-toggle='tooltip'
          data-bs-placement='top'
          data-bs-trigger='hover'
        >
          <Link
            to='/usuarios/crear'
            className='btn btn-sm btn-primary'
            // data-bs-toggle='modal'
            // data-bs-target='#kt_modal_invite_friends'
          >
            <i className='fas fa-plus'></i>
            Nuevo
          </Link>
          <a className='btn btn-info btn-sm btn-icon ms-2'>
            <i className='fa fa-filter'></i>
          </a>
          <a className='btn btn-success btn-sm btn-icon ms-2'>
            <i className='fa fa-download'></i>
          </a>
          <a className='btn btn-secondary btn-sm btn-icon ms-2'>
            <i className='fa fa-cog'></i>
          </a>
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          {/* begin::Table */}
          <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4 mb-0'>
            {/* begin::Table head */}
            <thead>
              <tr className='fw-bolder text-muted'>
                <th className='min-w-150px'>Nombre</th>
                <th className='min-w-130px'>Correo</th>
                <th className='min-w-130px'>Usuario</th>
                <th className='min-w-130px'>Rol</th>
                <th className='min-w-100px text-end'>Opciones</th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              <tr>
                <td>
                  <div className='d-flex align-items-center'>
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bolder text-hover-primary fs-6'>
                        Ana Simmons
                      </a>
                      <span className='text-muted fw-bold text-muted d-block fs-7'>
                        CC: 1007345398
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block fs-6'>
                    Ana@demo.com
                  </a>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block fs-6'>
                    ASOANG
                  </a>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block fs-6'>
                    Coordinador
                  </a>
                </td>
                <td>
                  <div className='d-flex justify-content-end flex-shrink-0'>
                    <a href='#' className='btn btn-icon btn-info btn-sm me-1'>
                      <i className='fa fa-eye'></i>
                    </a>
                    <a href='#' className='btn btn-icon btn-success btn-sm me-1'>
                      <i className='fa fa-edit'></i>
                    </a>
                    <a href='#' className='btn btn-icon btn-danger btn-sm'>
                      <i className='fa fa-trash'></i>
                    </a>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='d-flex align-items-center'>
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bolder text-hover-primary fs-6'>
                        Ana Simmons
                      </a>
                      <span className='text-muted fw-bold text-muted d-block fs-7'>
                        CC: 1007345398
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block fs-6'>
                    Ana@demo.com
                  </a>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block fs-6'>
                    ASOANG
                  </a>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block fs-6'>
                    Coordinador
                  </a>
                </td>
                <td>
                  <div className='d-flex justify-content-end flex-shrink-0'>
                    <a href='#' className='btn btn-icon btn-info btn-sm me-1'>
                      <i className='fa fa-eye'></i>
                    </a>
                    <a href='#' className='btn btn-icon btn-success btn-sm me-1'>
                      <i className='fa fa-edit'></i>
                    </a>
                    <a href='#' className='btn btn-icon btn-danger btn-sm'>
                      <i className='fa fa-trash'></i>
                    </a>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='d-flex align-items-center'>
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bolder text-hover-primary fs-6'>
                        Ana Simmons
                      </a>
                      <span className='text-muted fw-bold text-muted d-block fs-7'>
                        CC: 1007345398
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block fs-6'>
                    Ana@demo.com
                  </a>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block fs-6'>
                    ASOANG
                  </a>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block fs-6'>
                    Coordinador
                  </a>
                </td>
                <td>
                  <div className='d-flex justify-content-end flex-shrink-0'>
                    <a href='#' className='btn btn-icon btn-info btn-sm me-1'>
                      <i className='fa fa-eye'></i>
                    </a>
                    <a href='#' className='btn btn-icon btn-success btn-sm me-1'>
                      <i className='fa fa-edit'></i>
                    </a>
                    <a href='#' className='btn btn-icon btn-danger btn-sm'>
                      <i className='fa fa-trash'></i>
                    </a>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='d-flex align-items-center'>
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bolder text-hover-primary fs-6'>
                        Ana Simmons
                      </a>
                      <span className='text-muted fw-bold text-muted d-block fs-7'>
                        CC: 1007345398
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block fs-6'>
                    Ana@demo.com
                  </a>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block fs-6'>
                    ASOANG
                  </a>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block fs-6'>
                    Coordinador
                  </a>
                </td>
                <td>
                  <div className='d-flex justify-content-end flex-shrink-0'>
                    <a href='#' className='btn btn-icon btn-info btn-sm me-1'>
                      <i className='fa fa-eye'></i>
                    </a>
                    <a href='#' className='btn btn-icon btn-success btn-sm me-1'>
                      <i className='fa fa-edit'></i>
                    </a>
                    <a href='#' className='btn btn-icon btn-danger btn-sm'>
                      <i className='fa fa-trash'></i>
                    </a>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='d-flex align-items-center'>
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bolder text-hover-primary fs-6'>
                        Ana Simmons
                      </a>
                      <span className='text-muted fw-bold text-muted d-block fs-7'>
                        CC: 1007345398
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block fs-6'>
                    Ana@demo.com
                  </a>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block fs-6'>
                    ASOANG
                  </a>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block fs-6'>
                    Coordinador
                  </a>
                </td>
                <td>
                  <div className='d-flex justify-content-end flex-shrink-0'>
                    <a href='#' className='btn btn-icon btn-info btn-sm me-1'>
                      <i className='fa fa-eye'></i>
                    </a>
                    <a href='#' className='btn btn-icon btn-success btn-sm me-1'>
                      <i className='fa fa-edit'></i>
                    </a>
                    <a href='#' className='btn btn-icon btn-danger btn-sm'>
                      <i className='fa fa-trash'></i>
                    </a>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='d-flex align-items-center'>
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bolder text-hover-primary fs-6'>
                        Ana Simmons
                      </a>
                      <span className='text-muted fw-bold text-muted d-block fs-7'>
                        CC: 1007345398
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block fs-6'>
                    Ana@demo.com
                  </a>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block fs-6'>
                    ASOANG
                  </a>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block fs-6'>
                    Coordinador
                  </a>
                </td>
                <td>
                  <div className='d-flex justify-content-end flex-shrink-0'>
                    <a href='#' className='btn btn-icon btn-info btn-sm me-1'>
                      <i className='fa fa-eye'></i>
                    </a>
                    <a href='#' className='btn btn-icon btn-success btn-sm me-1'>
                      <i className='fa fa-edit'></i>
                    </a>
                    <a href='#' className='btn btn-icon btn-danger btn-sm'>
                      <i className='fa fa-trash'></i>
                    </a>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='d-flex align-items-center'>
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bolder text-hover-primary fs-6'>
                        Ana Simmons
                      </a>
                      <span className='text-muted fw-bold text-muted d-block fs-7'>
                        CC: 1007345398
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block fs-6'>
                    Ana@demo.com
                  </a>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block fs-6'>
                    ASOANG
                  </a>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block fs-6'>
                    Coordinador
                  </a>
                </td>
                <td>
                  <div className='d-flex justify-content-end flex-shrink-0'>
                    <a href='#' className='btn btn-icon btn-info btn-sm me-1'>
                      <i className='fa fa-eye'></i>
                    </a>
                    <a href='#' className='btn btn-icon btn-success btn-sm me-1'>
                      <i className='fa fa-edit'></i>
                    </a>
                    <a href='#' className='btn btn-icon btn-danger btn-sm'>
                      <i className='fa fa-trash'></i>
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>
        {/* end::Table container */}
      </div>
      {/* begin::Body */}
    </div>
    </>
  )
}

export {UsersTable}
