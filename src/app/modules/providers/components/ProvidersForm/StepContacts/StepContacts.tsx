import React from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../../../../_metronic/helpers'
import {FormContact} from './FormContact'
import {ListContacts} from './ListContacts'

const optionsQuestions = [
  {value: '1', label: 'Addiuva'},
  {value: '2', label: 'Ikatech'},
  {value: '3', label: 'El Roble'},
]

const optionsStages = [
  {value: '1', label: 'Etapa 1'},
  {value: '2', label: 'Etapa 2'},
  {value: '3', label: 'Etapa 3'},
]

export const StepContacts = () => {
  return (
    <>
      <div className='row mb-6'>
        <div className='col-md-9 border p-10'>
          <FormContact />
        </div>
        <div className='col-md-3 border p-0'>
          <div className='py-5 mb-2 p-10'>
            <h3 className='card-title align-items-start flex-column'>
              <span className='card-label fw-bolder fs-3 mb-1'>Listado de contactos</span>
              <br />
              <span className='text-muted mt-1 fw-bold fs-7'>
                listado de los contactos registrados
              </span>
            </h3>
          </div>
          <ListContacts />
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
    </>
  )
}
