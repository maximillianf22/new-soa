import React from 'react'
import { ContentHeader } from './ContentHeader'
import { IContent } from '../../../Interfaces'

export const Content = ({idRef, active, title, TabContent, linkCreate}:IContent ) => {
  return (
    <>
      <div className={`${idRef} tab-pane fade ${active ? ('show active'): ('')}`} >
        <ContentHeader title={title} linkCreate={linkCreate}/>
        <ul className='nav w-100'>
          <li className='nav-item col w-100'>
            <TabContent />
          </li>
        </ul>
      </div>
    </>
  )
}
