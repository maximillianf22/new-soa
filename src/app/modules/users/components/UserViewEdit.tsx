import React from 'react'
import {FormRegular} from './UsersForms/FormRegular'

export const UserViewEdit = () => {
  return (
    <>
      <div className='modal fade' tabIndex={-1} id='kt_modal_user_view_edit'>
        <div className='modal-dialog modal-lg modal-dialog-centered'>
          <div className='modal-content'>
            <div className='modal-body'>
              <div>
                <FormRegular />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
