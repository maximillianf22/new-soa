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
      <Select
        className='form-control p-0'
        {...field}
        {...props}
        options={options}
        isMulti
        getOptionLabel={(option) => option.cltName}
        getOptionValue={(option) => option.cltId}
        onChange={(option) => setFieldValue(field.name, (option as any))}
        placeholder={props.label}
      />
      {touched[field.name] && errors[field.name] && <div className="text-danger fs-help">{errors[field.name]}</div>}
    </>
  )
};
