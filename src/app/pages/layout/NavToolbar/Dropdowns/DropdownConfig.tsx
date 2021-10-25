import React from 'react'
import {ItemDropdown} from './ItemDropdown'

export const DropdownConfig = () => {
  return (
    <>
      <div
        className='menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-rounded-0 py-lg-3 w-lg-300px'
        data-kt-menu-dismiss='true'
      >
        <div
          className='menu-item menu-lg-down-accordion me-lg-1'
          data-kt-menu-trigger="{default:'click', lg: 'hover'}"
          data-kt-menu-placement='right-start'
        >
          <ItemDropdown title='Servicios Disponibles' link='/services/home' />
          <ItemDropdown title='Items de costos' link='/item-costs/home' />
        </div>
      </div>
    </>
  )
}
