import React from 'react'

interface TabHead{
  tabRef: string
  name: string
  active?: string
}

export const TabHead = ({tabRef, name, active}: TabHead) => {
  return (
    <>
        <li className='nav-item col h-35px'>
            <a
              className={`nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary fw-bolder px-4 me-1 ${active}` }
              data-bs-toggle='tab'
              href={tabRef}
            >
              {name}
            </a>
          </li>
        
    </>
  )
}
