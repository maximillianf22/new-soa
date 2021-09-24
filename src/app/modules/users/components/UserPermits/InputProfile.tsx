import React from 'react'
import {InputSelect} from '../../../global/components/inputs/InputSelect'
import {Field} from 'formik'
import {ModalPermits} from './ModalPermits'

const optionsProfile = [
    {value: 'admin', label: 'Administrador'},
    {value: 'supervisor', label: 'Supervisor'},
    {value: 'coordinador', label: 'Coordinador'},
  ]
  
export const InputProfile = () => {
  return (
    <>
        <div className='d-flex bd-highlight'>
          <div className='pe-3 flex-fill bd-highlight w-100'>
            <label className='col-form-label required fw-bold fs-6 py-2'>Perfil</label>
            <Field name={'profile'} component={InputSelect} options={optionsProfile} />
          </div>
          <div className='px-0 flex-fill bd-highlight mt-13'>
            <button
              className='btn btn-icon btn-primary btn-form'
              data-bs-toggle='modal'
              data-bs-target='#kt_modal_permits'
              type='button'
            >
              <i className='fa fa-cog'></i>
            </button>
          </div>
        </div>
        <p className='m-0 p-1 fs-help'>
          Si deseas personalizar los permisos, haz click en el boton
        </p>
        <ModalPermits />
      </>
  )
}
