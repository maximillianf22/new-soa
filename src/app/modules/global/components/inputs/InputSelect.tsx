import * as React from 'react'
import {FieldProps} from 'formik'
import Select from 'react-select'

export const InputSelect = ({
  field, // { name, value, onChange, onBlur }
  form: {touched, errors, setFieldValue}, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}: FieldProps & {label: string; options: Array<{value: string; label: string}>}) => {
  const {options} = props

  return (
    <>
      <label htmlFor={field.name}>{props.label}</label>
      <Select
        className='form-control p-0'
        {...field}
        {...props}
        options={options}
        value={(options ? options.find((option) => option.value === field.value) : '') as any}
        onChange={(option) => setFieldValue(field.name, (option as any).value)}
        placeholder='Seleccione...'
      />
      {touched[field.name] && errors[field.name] && <div className="text-danger fs-help">{errors[field.name]}</div>}
    </>
  )
}
