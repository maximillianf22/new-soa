import React from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../../../../_metronic/helpers'
import {ITableHeader} from '../../../Interfaces'
import {ContentHeaderDropdown} from '../../CatalogsTab/components/ContentHeaderDropdown'

export const TableHeader = ({name, linkCreate, pilot, vip}: ITableHeader) => {
  return (
    <div>
      <h3 className='card-title align-items-start flex-column'>
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
      </h3>
      <div className='card-toolbar'>
        <div className='d-flex align-items-center position-relative d-sm-none d-none d-md-block d-lg-block'>
          <form>
            <button type='submit' className='btn btn-link'>
              <KTSVG
                path='/media/icons/duotone/General/Search.svg'
                className='svg-icon-2 svg-icon-lg-1 svg-icon-gray-500 position-absolute top-50 ms-5 translate-middle-y'
              />
            </button>

            <input
              name='search'
              type='text'
              id='kt_filter_search_tableHeader'
              className='form-control form-control-solid form-control-sm w-250px ps-15'
              placeholder='Search'
            />
          </form>
        </div>
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
  )
}
