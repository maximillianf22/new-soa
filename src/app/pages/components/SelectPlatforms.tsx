import React from 'react'
import Select from 'react-select'

const options = [
  {value: 'platforma1', label: 'Plaaforma One'},
  {value: 'platforma2', label: 'Platform Two'},
  {value: 'platforma3', label: 'Platform Three'},
  {value: 'Platforma4', label: 'Platform Four'},
]

export const SelectPlatforms = () => {
  return (
    <>
      <div className='col-5 ps-4 col-md-4 col-lg-3'>
        <Select
          className='form-control form-control-sm form-control-white border-0 p-0'
          placeholder='Seleccione la Platforma o Cliente'
          name='selectPlatform'
          options={options}
          id='platform'
        />
      </div>
    </>
  )
}
