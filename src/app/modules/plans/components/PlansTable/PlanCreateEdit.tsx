import {useDispatch} from 'react-redux'
import { PlansForm } from '../PlansForm'
// import { userActions } from '../../../redux/actions/actions';

export const PlanCreateEdit = () => {
  const dispatch = useDispatch()
  const handleClose = () => {
    // dispatch(userActions.ClearSelectedUser());
  }
  return (
    <>
      <div
        className='modal fade'
        id='planCreateUpdateModal'
        tabIndex={-1}
        aria-labelledby='planCreateUpdateModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-xl modal-dialog-centered'>
          <div className='modal-content bg-secondary'>
            <div className='modal-body p-13 card bg-secondary'>
              <div className='card-header border-0 p-0 ps-2 pe-4 mb-5'>
                <h2 className='card-title align-items-start flex-column'>
                  <span className='card-label fw-bolder fs-2 mb-1'>Modal de Planes</span>
                  <span className='text-muted mt-1 fw-bold fs-6'>Informacion detallada del plan</span>
                </h2>
                <div className='card-toolbar'>
                  <button
                    type='button'
                    className='btn-close'
                    data-bs-dismiss='modal'
                    aria-label='Close'
                  ></button>
                </div>
              </div>
              <div className='card'>
                <PlansForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
