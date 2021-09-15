import React from 'react'
import Notifications from './components/Notifications'

export const ModalPermits = () => {
    return (

    <>
      <div className='modal bg-white fade' tabIndex={-1} id='kt_modal_permits'>
        <div className='modal-dialog modal-fullscreen'>
          <div className='modal-content shadow-none'>
            <div className='modal-header'>
              <h5 className='modal-title'>Modal title</h5>
              <div
                className='btn btn-icon btn-sm btn-active-light-primary ms-2'
                data-bs-dismiss='modal'
                aria-label='Close'
              >
                <i className="fa fa-times-circle"></i>
              </div>
            </div>
            <div className='modal-body'>
              <Notifications />
              <p>Modal body text goes here.</p>
            </div>
            <div className='modal-footer'>
              <button type='button' className='btn btn-light' data-bs-dismiss='modal'>
                Close
              </button>
              <button type='button' className='btn btn-primary'>
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
