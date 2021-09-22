import React from 'react'
import {DropdownSoaang} from './Dropdowns/DropdownSoaang'
import {NavToolbarItem} from './NavToolbarItem'

export const NavToolbar = () => {
  return (
    <>
      <div
        className='menu menu-lg-rounded menu-column menu-lg-row menu-state-bg menu-title-gray-700 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-400 fw-bold my-5 my-lg-0 align-items-stretch'
        id='#kt_header_menu'
        data-kt-menu='true'
      >
        <NavToolbarItem title='SOAANG' description='Cuentas, Planes Afiliados etc' />


        
        <div
          className='menu-item menu-lg-down-accordion me-lg-1'
          data-kt-menu-trigger='click'
          data-kt-menu-placement='bottom-start'
        >
          <span className='menu-link py-1'>
            <span className='border-end rounded-0 border-1 text-start btn btn-active-color-info py-0'>
              <b className='fs-5  mt-4 lh-sm'>Seguimiento Operativo</b>
              <br />
              <p className='fs-7 fw-bold text-muted mb-0'>Mapa, Proveedores, etc</p>
            </span>
          </span>
          <DropdownSoaang />
        </div>



        <div
          className='menu-item menu-lg-down-accordion me-lg-1'
          data-kt-menu-trigger='click'
          data-kt-menu-placement='bottom-start'
        >
          <span className='menu-link py-1'>
            <span className='border-end rounded-0 border-1 text-start btn btn-active-color-info py-0'>
              <b className='fs-5  mt-4 lh-sm'>Transparencia, U-Share</b>
              <br />
              <p className='fs-7 fw-bold text-muted mb-0'>Estadisticas, informes etc</p>
            </span>
          </span>
          <DropdownSoaang />
        </div>
        <div
          className='menu-item menu-lg-down-accordion me-lg-1'
          data-kt-menu-trigger='click'
          data-kt-menu-placement='bottom-start'
        >
          <span className='menu-link py-1'>
            <span className='border-end rounded-0 border-1 text-start btn btn-active-color-info py-0'>
              <b className='fs-5  mt-4 lh-sm'>Expedientes</b>
              <br />
              <p className='fs-7 fw-bold text-muted mb-0'>Monitor de tareas, etapas etc</p>
            </span>
          </span>
          <DropdownSoaang />
        </div>
        <div
          className='menu-item menu-lg-down-accordion me-lg-1'
          data-kt-menu-trigger='click'
          data-kt-menu-placement='bottom-start'
        >
          <span className='menu-link py-1'>
            <span className=' rounded-0 border-0 text-start btn btn-active-color-info py-0'>
              <b className='fs-5  mt-4 lh-sm'>Configuraciones</b>
              <br />
              <p className='fs-7 fw-bold text-muted mb-0'>Usuarios, Iconos, Servicios, etc</p>
            </span>
          </span>
          <DropdownSoaang />
        </div>
      </div>
    </>
  )
}
