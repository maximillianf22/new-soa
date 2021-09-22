import React from 'react'

interface AcordionItem {
    title: string;
    description: string;
}

export const NavToolbarItem = ({title, description}: AcordionItem) => {
    return (
        <>
            <div
          className='menu-item menu-lg-down-accordion me-lg-1'
          data-kt-menu-trigger='click'
          data-kt-menu-placement='bottom-start'
        >
          <span className='menu-link py-1'>
            <span className='border-end rounded-0 border-1 text-start btn btn-active-color-info py-0'>
              <b className='fs-5  mt-4 lh-sm'>{title}</b>
              <br />
              <p className='fs-7 fw-bold text-muted mb-0'>{description}</p>
            </span>
          </span>

        {/* aqui debe estar */}

        </div>
        </>
    )
}
