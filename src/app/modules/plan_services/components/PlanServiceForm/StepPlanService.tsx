import React from 'react'
import {Field, Form, Formik, FormikProps} from 'formik'
import {InputCustom, InputSelect} from '../../../global/components/inputs'
import {initialValues} from './Helpers'

const optionsServices = [
  {value: 'id1', label: 'Servicio Técnico'},
  {value: 'id2', label: 'Plomeria'},
  {value: 'id3', label: 'Cerrajeria'},
]

const optionsPlans = [
  {value: 'id1', label: 'Plan A'},
]

const optionsFrecuencies = [
  {value: 'id1', label: 'Semanal'},
  {value: 'id2', label: 'Mensual'},
  {value: 'id3', label: 'Anual'},
]

const optionsCoins = [
  {value: 'id1', label: 'COP - Peso Colombiano'},
  {value: 'id2', label: 'USD - Dolar Americano'},
]

export const StepPlanService = () => {
  return (
    <>
      <div className='row'>
        <div className='col-md-9'>
          <div className='card' style={{minHeight: '90vh', maxHeight: '90vh', overflowY: 'auto'}}>
            <div className='card-body'>
              <p className='fw-bold fs-2 mt-3 m-0 ms-3'>Nuevo Plan Servicio</p>
              <p className='fw-bold fs-help text-muted ms-3'>Registrar un nuevo servicio</p>
              <div className='row'>
              <div className='col-md-6 px-5 fv-row my-3'>
                  <label className='col-form-label required fw-bold fs-6 py-2'>Plan</label>
                  <Field name='planes' component={InputSelect} options={optionsPlans} />
                </div>
                <div className='col-md-6 px-5 fv-row my-3'>
                  <label className='col-form-label required fw-bold fs-6 py-2'>Servicio</label>
                  <Field name='servicios' component={InputSelect} options={optionsServices} />
                </div>
                <div className='col-md-6 px-5 fv-row my-3'>
                  <InputCustom type='text' name='etiqueta' label='Etiqueta o nombre' required />
                </div>
                <div className='col-md-6 px-5 fv-row my-3'>
                  <InputCustom type='file' name='img' label='Logo o icono' />
                </div>
                <div className='col-md-6 px-5 fv-row my-3'>
                  <InputCustom type='number' name='events' label='Cantidad de eventos' />
                </div>
                <div className='col-md-6 px-5 fv-row my-3'>
                  <label className='col-form-label required fw-bold fs-6 py-2'>Frecuencia</label>
                  <Field name='frecuencia' component={InputSelect} options={optionsFrecuencies} />
                </div>
                <div className='col-md-6 px-5 fv-row my-3'>
                  <InputCustom type='number' name='costs' label='Costo' />
                </div>
                <div className='col-md-6 px-5 fv-row my-3'>
                  <label className='col-form-label required fw-bold fs-6 py-2'>Moneda</label>
                  <Field name='coin' component={InputSelect} options={optionsCoins} />
                </div>
                <div className='col-md-4 px-5 fv-row my-3'>
                  <InputCustom type='file' name='document' label='Documento - Soporte' />
                </div>
                <div className='col-md-8 px-5 fv-row my-3'>
                  <InputCustom
                    type='textarea'
                    name='descripcion'
                    label='Descripcion del servicio'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-3'>
          <div className='card' style={{minHeight: '90vh', maxHeight: '90vh', overflowY: 'auto'}}>
            <div className='card-body'>
              <p className='fw-bold fs-3 text-center'>Configuracion Adicional</p>
              <div className='col-md-12 px-5 fv-row my-2 text-start'>
                <label></label>
                <div className='form-check form-check-custom form-check-solid my-auto h-75'>
                  <InputCustom
                    className='form-check-input h-30px w-30px'
                    type='checkbox'
                    name='password_change'
                    id='flexCheckChecked'
                  />
                  <label className='form-check-label ms-5'>Registro de vehiculo</label>
                </div>
              </div>
              <div className='col-md-12 px-5 fv-row my-2 text-start'>
                <label></label>
                <div className='form-check form-check-custom form-check-solid my-auto h-75'>
                  <InputCustom
                    className='form-check-input h-30px w-30px'
                    type='checkbox'
                    name='password_change'
                    id='flexCheckChecked'
                  />
                  <label className='form-check-label ms-5'>Ruta de 3 puntos</label>
                </div>
              </div>
              <div className='col-md-12 px-5 fv-row my-2 text-start'>
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
                    <label className='form-check-label ms-5'>Concluir temprano</label>
                  </div>
                </div>
              </div>
              <div className='col-md-12 px-5 fv-row my-2 text-start'>
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
                    <label className='form-check-label ms-5'>Video Llamadas</label>
                  </div>
                </div>
              </div>
              <div className='col-md-12 px-5 fv-row my-2 text-start'>
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
                    <label className='form-check-label ms-5'>Asistencia simultanea</label>
                  </div>
                </div>
              </div>
              <div className='col-md-12 px-5 fv-row my-2 text-start'>
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
                    <label className='form-check-label ms-5'>Permite venta por app</label>
                  </div>
                </div>
              </div>
              <div className='col-md-12 px-5 fv-row my-2 text-start'>
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
                    <label className='form-check-label ms-5'>Permite encoladas</label>
                  </div>
                </div>
              </div>
              <div className='col-md-12 px-5 fv-row my-2 text-start'>
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
                    <label className='form-check-label ms-5'>Reasignacion de proveedor</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
