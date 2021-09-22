import React from 'react'
import { ContentHeader } from './ContentHeader'
import { ContentItem } from './ContentItem'

interface Content{
    idRef: string
    active?: boolean
    title: string
    linkCreate: string
    TabContent: any
}

export const Content = ({idRef, active, title, TabContent, linkCreate}:Content) => {
  return (
    <>
      <div className={`tab-pane fade ${active ? ('show active'): ('')}`} id={idRef}>
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
