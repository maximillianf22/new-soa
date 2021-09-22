import clsx from 'clsx'
import React from 'react'
import {useLayout} from '../../core/LayoutProvider'
import {Nav} from 'react-bootstrap-v5'
import { NavToolbar } from '../../../../app/pages/layout/NavToolbar/NavToolbar'

const Toolbar: React.FC = () => {
  const {classes} = useLayout()

  return (
    <div className='toolbar d-none d-sm-block bd-highlight px-0 py-0 d-md-none d-lg-block d-sm-none d-none' id='kt_toolbar'>
      {/* begin::Container */}
      <div
        id='kt_toolbar_container'
        className={clsx(classes.toolbarContainer.join(' '), 'h-100 d-flex flex-stack bd-highlight px-0')}
      >
        {/* begin::Actions */}
        <div className='d-flex align-items-center h-100 w-100'>
          {/* begin::Wrapper */}
          <div className='w-100 h-100'>
            <NavToolbar />
          </div>
          {/* end::Wrapper */}
        </div>
        {/* end::Actions */}
      </div>
      {/* end::Container */}
    </div>
  )
}
export {Toolbar}

// TODO: Agregar esto al menu en el responsive