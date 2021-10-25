import React from 'react'

export const MapInfoWindows = () => {
  return (
    <>
      <div className='row' style={{width: '350px'}}>
        <div className='col-8 text-start'>
          <b className='fs-5 mb-5'> Sede: Exito Pereira</b><br/>
          <span className='text-muted fs-6 lh-1'><b>Principal</b>: No</span><br/>
          <span className='text-muted fs-6 lh-1'>
            <b>Dirección</b>: Carrera 2b #19-67, Barranquilla Atlantico
          </span>
        </div>
        <div className='col-4'>
          <div className='row'>
            <div className='col-6'>
              <button className='btn btn-success btn-icon'>
                <i className='fa fa-edit'></i>
              </button>
            </div>
            <div className='col-6'>
              <button className='btn btn-danger btn-icon'>
                <i className='fa fa-trash'></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
