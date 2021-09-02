import React from 'react'
import {Form} from 'react-bootstrap-v5'

export const SelectPlataforms = () => {
  return (
    <>
      <div className='col-5 ps-4 col-md-4 col-lg-3'>
        <Form.Select className="border-0">
          <option>Seleccione la Plataforma o Cliente</option>
          <option value='1'>Plataforma One</option>
          <option value='2'>Plataforma Two</option>
          <option value='3'>Plataforma Three</option>
        </Form.Select>
      </div>
    </>
  )
}
