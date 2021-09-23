import React from 'react'
import{ IItemDropdown } from '../Interfaces'

export const ItemDropdown = ({link, icon='caret-right', title}:IItemDropdown ) => {
    return (
        <>
           <div className='menu-item me-lg-1'>
              <a className='menu-link py-3' href={link}>
                <span className='menu-bullet'>
                  <span className={`fa-sm fa fa-${icon}`}></span>
                </span>
                <span className='menu-title'>{title}</span>
              </a>
            </div> 
        </>
    )
}
