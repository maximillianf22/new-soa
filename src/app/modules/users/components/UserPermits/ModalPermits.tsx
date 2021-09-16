import React from 'react'
import { TabNotifications } from './TabNotifications'
import { TabPermits } from './TabPermits'

const optionsProfile = [
  {value: 'admin', label: 'Administrador'},
  {value: 'supervisor', label: 'Supervisor'},
  {value: 'coordinador', label: 'Coordinador'},
]

export const ModalPermits = () => {
  return (
    <>
      <div className='modal bg-secondary fade' tabIndex={-1} id='kt_modal_permits'>
        <div className='modal-dialog bg-secondary modal-fullscreen mx-10 bg-opacity-0'>
          <div className='modal-content bg-secondary shadow-none '>
            <div className='modal-header w-100 border-0 pb-0'>
              <div className='card w-100'>
                <div className='card-body'>
                  <div className='card-header border-0 p-0'>
                    <h3 className='card-title align-items-start flex-column'>
                      <span className='card-label fw-bolder fs-3 mb-1'>
                        Configuracion de permisos
                      </span>
                      <span className='text-muted mt-1 fw-bold fs-7'>
                        Configura los permisos y notificaciones
                      </span>
                    </h3>
                    <h3 className='card-title card-toolbar align-items-end flex-column'>
                      <span className='card-label fw-bolder fs-3 mb-1'>Cliente: MAS Servicios</span>
                    </h3>
                  </div>
                  <ul className='nav nav-tabs nav-line-tabs nav-line-tabs-2x mb-5 fs-6'>
                    <li className='nav-item'>
                      <a className='nav-link active' data-bs-toggle='tab' href='#kt_tab_pane_4'>
                        Permisos
                      </a>
                    </li>
                    <li className='nav-item'>
                      <a className='nav-link' data-bs-toggle='tab' href='#kt_tab_pane_5'>
                        Notificaciones
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='modal-body'>
              <div className='tab-content' id='myTabContent'>
                <div className='tab-pane fade show active' id='kt_tab_pane_4' role='tabpanel'>
                  <TabPermits />
                </div>
                <div className='tab-pane fade' id='kt_tab_pane_5' role='tabpanel'>
                  <TabNotifications />
                </div>
              </div>
            </div>
            <div className='modal-footer border-0'>
              <button type='button' className='btn btn-light' data-bs-dismiss='modal'>
                Cerrar
              </button>
              <button type='button' className='btn btn-primary'>
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
