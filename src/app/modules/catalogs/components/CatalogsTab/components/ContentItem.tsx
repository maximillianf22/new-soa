import React from 'react'
import { toAbsoluteUrl } from '../../../../../../_metronic/helpers'

interface IContentItem {
  vip?: boolean
  name: string
  pilot?: string
  count: number
  tableRef: string
}

export const ContentItem = ({vip, name, pilot, count, tableRef}:IContentItem ) => {
  return (
    <>
      <a
        className='text-start d-flex bd-highlight nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary w-100 fw-bolder px-0 my-0'
        data-bs-toggle='tab'
        href={tableRef}
      >
        <div className='symbol symbol-45px mx-2 flex-fill bd-highlight'>
          <span className={`symbol-label ${vip ? 'bg-danger' : ''}`}>
            <img
              src={toAbsoluteUrl('/media/svg/brand-logos/plurk.svg')}
              className='h-50 align-self-center'
              alt=''
            />
          </span>
        </div>
        <div className='text-dark fw-bolder text-hover-primary mb-1 fs-6 flex-fill bd-highlight'>
          <b className={`fs-5 text-start w-100 ${vip ? 'text-danger' : ''}`}>{name}</b>
          <p className={`text-start fs-help mt-1 mb-0 ${vip ? 'text-danger' : ''}`}>Piloto:{pilot}</p>
        </div>
        <div className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary flex-fill bd-highlight'>
          {count}
        </div>
      </a>
    </>
  )
}
