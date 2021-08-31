import React from 'react'

export const TableStats: React.FC = () => {
  return (
    <>
      <div className='row pb-5'>
        <div className='col-3 d-none d-sm-none d-md-none d-lg-none d-xl-block'>
          <div className='card h-100px p-5'>
            <div className='d-flex bd-highlight'>
              <div className='p-0 w-100 bd-highlight'>
                <p className='text-muted mb-0 fw-bold fs-7 text-uppercase'>Usuarios</p>
                <h1>Registrados</h1>
              </div>
              <div className='p-0 flex-shrink-1 bd-highlight '>
                <h1 className='m-0 text-white rounded-circle bg-primary p-4'>89</h1>
              </div>
            </div>
            <p className='text-muted fs-7 fw-light text-nowrap my-2'>Usuarios Registrados en la plataforma</p>
          </div>
        </div>
        <div className='col-3 d-none d-sm-none d-md-none d-lg-none d-xl-block'>
          <div className='card h-100px p-5'>
            <div className='d-flex bd-highlight'>
              <div className='p-0 w-100 bd-highlight'>
                <p className='text-muted mb-0 fw-bold fs-7 text-uppercase'>Usuarios</p>
                <h1>Activos</h1>
              </div>
              <div className='p-0 flex-shrink-1 bd-highlight '>
                  <h1 className='m-0 text-white rounded-circle bg-primary p-4'>89</h1>
              </div>
            </div>
            <p className='text-muted fs-7 fw-light text-nowrap my-2'>Usuarios Activos en la plataforma</p>
          </div>
        </div>
        <div className='col-3 d-none d-sm-none d-md-none d-lg-none d-xl-block'>
          <div className='card h-100px p-5'>
            <div className='d-flex bd-highlight'>
              <div className='p-0 w-100 bd-highlight'>
                <p className='text-muted mb-0 fw-bold fs-7 text-uppercase'>Usuarios</p>
                <h1>Inactivos</h1>
              </div>
              <div className='p-0 flex-shrink-1 bd-highlight '>
                  <h1 className='m-0 text-white rounded-circle bg-primary p-4'>89</h1>
              </div>
            </div>
            <p className='text-muted fs-7 fw-light text-nowrap my-2'>Usuarios Inactivos en la plataforma</p>
          </div>
        </div>
        <div className='col-3 d-none d-sm-none d-md-none d-lg-none d-xl-block'>
          <div className='card h-100px p-5'>
            <div className='d-flex bd-highlight'>
              <div className='p-0 w-100 bd-highlight'>
                <p className='text-muted mb-0 fw-bold fs-7 text-uppercase'>Usuarios</p>
                <h1>Inhabilitados</h1>
              </div>
              <div className='p-0 flex-shrink-1 bd-highlight '>
                  <h1 className='m-0 text-white rounded-circle bg-primary p-4'>89</h1>
              </div>
            </div>
            <p className='text-muted fs-7 fw-light text-nowrap my-2'>Usuarios Inhabilitados en la plataforma</p>
          </div>
        </div>
      </div>
    </>
  )
}
