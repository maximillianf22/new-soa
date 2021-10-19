import React from 'react'
import {InputCustom} from '../../../../global/components/inputs'
import {Form, Formik, FormikProps} from 'formik'
import {initialValues} from '../Helpers'
import {ModalSchedule} from './ModalSchedule'
import { ModalAccounts } from './ModalAccounts'

export const FormContact = () => {
  return (
    <>
      <Formik
        initialValues={initialValues}
        enableReinitialize={true}
        onSubmit={(values) => {
          console.log('en submit', values)
        }}
      >
        {(props: FormikProps<any>) => (
          <Form>
            <div className='row'>
              <h3 className='card-title align-items-start flex-column'>
                <span className='card-label fw-bolder fs-3 mb-1'>
                  Registro de los Contactos / Tecnicos del proveedor
                </span>
                <br />
                <span className='text-muted mt-1 fw-bold fs-7'>
                  Complete el formulario de registro de los contactos o tecnicos del proveedor
                </span>
              </h3>
              <div className='col-md-4 px-5 fv-row my-3'>
                <InputCustom type='text' name='compañia' label='Nombre' />
              </div>
              <div className='col-md-4 px-5 fv-row my-3'>
                <InputCustom type='text' name='ap_paterno' label='Apellido Paterno' />
              </div>
              <div className='col-md-4 px-5 fv-row my-3'>
                <InputCustom type='text' name='ap_materno' label='Apellido Materno' />
              </div>
              <div className='col-md-4 px-5 fv-row my-3'>
                <InputCustom type='text' name='documento' label='Documento' />
              </div>
              <div className='col-md-4 px-5 fv-row my-3'>
                <InputCustom type='text' name='telefono' label='Telefono 1' />
              </div>
              <div className='col-md-4 px-5 fv-row my-3'>
                <InputCustom type='text' name='telefono' label='Telefono 2' />
              </div>
              <div className='col-md-4 px-5 fv-row my-3'>
                <InputCustom type='email' name='correo' label='Correo' />
              </div>
              <div className='col-md-4 px-5 fv-row my-3'>
                <InputCustom type='date' name='fecha_nacimiento' label='Fecha de Nacimiento' />
              </div>
              <div className='col-md-4 px-5 fv-row my-3'>
                <InputCustom type='text' name='vechiculo' label='Vehiculo' />
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
                <InputCustom name='obervaciones' type='text' label='Observaciones' />
              </div>
              <div className='col-md-4 px-5 fv-row my-3'>
                <InputCustom name='foto' type='file' label='Foto' />
              </div>
              <div className='col-md-2 px-5 fv-row my-4 text-start'>
                <div className='my-auto h-100 text-center mt-4'>
                  <label></label>
                  <div className='form-check form-switch form-check-custom form-check-solid'>
                    <InputCustom
                      className='form-check-input h-30px w-50px'
                      type='checkbox'
                      name='is_active'
                      checked
                      id='flexSwitchChecked'
                    />
                    <label className='form-check-label ms-5'>¿Activo?</label>
                  </div>
                </div>
              </div>
              <div className='col-md-2 px-5 fv-row my-4 text-start'>
                <div className='my-auto h-100 text-center mt-4'>
                  <label></label>
                  <div className='form-check form-check-custom form-check-solid'>
                    <InputCustom
                      className='form-check-input h-30px w-30px'
                      type='checkbox'
                      name='is_active'
                      checked
                      id='flexSwitchChecked'
                    />
                    <label className='form-check-label ms-5'>Responsable</label>
                  </div>
                </div>
              </div>
              <div className='col-md-2 mt-13 d-grid gap-2'>
                <button
                  className='btn btn-success btn-form'
                  data-bs-toggle='modal'
                  data-bs-target='#kt_modal_schedule'
                >
                  <i className='fa fa-calendar fa-lg'></i> Horario
                </button>
              </div>
              <div className='col-md-2 mt-13 d-grid gap-2'>
                <button
                  className='btn btn-info btn-form'
                  data-bs-toggle='modal'
                  data-bs-target='#kt_modal_accounts'
                >
                  <i className='fa fa-list fa-lg'></i> Cuentas
                </button>
              </div>
              <div className='col-md-3 mt-13 d-grid gap-2 offset-md-5'>
                <button className='btn btn-primary btn-form'>
                  <i className='fa fa-save fa-lg'></i> Guardar
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
      <ModalSchedule />
      <ModalAccounts />
    </>
  )
}
