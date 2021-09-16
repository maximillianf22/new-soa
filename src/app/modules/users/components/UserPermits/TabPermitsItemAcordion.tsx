import React from 'react'
import Accordion from 'react-bootstrap/Accordion'

type AcordionItem = {
  label: string
  keyEvent: string
}

export const TabPermitsItemAcordion = ({label, keyEvent}: AcordionItem) => {
  return (
    <>
      <div className='col-md-3'>
        <div>
          <Accordion flush className='border-bottom'>
            <Accordion.Item eventKey={keyEvent}>
              <Accordion.Header className='p-0'>
                {label}
                <span className='ms-auto me-3'>
                  <div className='form-check form-check-custom form-check-solid my-auto h-100 z-index-100'>
                    <input
                      className='form-check-input h-25px w-25px'
                      type='checkbox'
                      value=''
                      id='flexCheckChecked'
                    />
                  </div>
                </span>
              </Accordion.Header>
              <Accordion.Body className='border'>
                <table className='table table-sm'>
                  <tr>
                    <th>Ver</th>
                    <td>
                      <div className='form-check form-check-custom form-check-solid my-auto h-100 z-index-100'>
                        <input
                          className='form-check-input h-25px w-25px ms-auto'
                          type='checkbox'
                          value=''
                          id='flexCheckChecked'
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>Editar</th>
                    <td>
                      <div className='form-check form-check-custom form-check-solid my-auto h-100 z-index-100'>
                        <input
                          className='form-check-input h-25px w-25px ms-auto'
                          type='checkbox'
                          value=''
                          id='flexCheckChecked'
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>Eliminar</th>
                    <td>
                      <div className='form-check form-check-custom form-check-solid my-auto h-100 z-index-100'>
                        <input
                          className='form-check-input h-25px w-25px ms-auto'
                          type='checkbox'
                          value=''
                          id='flexCheckChecked'
                        />
                      </div>
                    </td>
                  </tr>
                </table>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </>
  )
}
