import React from 'react'

interface AcordionItem {
  title: string
  description: string
  Dropdown: any
}

export const NavToolbarItem = ({title, description, Dropdown}: AcordionItem) => {
  return (
    <>
      <div
        className='border-end menu-item menu-lg-down-accordion h-100 flex-fill bd-highlight'
        data-kt-menu-trigger='click'
        data-kt-menu-placement='bottom-start'
      >
        <span className='menu-link rounded-0 border-1 text-start btn btn-active-color-info py-0 h-100'>
          <span className=''>
            <b className='fs-5  mt-4 lh-sm text-nowrap text-primary text-active-info'>{title}</b>
            <br />
            <p className='fs-7 fw-bold text-muted mb-0 text-nowrap'>{description}</p>
          </span>
        </span>
        <Dropdown />
      </div>
    </>
  )
}
