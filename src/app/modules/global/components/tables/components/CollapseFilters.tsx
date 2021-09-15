import React from 'react'
import {Collapse} from 'react-bootstrap-v5'

const CollapseFilters = ({open}: any) => {
  return (
    <>
      <Collapse in={open}>
        <div>
          <div className='card-body'>
            <div className='row  bg-secondary px-5 py-5 rounded'>
              <div className='col-md-10 pe-1 row'>
                <div className='col-md-4 px-5'>
                  <label className='col-form-label m-0 p-0 lh-1 fs-help w-100'>Nombre</label>
                  <input
                    type='text'
                    className='form-control form-control-sm form-control-white'
                    placeholder='Filtro'
                  />
                </div>
                <div className='col-md-4 px-5'>
                  <label className='col-form-label m-0 p-0 lh-1 fs-help w-100'>Apellido</label>
                  <input
                    type='text'
                    className='form-control form-control-sm form-control-white'
                    placeholder='Filtro'
                  />
                </div>
                <div className='col-md-4 px-5'>
                  <label className='col-form-label m-0 p-0 lh-1 fs-help w-100'>Documento</label>
                  <input
                    type='text'
                    className='form-control form-control-sm form-control-white'
                    placeholder='Filtro'
                  />
                </div>
                <div className='col-md-4 px-5'>
                  <label className='col-form-label m-0 p-0 lh-1 fs-help w-100'>Correo</label>
                  <input
                    type='text'
                    className='form-control form-control-sm form-control-white'
                    placeholder='Filtro'
                  />
                </div>
                <div className='col-md-4 px-5'>
                  <label className='col-form-label m-0 p-0 lh-1 fs-help w-100'>Rol</label>
                  <input
                    type='text'
                    className='form-control form-control-sm form-control-white'
                    placeholder='Filtro'
                  />
                </div>
                <div className='col-md-4 px-5'>
                  <label className='col-form-label m-0 p-0 lh-1 fs-help w-100'>Tipo</label>
                  <input
                    type='text'
                    className='form-control form-control-sm form-control-white'
                    placeholder='Filtro'
                  />
                </div>
              </div>
              <div className='col-md-2 px-5'>
                <button className='btn btn-success btn-sm col-md-12 mb-4 mt-6'>Aplicar</button>
                <button className='btn btn-danger btn-sm col-md-12 mb-4 mt-6'>Limpiar</button>
              </div>
            </div>
          </div>
        </div>
      </Collapse>
    </>
  )
}

export default CollapseFilters
