import React from 'react'
import {TabPermitsItemAcordion} from './TabPermitsItemAcordion'

export const TabPermits = () => {
  return (
    <>
      <div className='d-flex bd-highlight w-100'>
        <div className='flex-fill bd-highlightd-flex align-items-center position-relative me-4'>
          <i className='fa fa-search fs-5 svg-icon-3 position-absolute ms-3 mt-2 pt-1'></i>
          <input
            type='text'
            id='kt_filter_search'
            className='form-control form-control-white form-control-sm ps-10'
            placeholder='Search'
          />
        </div>
        <div className='flex-fill bd-highlight fv-row my-auto'>
          <div className='my-auto h-100 text-center'>
            <div className='form-check form-switch form-check-custom form-check-solid'>
              <input
                className='form-check-input h-25px'
                type='checkbox'
                value=''
                id='flexSwitchChecked'
                checked
              />
            </div>
          </div>
        </div>
        <div className='text-end w-50'>
          <button className='btn btn-primary btn-sm'>
            <i className='fa fa-save'></i>Guardar plantilla
          </button>
        </div>
      </div>
      <div className='card mt-7'>
        <div className='card-body'>
          <div className='row'>
            <TabPermitsItemAcordion keyEvent='1' label='Modulo #' />
            <TabPermitsItemAcordion keyEvent='2' label='Modulo #' />
            <TabPermitsItemAcordion keyEvent='3' label='Modulo #' />
            <TabPermitsItemAcordion keyEvent='4' label='Modulo #' />
            <TabPermitsItemAcordion keyEvent='5' label='Modulo #' />
            <TabPermitsItemAcordion keyEvent='6' label='Modulo #' />
            <TabPermitsItemAcordion keyEvent='7' label='Modulo #' />
            <TabPermitsItemAcordion keyEvent='8' label='Modulo #' />
            <TabPermitsItemAcordion keyEvent='9' label='Modulo #' />
            <TabPermitsItemAcordion keyEvent='10' label='Modulo #' />
            <TabPermitsItemAcordion keyEvent='11' label='Modulo #' />
            <TabPermitsItemAcordion keyEvent='12' label='Modulo #' />
            <TabPermitsItemAcordion keyEvent='13' label='Modulo #' />
            <TabPermitsItemAcordion keyEvent='14' label='Modulo #' />
            <TabPermitsItemAcordion keyEvent='15' label='Modulo #' />
            <TabPermitsItemAcordion keyEvent='16' label='Modulo #' />
            <TabPermitsItemAcordion keyEvent='17' label='Modulo #' />
            <TabPermitsItemAcordion keyEvent='18' label='Modulo #' />
            <TabPermitsItemAcordion keyEvent='19' label='Modulo #' />
            <TabPermitsItemAcordion keyEvent='20' label='Modulo #' />
            <TabPermitsItemAcordion keyEvent='21' label='Modulo #' />
            <TabPermitsItemAcordion keyEvent='22' label='Modulo #' />
            <TabPermitsItemAcordion keyEvent='22' label='Modulo #' />
            <TabPermitsItemAcordion keyEvent='22' label='Modulo #' />
            <TabPermitsItemAcordion keyEvent='22' label='Modulo #' />
            <TabPermitsItemAcordion keyEvent='22' label='Modulo #' />
            <TabPermitsItemAcordion keyEvent='22' label='Modulo #' />
            <TabPermitsItemAcordion keyEvent='22' label='Modulo #' />
            <TabPermitsItemAcordion keyEvent='22' label='Modulo #' />
            <TabPermitsItemAcordion keyEvent='22' label='Modulo #' />
            <TabPermitsItemAcordion keyEvent='22' label='Modulo #' />
            <TabPermitsItemAcordion keyEvent='22' label='Modulo #' />
            <TabPermitsItemAcordion keyEvent='22' label='Modulo #' />
            <TabPermitsItemAcordion keyEvent='22' label='Modulo #' />
            <TabPermitsItemAcordion keyEvent='22' label='Modulo #' />
            <TabPermitsItemAcordion keyEvent='22' label='Modulo #' />
            <TabPermitsItemAcordion keyEvent='22' label='Modulo #' />
            <TabPermitsItemAcordion keyEvent='22' label='Modulo #' />
            <TabPermitsItemAcordion keyEvent='22' label='Modulo #' />
            <TabPermitsItemAcordion keyEvent='22' label='Modulo #' />
            <TabPermitsItemAcordion keyEvent='22' label='Modulo #' />
            <TabPermitsItemAcordion keyEvent='22' label='Modulo #' />
            <TabPermitsItemAcordion keyEvent='22' label='Modulo #' />
            <TabPermitsItemAcordion keyEvent='22' label='Modulo #' />
          </div>
        </div>
      </div>
    </>
  )
}
