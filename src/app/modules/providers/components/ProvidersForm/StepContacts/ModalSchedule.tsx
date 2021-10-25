import {Field, Form, Formik, FormikProps} from 'formik'
import React from 'react'
import {InputCustom, InputSelect} from '../../../../global/components/inputs'
import {initialValues} from '../Helpers'
import {ModalScheduleCustomCheckbox} from './ModalScheduleCustomCheckbox'
import { ModalScheduleTableItem } from './ModalScheduleTableItem'
import './styles.css'

const optionsConditions = [
  {value: 'id1', label: 'Interno'},
  {value: 'id2', label: 'Externo'},
]

export const ModalSchedule = () => {
  return (
    <>
      <div
        className='modal fade'
        id='kt_modal_schedule'
        tabIndex={-1}
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-dialog-centered modal-md'>
          <div className='modal-content bg-secondary'>
            <div className='modal-body p-13 card bg-secondary'>
              <div className='card-header border-0 p-0 ps-2 pe-4 mb-5'>
                <h2 className='card-title align-items-start flex-column'>
                  <span className='card-label fw-bolder fs-2 mb-1'>Configuración de horarios</span>
                  <span className='text-muted mt-1 fw-bold fs-6'>
                    Configure los turnos y dias de labor del proveedor
                  </span>
                </h2>
                <div className='card-toolbar'>
                  <button
                    type='button'
                    className='btn-close'
                    data-bs-dismiss='modal'
                    aria-label='Close'
                  ></button>
                </div>
              </div>
              <div className='card'>
                <Formik
                  initialValues={initialValues}
                  enableReinitialize={true}
                  onSubmit={(values) => {
                    console.log('en submit', values)
                  }}
                >
                  {(props: FormikProps<any>) => (
                    <Form>
                      <div className='menu-item px-10 text-start py-10'>
                        <h4 className='fw-bold m-0'>Configuracion de dias</h4>
                        <p className='text-muted'>Configure los dias laborales</p>
                        <div className='row'>
                          <ModalScheduleCustomCheckbox day='L' />
                          <ModalScheduleCustomCheckbox day='M' />
                          <ModalScheduleCustomCheckbox day='M' />
                          <ModalScheduleCustomCheckbox day='J' />
                          <ModalScheduleCustomCheckbox day='V' />
                          <ModalScheduleCustomCheckbox day='S' />
                          <ModalScheduleCustomCheckbox day='D' />
                        </div>
                        <div className='mt-5'>
                          <table className='table table-borderless table-sm'>
                            <thead>
                              <tr className='fw-bolder text-muted bg-light text-uppercase'>
                                <th scope='col' className='ps-4'>Dia</th>
                                <th scope='col'>H. Inicio</th>
                                <th scope='col'>H. Final</th>
                                <th scope='col'></th>
                              </tr>
                            </thead>
                            <tbody>
                              <ModalScheduleTableItem day='Lunes' item_plus/>
                              <ModalScheduleTableItem day='Martes'/>
                              <ModalScheduleTableItem day='Miercoles'/>
                              <ModalScheduleTableItem day='Jueves'/>
                              <ModalScheduleTableItem day='Viernes'/>
                              <ModalScheduleTableItem day='Sabado'/>
                            </tbody>
                          </table>
                        </div>
                        <div className='text-center mb-0'>
                          <button type='submit' className='btn btn-lg btn-primary me-0 mt-5 px-20'>
                            <span className='indicator-label'>
                              Guardar <i className='fa fa-save text-white ms-2 me-0'></i>
                            </span>
                          </button>
                        </div>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
