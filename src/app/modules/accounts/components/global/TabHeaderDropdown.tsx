/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export function TabHeaderDropdown() {
  return (
    <div className='menu menu-sub menu-sub-dropdown w-250px w-md-300px' data-kt-menu='true'>
      <div className='px-7 py-5'>
        <div className='fs-5 text-dark fw-bolder'>Opciones para filtrar</div>
      </div>

      <div className='separator border-gray-200'></div>

      <div className='px-7 py-5'>
        <div className='mb-5'>
          <label className='form-label fw-bold'>Estado:</label>
          <div>
            <select
              className='form-select form-select-solid'
              data-kt-select2='true'
              data-placeholder='Select option'
              data-allow-clear='true'
              defaultValue={'1'}
            >
              <option value='1'>Todos</option>
              <option value='2'>Activos</option>
              <option value='3'>Inactivos</option>
              <option value='4'>VIP</option>
            </select>
          </div>
        </div>
        <div className='mb-10'>
          <label className='form-label fw-bold'>Nombre:</label>
          <div className='form-check form-switch form-switch-sm form-check-custom form-check-solid'>
            <input
              className='form-control'
              type='text'
              name='nombre'
            />
          </div>
        </div>

        <div className='d-flex justify-content-end'>
          <button
            type='reset'
            className='btn btn-sm btn-white btn-active-light-primary me-2'
            data-kt-menu-dismiss='true'
          >
            Reset
          </button>

          <button type='submit' className='btn btn-sm btn-primary' data-kt-menu-dismiss='true'>
            Apply
          </button>
        </div>
      </div>
    </div>
  )
}
