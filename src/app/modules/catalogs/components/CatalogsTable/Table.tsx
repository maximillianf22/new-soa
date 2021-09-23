import React from 'react'

export const Table = () => {
  return (
    <>
      <div className='card'>
        <div className='card-body pt-4'>
          <div className='container-custom'>
            <div className='card-header border-0 p-0'>
              <h3 className='card-title align-items-start flex-column'>
                <span className='card-label fw-bolder fs-3 mb-1'>Listado de Usuario</span>
                <span className='text-muted mt-1 fw-bold fs-7'>234 Usuario registrados</span>
              </h3>
            </div>
            <div className='tab-content'>
              <div className='tab-pane fade' id='kt_table_1'>
                Referencia 1
              </div>
              <div className='tab-pane fade' id='kt_table_2'>
                Referencia 2
              </div>
              <div className='tab-pane fade' id='kt_table_3'>
                Referencia 3
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
