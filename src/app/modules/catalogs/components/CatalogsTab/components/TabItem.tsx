import React from 'react'
import { ITabItem } from '../../../Interfaces'

export const TabItem = ({tabRef, name, active}:ITabItem ) => {
  return (
    <>
      <li className='nav-item col h-35px'>
        <a
          className={`nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary fw-bolder px-4 me-1 ${
            active ? 'active' : ''
          }`}
          data-bs-toggle='tab'
          href={tabRef}
        >
          {name}
        </a>
      </li>
    </>
  )
}
