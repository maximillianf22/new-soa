import clsx from 'clsx'
import React, {FC} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import {HeaderUserMenu, QuickLinks} from '../../../partials'
import {useLayout} from '../../core'

const toolbarButtonMarginClass = 'ms-1 ms-lg-3',
  toolbarButtonHeightClass = 'w-30px h-30px w-md-40px h-md-40px',
  toolbarUserAvatarHeightClass = 'symbol-30px symbol-md-40px',
  toolbarButtonIconSizeClass = 'svg-icon-1'

const MenuInnerLeft: FC = () => {
  const {config} = useLayout()

  return (
    <div className='d-flex align-items-stretch flex-shrink-0'>
      {/* Notifications */}
      <div className={clsx('d-flex align-items-center', toolbarButtonMarginClass)}>
        {/* begin::Drawer toggle */}
        <div
          className={clsx('btn btn-icon btn-active-light-primary', toolbarButtonHeightClass)}
          id='kt_activities_toggle'
        >
          <KTSVG
            path='/media/icons/duotone/General/Notifications1.svg'
            className={toolbarButtonIconSizeClass}
          />
        </div>
        {/* end::Drawer toggle */}
      </div>
      {/* Quick links */}
      <div className={clsx('d-flex align-items-center', toolbarButtonMarginClass)}>
        {/* begin::Menu wrapper */}
        <div
          className={clsx('btn btn-icon btn-active-light-primary', toolbarButtonHeightClass)}
          data-kt-menu-trigger='click'
          data-kt-menu-attach='parent'
          data-kt-menu-placement='bottom-end'
          data-kt-menu-flip='bottom'
        >
          <KTSVG
            path='/media/icons/duotone/Layout/Layout-4-blocks.svg'
            className={toolbarButtonIconSizeClass}
          />
        </div>
        <QuickLinks />
        {/* end::Menu wrapper */}
      </div>

      {/* CHAT */}
      <div className={clsx('d-flex align-items-center', toolbarButtonMarginClass)}>
        {/* begin::Menu wrapper */}
        <div
          className={clsx(
            'btn btn-icon btn-active-light-primary position-relative',
            toolbarButtonHeightClass
          )}
          id='kt_drawer_chat_toggle'
        >
          <KTSVG
            path='/media/icons/duotone/Communication/Group-chat.svg'
            className={toolbarButtonIconSizeClass}
          />

          <span className='bullet bullet-dot bg-success h-6px w-6px position-absolute translate-middle top-0 start-50 animation-blink'></span>
        </div>
        {/* end::Menu wrapper */}
      </div>

      {/* begin::User */}
      <div
        className={clsx('d-flex align-items-center me-4', toolbarButtonMarginClass)}
        id='kt_header_user_menu_toggle'
        data-bs-original-title=''
        title=''
      >
        <div
          className='btn btn-active-light d-flex align-items-center bg-hover-light py-2 px-2 px-md-3'
          data-kt-menu-trigger='click'
          data-kt-menu-attach='parent'
          data-kt-menu-placement='bottom-end'
          data-kt-menu-flip='bottom'
        >
          <div className='d-none d-md-flex flex-column align-items-end justify-content-center me-2'>
            <span className='text-white fs-7 fw-bold lh-1 mb-2'>Bienvenido</span>
            <span className='text-muted fs-base fw-bolder lh-1'>Richard</span>
          </div>
          <div
            className={clsx('cursor-pointer symbol', toolbarUserAvatarHeightClass)}
            data-kt-menu-trigger='click'
            data-kt-menu-attach='parent'
            data-kt-menu-placement='bottom-end'
            data-kt-menu-flip='bottom'
          >
            <img src={toAbsoluteUrl('/media/avatars/150-2.jpg')} alt='metronic' />
          </div>
        </div>
        <HeaderUserMenu />
      </div>
      {/* end::User */}

      {/* begin::Aside Toggler */}
      {config.header.left === 'menu' && (
        <div className='d-flex align-items-center d-lg-none ms-2 me-n3' title='Show header menu'>
          <div
            className='btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px'
            id='kt_header_menu_mobile_toggle'
          >
            <KTSVG path='/media/icons/duotone/Text/Toggle-Right.svg' className='svg-icon-1' />
          </div>
        </div>
      )}
    </div>
  )
}

export {MenuInnerLeft}
