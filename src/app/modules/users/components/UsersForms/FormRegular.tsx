import React from 'react'
import {Form} from 'react-bootstrap-formik'
import {createUserSchemas, initialValues} from './Helpers'
import {InputDueDate, InputSelect, InputProfile} from '../../../global/components/inputs'
import {Field} from 'formik'

const optionsPlataforms = [
  {value: 'addiuva', label: 'Addiuva'},
  {value: 'ikatech', label: 'Ikatech'},
  {value: 'elRoble', label: 'El Roble'},
]

export const FormRegular = () => {
  return (
    <>
      <div className='card' style={{minHeight: '62vh'}}>
        <Form
          initialValues={initialValues}
          validationSchema={createUserSchemas}
          onSubmit={({value}) => {
            console.log(value)
          }}
        >
          <div className='card-body'>
            <div className='card-body py-0 px-4'>
              <div className='row'>
                <div className='col-md-4 px-5 fv-row my-3'>
                  <label className='col-form-label required fw-bold fs-6'>Nombre</label>
                  <Form.Input name='name' placeholder='Nombre' />
                </div>
                <div className='col-md-4 px-5 fv-row my-3'>
                  <label className='col-form-label required fw-bold fs-6'>Apellido</label>
                  <Form.Input name='lastName' placeholder='Apellido' />
                </div>
                <div className='col-md-4 px-5 fv-row my-3'>
                  <label className='col-form-label required fw-bold fs-6'>Correo</label>
                  <Form.Input name='email' type='email' placeholder='Correo' />
                </div>
                <div className='col-md-4 px-5 fv-row my-3'>
                  <label className='col-form-label required fw-bold fs-6'>Usuario</label>
                  <Form.Input name='username' placeholder='Usuario' />
                </div>
                <div className='col-md-4 px-5 fv-row my-3'>
                  <label className='col-form-label required fw-bold fs-6'>Contraseña</label>
                  <Form.Input name='password' type='password' placeholder='Contraseña' />
                </div>
                <div className='col-md-4 px-5 fv-row my-3'>
                  <label className='col-form-label required fw-bold fs-6'>
                    Confirmar contraseña
                  </label>
                  <Form.Input name='confirmPassword' type='password' placeholder='Confirmar' />
                </div>
                <div className='col-md-4 px-5 fv-row my-3'>
                  <InputDueDate isRequired='required' />
                </div>
                <div className='col-md-4 px-5 fv-row my-3'>
                  <label className='col-form-label required fw-bold fs-6'>Plataforma</label>
                  <Field name='plataform' component={InputSelect} options={optionsPlataforms} />
                </div>
                <div className='col-md-4 px-5 fv-row my-3'>
                  <InputProfile />
                </div>
                <div className='col-md-3 px-5 fv-row text-end'>
                  <div className='form-check form-check-custom form-check-solid mt-8'>
                    <input
                      className='form-check-input h-25px w-25px'
                      type='checkbox'
                      value=''
                      id='flexCheckChecked'
                    />
                    <label className='form-check-label'>¿Permite cambio de contraseña?</label>
                  </div>
                </div>
                <div className='col-md-3 px-5 fv-row'>
                  <div className='mt-8 text-center'>
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
            <div className='px-5 pt-5 fv-row text-end'>
              <button className='btn btn-primary' type='submit'>
                Guardar
              </button>
            </div>
          </div>
        </Form>
      </div>
    </>
  )
}
