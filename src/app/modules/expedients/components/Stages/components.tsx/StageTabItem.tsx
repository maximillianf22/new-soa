import React from 'react'
import { IStageTabItem } from '../../../Interfaces/models'

export const StageTabItem = ({href, number, title, description}: IStageTabItem) => {
    return (
        <>
           <a className='nav-link btn btn-flex btn-icon-gray-900 btn-text-gray-900 btn-active-primary px-4 m-0' data-bs-toggle='tab' href={href}>
                <span className='svg-icon svg-icon-2x bg-primary w-30px h-30px rounded'>
                  <p className='fs-3 mt-5 fw-bolder text-white'>{number}</p>
                </span>
                <span className='d-flex flex-column align-items-start ms-1'>
                  <span className='fs-5 fw-bolder'>{title}</span>
                  <span className='fs-help'>{description}</span>
                </span>
              </a> 
        </>
    )
}
