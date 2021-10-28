import React from 'react'

export const SidePanel = () => {
  return (
    <>
      <div className='explore-toggle btn btn-sm bg-white py-0 w-55px rounded btn-link shadow-sm position-fixed px-5 fw-bolder zindex-2 top-50 mt-0 end-0 fs-6 rounded-end-0'>
        <button type='button' className='btn-sm btn btn-danger mb-2 mt-5 btn-icon position-relative'>
          <i className='m-0 fa fa-bell fs-3'></i>
          <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger rounded-circle w-17px p-4px'>
            18
          </span>
        </button>
        <button type='button' className='btn-sm btn btn-success my-3 btn-icon position-relative'>
          <i className='m-0 fa fa-comments fs-3'></i>
          <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger rounded-circle w-17px p-4px'>
            18
          </span>
        </button>
        <button type='button' className='btn-sm btn btn-light-dark mt-2 mb-5 btn-icon'>
          <i className='m-0 fa fa-moon fs-3'></i>
        </button>
      </div>
    </>
  )
}
