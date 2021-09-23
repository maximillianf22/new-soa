import { useField } from 'formik'
import React from 'react'

export const InputCustom = ({required ,label, ...props}: any) => {
    const [field, meta] = useField(props)
    if (field.value === null) {
      field.value = ''
    }
    return (
      <>
        <label className={`col-form-label fw-bold fs-6 ${required? ('required') : ('')}`}>
          {label}
        </label>
        <input placeholder={label} className='form-control' {...field} {...props} />

        {meta.touched && meta.error ? <div className='error'>{meta.error}</div> : null}
      </>
    )
  }

