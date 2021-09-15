import React, { useState } from 'react'
import {InputSelect} from './InputSelect'
import {Form} from 'react-bootstrap-formik'
import {Field} from 'formik'
import {Button, Collapse} from 'react-bootstrap-v5'

const optionsProfile = [
  {value: 'Anual', label: 'Anual'},
  {value: 'Semestral', label: 'Semestral'},
  {value: 'Trimestral', label: 'Trimestral'},
  {value: 'Bimestral', label: 'Bimestral'},
  {value: '30 Dias', label: '30 Dias'},
  {value: '15 Dias', label: '15 Dias'},
  {value: '7 Dias', label: '7 Dias'},
]

export const InputDueDate = ({isRequired = ''}) => {
  
  const [open, setOpen] = useState(false)

  return (
    <>
        <div className='d-flex bd-highlight'>
        <div className='pe-3 flex-fill bd-highlight w-100'>
        <label className={`col-form-label ${isRequired} fw-bold fs-6`}>Vigencia</label>
            <Field name={'dueDate'} component={InputSelect} options={optionsProfile} />
          </div>
          <div className='px-0 flex-fill bd-highlight mt-auto'>
            <Button
              className='btn btn-icon btn-primary btn-form'
              onClick={() => setOpen(!open)}
              aria-controls='example-collapse-text'
              aria-expanded={open}
            >
              <i className='fa fa-cog'></i>
            </Button>
          </div>
        </div>
        <p className='m-0 p-1 text-sm'>Si deseas personalizar la vigencia haz click en el boton</p>
        <Collapse in={open}>
          <div className='row'>
            <div className='col-6 pe-1'>
              <Form.Input name='initialDate' type='date' />
              <label className='col-form-label m-0 p-0 lh-1 text-sm text-center w-100'>
                Fecha Inicio
              </label>
            </div>
            <div className='col-6 ps-1'>
            <Form.Input name='finalDate' type='date' />
              <label className='col-form-label m-0 p-0 lh-1 text-sm text-center w-100'>
                Fecha Final
              </label>
            </div>
          </div>
        </Collapse>
    </>
  )
}
