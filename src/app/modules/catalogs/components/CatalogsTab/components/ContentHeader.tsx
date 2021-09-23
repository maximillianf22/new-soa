import React from 'react'
import { ContentHeaderDropdown } from './ContentHeaderDropdown'
import { IContentHeader } from '../../../Interfaces'

export const ContentHeader = ({title, linkCreate}: IContentHeader) => {
  return (
    <>
      <div className='card-header border-0 p-0 ps-2 pe-4'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder fs-3 mb-1'>Listado de {title}</span>
          <span className='text-muted mt-1 fw-bold fs-7'>234 {title} registradas</span>
        </h3>
        <div className='card-toolbar'>
          <a href={linkCreate} className='btn btn-clean btn-sm btn-icon btn-primary me-2'>
            <i className='text-white fa fa-plus'></i>
          </a>
          <button
            type='button'
            className='btn btn-clean btn-sm btn-icon  btn-info me-n3'
            data-kt-menu-trigger='click'
            data-kt-menu-placement='bottom-end'
            data-kt-menu-flip='top-end'
          >
            <i className='fa fa-filter'></i>
          </button>
          <ContentHeaderDropdown />
        </div>
      </div>
    </>
  )
}
