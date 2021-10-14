import React from 'react'
import {toAbsoluteUrl} from '../../../../../../_metronic/helpers'

export const ListContactsItem = ({nombre, telefono1, telefono2, active, responsable, usuario, apellido_materno}:any ) => {
  return (
    <>
      <div className='d-flex align-items-sm-center mb-7 mt-0'>
        <div className='d-flex align-items-center flex-row-fluid flex-wrap'>
          <div className='flex-grow-1 me-2 w-50'>
            <a href='#' className='text-gray-800 text-hover-primary fs-6 fw-bolder text-nowrap'>
              {nombre} {apellido_materno}
              <span className={`badge badge-circle ${active? ('bg-success') : ('bg-danger') } h-10px w-10px mb-2`}></span>
            </a>
            <span className='text-muted fw-bold d-block fs-7 m-0'>
              Tlf: {telefono1} - {telefono2}
            </span>
            <span className='text-muted fw-bold d-block fs-7 m-0 lh-1'>
              Usuario: {usuario} - <b className='text-primary'>{responsable? ('Responsable') : ('')}</b>
            </span>
          </div>
          <span className='fw-bolder my-0'>
            <div className='p-0 mt-5'>
              <a href='!#' className='btn btn-icon btn-success btn-sm me-1'>
                <i className='fa fa-edit'></i>
              </a>
              <a href='!#' className='btn btn-icon btn-danger btn-sm'>
                <i className='fa fa-trash'></i>
              </a>
            </div>
          </span>
        </div>
      </div>
    </>
  )
}
