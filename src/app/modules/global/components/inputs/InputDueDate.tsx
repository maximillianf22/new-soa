import React, {useState} from 'react'
import {InputSelect} from './InputSelect'
import {Form} from 'react-bootstrap-formik'
import {Field, useField} from 'formik'
import {Button, Collapse} from 'react-bootstrap-v5'

const optionsProfile = [
  {value: 'Anual', label: 'Anual'},
  {value: 'Semestral', label: 'Semestral'},
  {value: 'Trimestral', label: 'Trimestral'},
  {value: 'Bimestral', label: 'Bimestral'},
]

export const InputDueDate = ({isRequired = '', init_date_validity = '', end_date_validity=''}: any) => {
  const [open, setOpen] = useState(false)

  const MyTextField = ({ label, ...props }: any) => {
    const [field, meta, helpers] = useField(props);
    if (field.value === null) {
      field.value = '';
    }
    return (
      <>
        <label>
          {label}
          <input className="form-control" {...field} {...props} />
        </label>
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </>
    );
  };

  return (
    <>
      <div className='d-flex bd-highlight'>
        <div className='pe-3 flex-fill bd-highlight w-100'>
          <label className={`col-form-label ${isRequired} fw-bold fs-6`}>Vigencia</label>
          <Field name={'dueDate'} component={InputSelect} options={optionsProfile} />
        </div>
        <div className='px-0 flex-fill bd-highlight mt-13'>
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
            {/* <input name='init_date_validity' type='date' value={init_date_validity} />
            <label className='col-form-label m-0 p-0 lh-1 fs-help text-center w-100'>
              Fecha Inicio
            </label> */}
            <MyTextField
              type="date"
              name='init_date_validity'
              label="Fecha Inicio"
            />
          </div>
          <div className='col-6 ps-1'>
            {/* <input name='end_date_validity' type='date' value={end_date_validity} />
            <label className='col-form-label m-0 p-0 lh-1 fs-help text-center w-100'>
              Fecha Final
            </label> */}
            <MyTextField
              type="date"
              name='end_date_validity'
              label="Fecha Final"
            />
          </div>
        </div>
      </Collapse>
    </>
  )
}
