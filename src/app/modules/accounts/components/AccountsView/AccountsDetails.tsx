import React from 'react'

export const AccountsDetails = () => {
  return (
    <>
      <div className='card'>
        <div className='card-body p-0'>
          <div className='card-header bg-primary ribbon ribbon-top border-0 min-h-50px'>
            <div className='ribbon-label bg-success fw-bolder'>Activo</div>
            <div className='card-title text-white fw-bolder fs-4'>Detalle de la cuenta</div>
          </div>
          <div className={`px-9 pt-1 h-200px w-100 bg-primary`}>
            <div className='d-flex text-center flex-column text-white pt-0'>
              <span className='fw-bolder fs-1 pt-1 text-nowrap'>Descripcion de la cuenta</span>
              <div className='row mt-4'>
                <div className='col-md-6 text-start'>
                  <span className='fs-help text-uppercase'>Piloto</span>
                  <br />
                  <span className='fw-bold fs-4'>308567098</span>
                </div>
                <div className='col-md-6 text-end'>
                  <span className='fs-help text-uppercase'>Piloto Proveedor</span>
                  <br />
                  <span className='fw-bold fs-4'>308567098</span>
                </div>
              </div>
            </div>
          </div>
          <div
            className='shadow-xs card-rounded mx-9 mb-9 p-3 position-relative z-index-1 bg-white'
            style={{marginTop: '-80px'}}
          >
            <div className='px-3 py-2 d-flex align-items-center mb-6'>
              <div className='symbol symbol-45px w-40px me-5'>
                <span className='symbol-label bg-warning'>
                  <i className='fa fa-check-circle fa-lg text-black'></i>
                </span>
              </div>
              <a href='' className='w-100'>
                <div className='d-flex align-items-center flex-wrap w-100'>
                  <div className='mb-1 pe-3 flex-grow-1'>
                    <a href='#' className='fs-5 text-hover-primary text-warning fw-bolder'>
                      Planes VIP
                    </a>
                    <div className='text-gray-400 fw-bold fs-7'>Listado</div>
                  </div>
                  <div className='d-flex align-items-center'>
                    <div className='fw-bolder fs-5 text-warning pe-1'>25</div>
                  </div>
                </div>
              </a>
            </div>
            <div className='px-3 py-2 d-flex align-items-center mb-6'>
              <div className='symbol symbol-45px w-40px me-5'>
                <span className='symbol-label bg-lighten'>
                  <i className='fa fa-plus-circle fa-lg'></i>
                </span>
              </div>
              <a href='' className='w-100'>
                <div className='d-flex align-items-center flex-wrap w-100'>
                  <div className='mb-1 pe-3 flex-grow-1'>
                    <a href='#' className='fs-5 text-gray-800 text-hover-primary fw-bolder'>
                      Planes Activos
                    </a>
                    <div className='text-gray-400 fw-bold fs-7'>Listado</div>
                  </div>
                  <div className='d-flex align-items-center'>
                    <div className='fw-bolder fs-5 text-gray-800 pe-1'>25</div>
                  </div>
                </div>
              </a>
            </div>
            <div className='px-3 py-2 d-flex align-items-center mb-0'>
              <div className='symbol symbol-45px w-40px me-5'>
                <span className='symbol-label bg-lighten'>
                  <i className='fa fa-minus-circle fa-lg'></i>
                </span>
              </div>
              <a href='' className='w-100'>
                <div className='d-flex align-items-center flex-wrap w-100'>
                  <div className='mb-1 pe-3 flex-grow-1'>
                    <a href='#' className='fs-5 text-gray-800 text-hover-primary fw-bolder'>
                      Planes Inactivos
                    </a>
                    <div className='text-gray-400 fw-bold fs-7'>Listado</div>
                  </div>
                  <div className='d-flex align-items-center'>
                    <div className='fw-bolder fs-5 text-gray-800 pe-1'>25</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
