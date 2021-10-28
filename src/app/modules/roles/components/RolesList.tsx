import React from 'react'
import { ModalForm } from './ModalForm'

export const RolesList = () => {
  return (
    <>
      <div className='row row-cols-1 row-cols-md-3 row-cols-xl-4 g-5 g-xl-9'>
        <div className='col-md-3'>
          <div className='card card-flush h-md-100'>
            <div className='card-header'>
              <div className='card-title'>
                <h2>Administrador</h2>
              </div>
            </div>
            <div className='card-body pt-1'>
              <div className='fw-bolder text-gray-600 mb-5'>Total de usuarios con este rol: 5</div>
              <div className='d-flex flex-column text-gray-600'>
                <div className='d-flex align-items-center py-2'>
                  <span className='bullet bg-primary me-3'></span>All Admin Controls
                </div>
                <div className='d-flex align-items-center py-2'>
                  <span className='bullet bg-primary me-3'></span>View and Edit Financial Summaries
                </div>
                <div className='d-flex align-items-center py-2'>
                  <span className='bullet bg-primary me-3'></span>Enabled Bulk Reports
                </div>
                <div className='d-flex align-items-center py-2'>
                  <span className='bullet bg-primary me-3'></span>View and Edit Payouts
                </div>
                <div className='d-flex align-items-center py-2'>
                  <span className='bullet bg-primary me-3'></span>View and Edit Disputes
                </div>
                <div className='d-flex align-items-center py-2'>
                  <span className='bullet bg-primary me-3'></span>
                  <em>and 7 more...</em>
                </div>
              </div>
            </div>
            <div className='card-footer flex-wrap pt-0'>
              <a
                href='view'
                className='btn btn-light btn-active-primary my-1 me-2'
              >
                Detalles
              </a>
              <button
                type='button'
                className='btn btn-light btn-active-light-primary my-1'
                data-bs-toggle='modal'
                data-bs-target='#kt_modal_role'
              >
                Editar
              </button>
            </div>
          </div>
        </div>
        <div className='col-md-3'>
          <div className='card card-flush h-md-100'>
            <div className='card-header'>
              <div className='card-title'>
                <h2>Supervisor</h2>
              </div>
            </div>
            <div className='card-body pt-1'>
              <div className='fw-bolder text-gray-600 mb-5'>Total de usuarios con este rol: 14</div>
              <div className='d-flex flex-column text-gray-600'>
                <div className='d-flex align-items-center py-2'>
                  <span className='bullet bg-primary me-3'></span>Some Admin Controls
                </div>
                <div className='d-flex align-items-center py-2'>
                  <span className='bullet bg-primary me-3'></span>View Financial Summaries only
                </div>
                <div className='d-flex align-items-center py-2'>
                  <span className='bullet bg-primary me-3'></span>View and Edit API Controls
                </div>
                <div className='d-flex align-items-center py-2'>
                  <span className='bullet bg-primary me-3'></span>View Payouts only
                </div>
                <div className='d-flex align-items-center py-2'>
                  <span className='bullet bg-primary me-3'></span>View and Edit Disputes
                </div>
                <div className='d-flex align-items-center py-2'>
                  <span className='bullet bg-primary me-3'></span>
                  <em>and 3 more...</em>
                </div>
              </div>
            </div>
            <div className='card-footer flex-wrap pt-0'>
              <a
                href='view'
                className='btn btn-light btn-active-primary my-1 me-2'
              >
                Detalles
              </a>
              <button
                type='button'
                className='btn btn-light btn-active-light-primary my-1'
                data-bs-toggle='modal'
                data-bs-target='#kt_modal_role'
              >
                Editar
              </button>
            </div>
          </div>
        </div>
        <div className='col-md-3'>
          <div className='card card-flush h-md-100'>
            <div className='card-header'>
              <div className='card-title'>
                <h2>Coordinador</h2>
              </div>
            </div>
            <div className='card-body pt-1'>
              <div className='fw-bolder text-gray-600 mb-5'>Total de usuarios con este rol: 4</div>
              <div className='d-flex flex-column text-gray-600'>
                <div className='d-flex align-items-center py-2'>
                  <span className='bullet bg-primary me-3'></span>No Admin Controls
                </div>
                <div className='d-flex align-items-center py-2'>
                  <span className='bullet bg-primary me-3'></span>View and Edit Financial Summaries
                </div>
                <div className='d-flex align-items-center py-2'>
                  <span className='bullet bg-primary me-3'></span>Enabled Bulk Reports
                </div>
                <div className='d-flex align-items-center py-2'>
                  <span className='bullet bg-primary me-3'></span>View Payouts only
                </div>
                <div className='d-flex align-items-center py-2'>
                  <span className='bullet bg-primary me-3'></span>View Disputes only
                </div>
                <div className='d-flex align-items-center py-2'>
                  <span className='bullet bg-primary me-3'></span>
                  <em>and 2 more...</em>
                </div>
              </div>
            </div>
            <div className='card-footer flex-wrap pt-0'>
              <a
                href='view'
                className='btn btn-light btn-active-primary my-1 me-2'
              >
                Detalles
              </a>
              <button
                type='button'
                className='btn btn-light btn-active-light-primary my-1'
                data-bs-toggle='modal'
                data-bs-target='#kt_modal_role'
              >
                Editar
              </button>
            </div>
          </div>
        </div>
        <div className='col-md-3'>
          <div className='card card-flush h-md-100'>
            <div className='card-header'>
              <div className='card-title'>
                <h2>Soporte</h2>
              </div>
            </div>
            <div className='card-body pt-1'>
              <div className='fw-bolder text-gray-600 mb-5'>Total de usuarios con este rol: 23</div>
              <div className='d-flex flex-column text-gray-600'>
                <div className='d-flex align-items-center py-2'>
                  <span className='bullet bg-primary me-3'></span>No Admin Controls
                </div>
                <div className='d-flex align-items-center py-2'>
                  <span className='bullet bg-primary me-3'></span>View Financial Summaries only
                </div>
                <div className='d-flex align-items-center py-2'>
                  <span className='bullet bg-primary me-3'></span>View Payouts only
                </div>
                <div className='d-flex align-items-center py-2'>
                  <span className='bullet bg-primary me-3'></span>View and Edit Disputes
                </div>
                <div className='d-flex align-items-center py-2'>
                  <span className='bullet bg-primary me-3'></span>Response to Customer Feedback
                </div>
              </div>
            </div>
            <div className='card-footer flex-wrap pt-0'>
              <a
                href='view'
                className='btn btn-light btn-active-primary my-1 me-2'
              >
                Detalles
              </a>
              <button
                type='button'
                className='btn btn-light btn-active-light-primary my-1'
                data-bs-toggle='modal'
                data-bs-target='#kt_modal_role'
              >
                Editar
              </button>
            </div>
          </div>
        </div>
        <div className='col-md-3'>
          <div className='card card-flush h-md-100'>
            <div className='card-header'>
              <div className='card-title'>
                <h2>Prueba</h2>
              </div>
            </div>
            <div className='card-body pt-1'>
              <div className='fw-bolder text-gray-600 mb-5'>Total de usuarios con este rol: 546</div>
              <div className='d-flex flex-column text-gray-600'>
                <div className='d-flex align-items-center py-2'>
                  <span className='bullet bg-primary me-3'></span>No Admin Controls
                </div>
                <div className='d-flex align-items-center py-2'>
                  <span className='bullet bg-primary me-3'></span>View Financial Summaries only
                </div>
                <div className='d-flex align-items-center py-2'>
                  <span className='bullet bg-primary me-3'></span>View Bulk Reports only
                </div>
                <div className='d-flex align-items-center py-2'>
                  <span className='bullet bg-primary me-3'></span>View Payouts only
                </div>
                <div className='d-flex align-items-center py-2'>
                  <span className='bullet bg-primary me-3'></span>View Disputes only
                </div>
              </div>
            </div>
            <div className='card-footer flex-wrap pt-0'>
              <a
                href='view'
                className='btn btn-light btn-active-primary my-1 me-2'
              >
                Detalles
              </a>
              <button
                type='button'
                className='btn btn-light btn-active-light-primary my-1'
                data-bs-toggle='modal'
                data-bs-target='#kt_modal_role'
              >
                Editar
              </button>
            </div>
          </div>
        </div>
        <div className='ol-md-4'>
          <div className='card h-md-100'>
            <div className='card-body d-flex flex-center'>
              <button
                type='button'
                className='btn btn-clear d-flex flex-column flex-center'
                data-bs-toggle='modal'
                data-bs-target='#kt_modal_role'
              >
                <i className='fa fa-plus display-1 fs-3x mw-100 mh-150px mb-10'></i>
                <div className='fw-bolder fs-3 text-gray-600 text-hover-primary'>Nuevo Rol</div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <ModalForm/>
    </>
  )
}
