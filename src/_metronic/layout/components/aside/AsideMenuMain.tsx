/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
// import {useIntl} from 'react-intl'
import {AsideMenuItem} from './AsideMenuItem'

export function AsideMenuMain() {
  // const intl = useIntl()

  return (
    <>
      <AsideMenuItem
        to='/'
        icon='/media/icons/duotone/Home/Home.svg'
        title='Inicio'
        fontIcon='bi-layers'
      />
      <AsideMenuItem
        to=''
        icon='/media/icons/duotone/Interface/Grid.svg'
        title='Monitor de Novedades'
        // title={intl.formatMessage({id: 'MENU.DASHBOARD'})} De esta forma se usa la internacionalizacion (Idioma)
        fontIcon='bi-app-indicator'
      />
      <AsideMenuItem
        className="active"
        to='/users/home'
        icon='/media/icons/duotone/Communication/Group.svg'
        title='Usuarios'
        fontIcon='bi-layers'
      />
      <AsideMenuItem
        to=''
        icon='/media/icons/duotone/Map/Direction2.svg'
        title='Seguimiento Operativo'
        fontIcon='bi-layers'
      />
      <AsideMenuItem
        to=''
        icon='/media/icons/duotone/Code/Settings4.svg'
        title='Configuracion'
        fontIcon='bi-layers'
      />
     </>
  )
}
