import React from 'react'
import {Field, Form, Formik, FormikProps} from 'formik'
import {InputCustom, InputSelect} from '../../../global/components/inputs'
import {initialValues} from './Helpers'

const optionsFrecuencies = [
  {value: 'id1', label: 'Semanal'},
  {value: 'id2', label: 'Mensual'},
  {value: 'id3', label: 'Anual'},
]

const optionsType = [
  {value: 'id1', label: 'Base con tecnicos'},
  {value: 'id1', label: 'Base sin tecnicos'},
]

const optionsConditions = [
  {value: 'id1', label: 'Interno'},
  {value: 'id2', label: 'Externo'},
]

export const StepProviders = () => {
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
            <p className='fw-bold fs-2 mt-3 m-0 ms-3'>Nuevo Proveedor</p>
            <p className='fw-bold fs-help text-muted ms-3'>Registro de proveedor</p>
            <div className='row'>
              <div className='col-md-4 px-5 fv-row my-3'>
                <InputCustom type='text' name='razon_social' label='Razon Social' required />
              </div>
              <div className='col-md-4 px-5 fv-row my-3'>
                <InputCustom type='text' name='nombre_juridico' label='Nombre Juridico' required />
              </div>
              <div className='col-md-4 px-5 fv-row my-3'>
                <label className='col-form-label required fw-bold fs-6 py-2'>Tipo</label>
                <Field name='tipo' component={InputSelect} options={optionsType} />
              </div>
              <div className='col-md-4 px-5 fv-row my-3'>
                <InputCustom type='number' name='documento' label='Documento' />
              </div>
              <div className='col-md-4 px-5 fv-row my-3'>
                <InputCustom
                  type='date'
                  name='fecha_inicio'
                  label='Fecha de Inicio de Actividades'
                />
              </div>
              <div className='col-md-4 px-5 fv-row my-3'>
                <InputCustom type='number' name='satisfaccion' label='% Satisfacción' required />
              </div>
              <div className='col-md-4 px-5 fv-row my-3'>
                <InputCustom
                  type='number'
                  name='infraestructura'
                  label='% Infraestuctura'
                  required
                />
              </div>
              <div className='col-md-4 px-5 fv-row my-3'>
                <InputCustom type='file' name='img' label='Logo o icono' />
              </div>
              <div className='col-md-4 px-5 fv-row my-3'>
                <label className='col-form-label required fw-bold fs-6 py-2'>Condición</label>
                <Field name='condicion' component={InputSelect} options={optionsConditions} />
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
                <InputCustom name='telefono1' type='text' label='Telefono 1' />
              </div>
              <div className='col-md-4 px-5 fv-row my-3'>
                <InputCustom name='telefono2' type='text' label='Telefono 2' />
              </div>
              <div className='col-md-4 px-5 fv-row my-3'>
                <InputCustom name='correo' type='email' label='Correo 1' />
              </div>
              <div className='col-md-4 px-5 fv-row my-3'>
                <InputCustom name='correo' type='email' label='Correo 2' />
              </div>
              <div className='col-md-4 px-5 fv-row my-3'>
                <InputCustom type='file' name='img' label='Contrato' />
              </div>
              <div className='col-md-4 px-5 fv-row my-4 text-start'>
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
            </div>
            <div className='text-end mb-5'>
              <button type='submit' className='btn btn-lg btn-primary me-0 mt-10 px-20'>
                <span className='indicator-label'>
                  Guardar
                  <i className='fa fa-arrow-right svg-icon-3 ms-2 me-0'></i>
                </span>
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  )
}
