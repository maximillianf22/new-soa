import React, {useState} from 'react'
import {Field} from 'formik'
import {Button, Collapse} from 'react-bootstrap-v5'
import { InputCustom, InputSelect } from './'

const optionsProfile = [
  {value: 'Anual', label: 'Anual'},
  {value: 'Semestral', label: 'Semestral'},
  {value: 'Trimestral', label: 'Trimestral'},
  {value: 'Bimestral', label: 'Bimestral'},
]

export const InputDueDate = ({isRequired = '', end_name, init_name}: any) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className='d-flex bd-highlight'>
        <div className='pe-3 flex-fill bd-highlight w-100'>
          <label className={`col-form-label required fw-bold fs-6 py-2`}>Vigencia</label>
          <Field name={'dueDate'} component={InputSelect} options={optionsProfile} />
        </div>
        <div className='px-0 flex-fill bd-highlight mt-10'>
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
      <p className='m-0 p-1 fs-help'>Si deseas personalizar la vigencia haz click en el boton</p>
      <Collapse in={open}>
        <div className='row'>
          <div className='col-6 pe-1'>
            <InputCustom
              type="date"
              name={init_name}
              label="Fecha Inicio"
            />
          </div>
          <div className='col-6 ps-1'>
            <InputCustom
              type="date"
              name={end_name}
              label="Fecha Final"
            />
          </div>
        </div>
      </Collapse>
    </>
  )
}