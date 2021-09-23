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
              <InputCustom name='email' type='email' label='Correo' />
            </div>
            <div className='col-md-4 px-5 fv-row my-3'>
              <InputCustom name='username' type='text' label='Usuario' />
            </div>
            <div className='col-md-4 px-5 fv-row my-3'>
              <InputCustom name='password' type='password' label='Contraseña' />
            </div>
            <div className='col-md-4 px-5 fv-row my-3'>
              <InputCustom name='confirmPassword' type='password' label='Confirmar contraseña' />
            </div>
            <div className='col-md-4 px-5 fv-row my-3'>
              <InputDueDate isRequired='required' />
            </div>
            <div className='col-md-3 px-5 fv-row text-end'>
              <label></label>
              <div className='form-check form-check-custom form-check-solid my-auto h-75'>
                <InputCustom
                  className='form-check-input h-25px'
                  type='checkbox'
                  name='password_change'
                  checked
                  id='flexCheckChecked'
                />
                <label className='form-check-label'>¿Permite cambio de contraseña?</label>
              </div>
            </div>
            <div className='col-md-3 px-5 fv-row'>
              <label></label>
              <div className='form-check form-switch form-check-custom form-check-solid my-auto h-75'>
                <InputCustom
                  className='form-check-input h-25px'
                  type='checkbox'
                  name='is_active'
                  id='flexSwitchChecked'
                />
                <label className='form-check-label'>¿Activo?</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
