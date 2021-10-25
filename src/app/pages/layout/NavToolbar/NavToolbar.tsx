import React from 'react'

import {
  DropdownSoaang,
  DropdownConfig,
  DropdownOperationalMonitoring,
  DropdownTransparency,
  DropdownExpedients,
} from './Dropdowns'
import {NavToolbarItem} from './NavToolbarItem'

export const NavToolbar = () => {
  return (
    <>
      <div
        className='menu menu-lg-rounded menu-column menu-lg-row menu-state-bg menu-title-gray-700 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-400 fw-bold my-5 my-lg-0 align-items-stretch bd-highlight h-100'
        id='#kt_header_menu'
        data-kt-menu='true'
      >
        <NavToolbarItem
          Dropdown={DropdownSoaang}
          title='SOAANG'
          description='Cuentas, Planes Afiliados etc'
        />
        <NavToolbarItem
          Dropdown={DropdownOperationalMonitoring}
          title='Seguimiento Operativo'
          description='Mapa, Proveedores, etc'
        />
        <NavToolbarItem
          Dropdown={DropdownTransparency}
          title='Transparencia, U-Share'
          description='Estadisticas, informes etc'
        />
        <NavToolbarItem
          Dropdown={DropdownExpedients}
          title='Expedientes'
          description='Monitor de tareas, etapas etc'
        />
        <NavToolbarItem
          Dropdown={DropdownConfig}
          title='Configuraciones'
          description='Usuarios, Iconos, Servicios, etc'
        />
       
      </div>
    </>
  )
}
