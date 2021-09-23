import React from 'react'
import Select from 'react-select'

const options = [
  {value: 'plataforma1', label: 'Plaaforma One'},
  {value: 'plataforma2', label: 'Plataform Two'},
  {value: 'plataforma3', label: 'Plataform Three'},
  {value: 'Plataforma4', label: 'Plataform Four'},
]

export const SelectPlatforms = () => {
  return (
    <>
      <div className='col-5 ps-4 col-md-4 col-lg-3'>
        <Select
          className='form-control form-control-sm form-control-white border-0 p-0'
          placeholder='Seleccione la Plataforma o Cliente'
          name='selectPlataform'
          options={options}
          id='plataform'
        />
      </div>
    </>
  )
}
