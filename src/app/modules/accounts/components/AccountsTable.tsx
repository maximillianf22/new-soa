import React from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../../_metronic/helpers'

export const AccountsTable = () => {
  return (
    <>
      <div className='row pb-5'>
        <div className='col-3 d-none d-sm-none d-md-none d-lg-none d-xl-block'>
          <div className='card h-100px p-5'>
            <div className='d-flex bd-highlight'>
              <div className='p-0 w-100 bd-highlight'>
                <p className='text-muted mb-0 fw-bold fs-7 text-uppercase'>Cuientas</p>
                <h1>Registrados</h1>
              </div>
              <div className='p-0 flex-shrink-1 bd-highlight '>
                <h1 className='m-0 text-white rounded-circle bg-primary p-4'>89</h1>
              </div>
            </div>
            <p className='text-muted fs-7 fw-light text-nowrap my-2'>
              Cuientas Registrados en la platforma
            </p>
          </div>
        </div>
        <div className='col-3 d-none d-sm-none d-md-none d-lg-none d-xl-block'>
          <div className='card h-100px p-5'>
            <div className='d-flex bd-highlight'>
              <div className='p-0 w-100 bd-highlight'>
                <p className='text-muted mb-0 fw-bold fs-7 text-uppercase'>Cuientas</p>
                <h1>Activos</h1>
              </div>
              <div className='p-0 flex-shrink-1 bd-highlight '>
                <h1 className='m-0 text-white rounded-circle bg-primary p-4'>89</h1>
              </div>
            </div>
            <p className='text-muted fs-7 fw-light text-nowrap my-2'>
              Cuientas Activos en la platforma
            </p>
          </div>
        </div>
        <div className='col-3 d-none d-sm-none d-md-none d-lg-none d-xl-block'>
          <div className='card h-100px p-5'>
            <div className='d-flex bd-highlight'>
              <div className='p-0 w-100 bd-highlight'>
                <p className='text-muted mb-0 fw-bold fs-7 text-uppercase'>Cuientas</p>
                <h1>Inactivos</h1>
              </div>
              <div className='p-0 flex-shrink-1 bd-highlight '>
                <h1 className='m-0 text-white rounded-circle bg-primary p-4'>89</h1>
              </div>
            </div>
            <p className='text-muted fs-7 fw-light text-nowrap my-2'>
              Cuientas Inactivos en la platforma
            </p>
          </div>
        </div>
        <div className='col-3 d-none d-sm-none d-md-none d-lg-none d-xl-block'>
          <div className='card h-100px p-5'>
            <div className='d-flex bd-highlight'>
              <div className='p-0 w-100 bd-highlight'>
                <p className='text-muted mb-0 fw-bold fs-7 text-uppercase'>Cuientas</p>
                <h1>Inhabilitados</h1>
              </div>
              <div className='p-0 flex-shrink-1 bd-highlight '>
                <h1 className='m-0 text-white rounded-circle bg-primary p-4'>89</h1>
              </div>
            </div>
            <p className='text-muted fs-7 fw-light text-nowrap my-2'>
              Cuientas Inhabilitados en la platforma
            </p>
          </div>
        </div>
      </div>
      <div className='card'>
        {/* begin::Header */}
        <div className='card-header border-0 pt-5'>
          <h3 className='card-title align-items-start flex-column'>
            <span className='card-label fw-bolder fs-3 mb-1'> Listado de Cuentas</span>
            <span className='text-muted mt-1 fw-bold fs-7'>
              Mas 500 de registradas en la plataforma
            </span>
          </h3>
          <div className='card-toolbar'>
            <a href='/accounts/create' className='btn btn-sm btn-primary'>
              <KTSVG path='media/icons/duotune/arrows/arr075.svg' className='svg-icon-3' />
              Nueva Cuenta
            </a>
          </div>
        </div>
        <div className='card-body py-3'>
          <div className='table-responsive'>
            <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
              <thead>
                <tr className='fw-bolder text-muted'>
                  <th className='text-center'>Descripcion</th>
                  <th className='text-center'>Codigo</th>
                  <th className='text-center'>Beneficiarios</th>
                  <th className='text-center'>Piloto</th>
                  <th className='text-center'>Estado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='text-center'>
                    <p className='text-dark fw-bolder text-hover-primary d-block fs-6'>
                      descripcion
                    </p>
                  </td>
                  <td className='text-center'>
                    <p className='text-dark fw-bolder text-hover-primary d-block fs-6'>codigo</p>
                  </td>
                  <td className='text-center'>
                    <p className='text-dark fw-bolder text-hover-primary d-block fs-6'>
                      SI
                    </p>
                  </td>
                  <td className='text-center'>
                    <p className='text-dark fw-bolder text-hover-primary d-block fs-6'>
                      (305) 267-0098
                    </p>
                  </td>
                  <td className='text-center'>
                    <p className='text-info fw-bolder text-hover-primary d-block fs-6'>
                     <i className='fa fa-circle'></i> Activo
                    </p>
                  </td>
                  <td>
                    <div className='d-flex justify-content-end flex-shrink-0'>
                      <a href='!#' className='btn btn-icon btn-info btn-sm me-1'>
                        <i className='fa fa-eye'></i>
                      </a>
                      <a href='!#' className='btn btn-icon btn-success btn-sm me-1'>
                        <i className='fa fa-edit'></i>
                      </a>
                      <a href='!#' className='btn btn-icon btn-danger btn-sm me-1'>
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
    </>
  )
}
