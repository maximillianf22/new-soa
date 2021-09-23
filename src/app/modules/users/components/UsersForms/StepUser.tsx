import React from 'react'
import {InputCustom, InputDueDate} from '../../../global/components/inputs'

export const StepUserForm = () => {
  return (
    <div>
      <div id='kt_account_profile_details' className='collapse show w-100'>
        <div className='card-body py-0 px-4'>
          <div className='row'>
            <div className='col-md-4 px-5 fv-row my-3'>
              <InputCustom name='first_name' type='text' label='Nombre' />
            </div>
            <div className='col-md-4 px-5 fv-row my-3'>
              <InputCustom name='last_name' type='text' label='Apellido' />
            </div>
            <div className='col-md-4 px-5 fv-row my-3'>
              <label className='col-form-label required fw-bold fs-6'>Correo</label>
              <InputCustom name='email' type='email' placeholder='Correo' />
            </div>
            <div className='col-md-4 px-5 fv-row my-3'>
              <label className='col-form-label required fw-bold fs-6'>Usuario</label>
              <InputCustom name='username' placeholder='Usuario' />
            </div>
            <div className='col-md-4 px-5 fv-row my-3'>
              <label className='col-form-label required fw-bold fs-6'>Contraseña</label>
              <InputCustom name='password' type='password' placeholder='Contraseña' />
            </div>
            <div className='col-md-4 px-5 fv-row my-3'>
              <label className='col-form-label required fw-bold fs-6'>Confirmar contraseña</label>
              <InputCustom name='confirmPassword' type='password' placeholder='Confirmar' />
            </div>
            <div className='col-md-4 px-5 fv-row my-3'>
              <InputDueDate isRequired='required' />
            </div>
            <div className='col-md-3 px-5 fv-row text-end my-auto h-100'>
            <label className='form-check-label'></label>
              <div className='form-check form-check-custom form-check-solid '>
                <input
                  className='form-check-input h-25px w-25px'
                  type='checkbox'
                  value=''
                  id='flexCheckChecked'
                />
                <label className='form-check-label'>¿Permite cambio de contraseña?</label>
              </div>
            </div>
            <div className='col-md-3 px-5 fv-row my-auto h-100'>
            <label className='form-check-label'></label>
              <div className=' text-center'>
                <div className='form-check form-switch form-check-custom form-check-solid'>
                  <input
                    className='form-check-input h-25px'
                    type='checkbox'
                    value=''
                    id='flexSwitchChecked'
                  />
                  <label className='form-check-label'>¿Activo?</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
