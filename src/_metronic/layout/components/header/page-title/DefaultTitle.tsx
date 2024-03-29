import clsx from 'clsx'
import React, {FC} from 'react'
import {Link} from 'react-router-dom'
import {useLayout} from '../../../core/LayoutProvider'
import {usePageData} from '../../../core/PageData'
import { SelectPlatforms } from '../../../../../app/pages/layout/SelectPlatforms/SelectPlatforms'

const DefaultTitle: FC = () => {
  const {pageTitle, pageDescription, pageBreadcrumbs} = usePageData()
  const {config, attributes, classes} = useLayout()
  return (
    <div
      {...attributes.pageTitle}
      className={clsx('page-title d-flex pb-lg-5 pb-0 pt-lg-0 pt-5 justify-content-between ', classes.pageTitle.join(' '))}
    >
      <div className="d-flex">
      {/* begin::Title */}
      {pageTitle && (
        <h1 className='d-flex align-items-center text-dark fw-bolder my-1 fs-3'>
          {pageTitle}
          {pageDescription && config.pageTitle && config.pageTitle.description && (
            <>
              <span className='h-20px border-gray-200 border-start ms-3 mx-2'></span>
              <small className='text-muted fs-7 fw-bold my-1 ms-1'>{pageDescription}</small>
            </>
          )}
        </h1>
      )}
      {/* end::Title */}

      {pageBreadcrumbs &&
        pageBreadcrumbs.length > 0 &&
        config.pageTitle &&
        config.pageTitle.breadCrumbs && (
          <>
            {config.pageTitle.direction === 'row' && (
              <span className='h-20px border-gray-200 border-start mx-4'></span>
            )}
            <ul className='breadcrumb breadcrumb-separatorless fw-bold fs-7 my-1'>
              {Array.from(pageBreadcrumbs).map((item, index) => (
                <li
                  className={clsx('breadcrumb-item  d-none d-sm-none d-md-block d-lg-block text-nowrap', {
                    'text-dark': !item.isSeparator && item.isActive,
                    'text-muted': !item.isSeparator && !item.isActive,
                  })}
                  key={`${item.path}${index}`}
                >
                  {!item.isSeparator ? (
                    <Link className='text-muted text-hover-primary' to={item.path}>
                      {item.title}
                    </Link>
                  ) : (
                    <span className='bullet bg-gray-200 w-5px h-2px  d-none d-sm-none d-md-block d-lg-block text-nowrap'></span>
                  )}
                </li>
              ))}
              <li className='breadcrumb-item text-dark  d-none d-sm-none d-md-block d-lg-block text-nowrap'>{pageTitle}</li>
            </ul>
              
          </>
        )}
        </div>
        <SelectPlatforms />
    </div>
  )
}

export {DefaultTitle}
