import { useField } from 'formik'
import React from 'react'

export const InputCustom = ({className,required ,label, placeholder, ...props}: any) => {
    const [field, meta] = useField(props)
    if (field.value === null) {
      field.value = ''
    }
    return (
      <>
      { label &&
        <label className={`col-form-label fw-bold fs-6 py-2 ${required? ('required') : ('')}`}>
          {label}
        </label>
      }
        <input placeholder={label ? label : placeholder} className={`form-control ${className}`} {...field} {...props} />
        {meta.touched && meta.error ? <div className='error'>{meta.error}</div> : null}
      </>
    )
  }

