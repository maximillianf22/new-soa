import React from 'react'
import {TabHeader} from './TabHeader'

interface Tab{
    idRef: string
    active?: boolean
    title: string
    TabContent: any
}

export const Tab = ({idRef, active, title, TabContent}:Tab) => {
  return (
    <>
      <div className={`tab-pane fade ${active ? ('show active'): ('')}`} id={idRef}>
        <TabHeader title={title}/>
        <ul className='nav w-100'>
          <li className='nav-item col w-100'>
            <TabContent />
          </li>
        </ul>
      </div>
    </>
  )
}
