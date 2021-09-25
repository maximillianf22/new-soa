import {useDispatch} from 'react-redux'
import { AccountsForm } from '../AccountsForm'
// import { userActions } from '../../../redux/actions/actions';

export const AccountCreateEdit = () => {
  const dispatch = useDispatch()
  const handleClose = () => {
    console.log('entro');
    // dispatch(userActions.ClearSelectedUser());
  }
  return (
    <>
      <div
        className='modal fade'
        id='accountCreateUpdateModal'
        tabIndex={-1}
        aria-labelledby='accountCreateUpdateModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-xl modal-dialog-centered'>
          <div className='modal-content bg-secondary'>
            <div className='modal-body p-13 card bg-secondary'>
              <div className='card-header border-0 p-0 ps-2 pe-4 mb-5'>
                <h2 className='card-title align-items-start flex-column'>
                  <span className='card-label fw-bolder fs-2 mb-1'>Modal de Cuentas</span>
                  <span className='text-muted mt-1 fw-bold fs-6'>Informacion detallada de la cuenta</span>
                </h2>
                <div className='card-toolbar'>
                  <button
                    type='button'
                    className='btn-close'
                    data-bs-dismiss='modal'
                    aria-label='Close'
                    // onClick={() => dispatch(accountsActions.active({}))}
                  ></button>
                </div>
              </div>
              <div className='card'>
                <AccountsForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
