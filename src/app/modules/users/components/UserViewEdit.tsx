import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../../setup';
import { actions } from '../../../redux/reducers/UsersRedux';
import {FormRegular} from './UsersForms/FormRegular'

export const UserViewEdit = () => {
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(actions.ClearSelectedUser());
  }
  
  return (
    <>
      <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <FormRegular />
              
            </div>
            <div className="modal-footer">
              
            </div>
          </div>
        </div>
      </div>
      {/* <div className='modal fade' tabIndex={-1} id='kt_modal_user_view_edit'>
        <div className='modal-dialog modal-lg modal-dialog-centered'>
          <div className='modal-content'>
            <div className='modal-body'>
              <div>
                <FormRegular />
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  )
}
