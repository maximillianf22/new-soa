/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export const UsersStats = () => {
  return (
    <>
      <div className='row mb-7'>
        <div className='col-3'>
          <div className='card h-100px p-5'>
            <p className='text-muted mb-0 fw-bold fs-7'>Usuarios</p>
            <h1>Usuarios</h1>
            <p className='text-muted fs-7'>Usuarios Registrados en la plataforma</p>
          </div>
        </div>
        <div className='col-3'>
          <div className='card h-100px p-5'>
            <p className='text-muted mb-0 fw-bold fs-7'>Usuarios</p>
            <h1>Usuarios</h1>
            <p className='text-muted fs-7'>Usuarios Activos en la plataforma</p>
          </div>
        </div>
        <div className='col-3'>
          <div className='card h-100px p-5'>
            <p className='text-muted mb-0 fw-bold fs-7'>Usuarios</p>
            <h1>Usuarios</h1>
            <p className='text-muted fs-7'>Usuarios Inactivos en la plataforma</p>
          </div>
        </div>
        <div className='col-3'>
          <div className='card h-100px p-5'>
            <p className='text-muted mb-0 fw-bold fs-7'>Usuarios</p>
            <h1>Usuarios</h1>
            <p className='text-muted fs-7'>Usuarios Inhabilitados en la plataforma</p>
          </div>
        </div>
      </div>
    </>
  )
}