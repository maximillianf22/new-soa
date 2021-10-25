import React from 'react'
import { ModalAsistencia } from '../../ExpedientsForm/ModalAsistencia'

export const StageOptions = () => {
  return (
    <>
      <div className='row mb-4 fs-6 mt-8'>
        <div className='col-md-6 text-nowrap'>
          <b>Expediente:</b> 20394290449
        </div>
        <div className='col-md-6 text-end text-nowrap'>
          <b>Asistencia:</b> 429340389
        </div>
      </div>
      <div className='row mb-4 fs-6 mt-0'>
        <div
          className='col-md-4 px-2 d-grid gap-2 text-nowrap'
          data-bs-toggle='modal'
          data-bs-target='#kt_modal_bitacora_general'
        >
          <button className='btn btn-sm btn-primary px-0'>Bitacora General</button>
        </div>
        <div
          className='col-md-4 px-1 d-grid gap-2 text-nowrap'
          data-bs-toggle='modal'
          data-bs-target='#kt_modal_asistencia'
        >
          <button className='btn btn-sm btn-primary'>Detalles</button>
        </div>
        <div
          className='col-md-4 px-2 d-grid gap-2 text-nowrap'
          data-bs-toggle='modal'
          data-bs-target='#kt_modal_bitacora_etapa'
        >
          <button className='btn btn-sm btn-primary px-0'>Bitacora Etapa</button>
        </div>
      </div>
      <ModalAsistencia />
    </>
  )
}
