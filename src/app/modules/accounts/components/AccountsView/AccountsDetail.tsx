import {Form, Formik, FormikProps} from 'formik'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { RootState } from '../../../../../setup';
import { accountsActions } from '../../../../redux/actions/accountsActions';
import { plansActions } from '../../../../redux/actions/plansActions';
import { planTypes } from '../../../../redux/types/planTypes';
import {IAccountInfo, IAccountsDetail} from '../../Interfaces/models'

export const AccountsDetail = ({
  count_vip,
  count_active,
  count_inactive,
}: IAccountsDetail) => {

  const {accounts, selectedAccount}: any = useSelector<RootState>(({accounts}) => accounts)


  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({type: planTypes.loadPlansByAcId, payload: selectedAccount})
  }, [dispatch, selectedAccount])

  const selectAccountChange = (account: any) => {

    dispatch(accountsActions.selectedAccount(account))
    // dispatch(plansActions.setAllReduxPlans(account.plans))

  }

  return (
    <>
      <div className='card'>
        <div className='card-body p-0'>
          <div
            className={`card-header ribbon ribbon-top border-0 min-h-50px ${
              selectedAccount.acIsVip ? 'bg-warning' : 'bg-primary'
            }`}
          >
            <div className={`ribbon-label fw-bolder ${selectedAccount.acStatus ? 'bg-success' : 'bg-danger'}`}>
              {selectedAccount.acStatus ? 'Activo' : 'Inactivo'}
            </div>
            <Formik
              initialValues={{name: ''}}
              enableReinitialize={true}
              onSubmit={(values) => {
                //   console.log('en submit', values)
              }}
            >
              {(props: FormikProps<any>) => (
                <Form className='w-100 mt-10'>
                  {/* <Field name='accounts' component={InputSelect} options={optionsAccounts} /> */}
                  <Select
                    className='form-control p-0'
                    defaultValue={selectedAccount}
                    // isDisabled={isDisabled}
                    // isLoading={isLoading}
                    getOptionLabel={(option) => option.acName}
                    getOptionValue={(option) => option.acId.toString()}
                    isSearchable
                    onChange={(account) => selectAccountChange(account)}
                    name="accountSelect"
                    options={accounts}
                  />
                </Form>
              )}
            </Formik>
          </div>
          <div className={`px-9 pt-4 h-200px w-100  ${selectedAccount.acIsVip ? 'bg-warning' : 'bg-primary'}`}>
            <div className='d-flex text-center flex-column text-white pt-0'>
              <span className='fw-bolder fs-1 pt-1 text-nowrap'>
                {selectedAccount.acName}
                <a href='' className='ms-3'>
                  <i className='fa fa-edit fs-3 text-white'></i>
                </a>
              </span>
              <div className='row mt-4'>
                <div className='col-md-6 text-start'>
                  <span className='fs-9 fw-bold text-uppercase'>Piloto</span>
                  <br />
                  <span className='fw-bold fs-4'>{selectedAccount.acPilotNumber}</span>
                </div>
                <div className='col-md-6 text-end'>
                  <span className='fs-8 fw-bold text-uppercase'>Proveedor</span>
                  <br />
                  <span className='fw-bold fs-4'>{selectedAccount.acPilotProviderNumber}</span>
                </div>
              </div>
            </div>
          </div>
          <div
            className='shadow-xs card-rounded mx-9 mb-9 p-3 position-relative z-index-1 bg-white'
            style={{marginTop: '-80px'}}
          >
            <div className='px-3 py-2 d-flex align-items-center mb-6'>
              <div className='symbol symbol-45px w-40px me-5'>
                <span className='symbol-label bg-warning'>
                  <i className='fa fa-check-circle fa-lg text-black'></i>
                </span>
              </div>
              <div className='d-flex align-items-center flex-wrap w-100'>
                <div className='mb-1 pe-3 flex-grow-1'>
                  <a href='#' className='fs-5 text-hover-primary text-warning fw-bolder'>
                    Planes VIP
                  </a>
                  <div className='text-gray-400 fw-bold fs-7'>Listado</div>
                </div>
                <div className='d-flex align-items-center'>
                  <div className='fw-bolder fs-5 text-warning pe-1'>{count_vip}</div>
                </div>
              </div>
            </div>
            <div className='px-3 py-2 d-flex align-items-center mb-6'>
              <div className='symbol symbol-45px w-40px me-5'>
                <span className='symbol-label bg-lighten'>
                  <i className='fa fa-plus-circle fa-lg'></i>
                </span>
              </div>
              <div className='d-flex align-items-center flex-wrap w-100'>
                <div className='mb-1 pe-3 flex-grow-1'>
                  <a href='#' className='fs-5 text-gray-800 text-hover-primary fw-bolder'>
                    Planes Activos
                  </a>
                  <div className='text-gray-400 fw-bold fs-7'>Listado</div>
                </div>
                <div className='d-flex align-items-center'>
                  <div className='fw-bolder fs-5 text-gray-800 pe-1'>{count_active}</div>
                </div>
              </div>
            </div>
            <div className='px-3 py-2 d-flex align-items-center mb-0'>
              <div className='symbol symbol-45px w-40px me-5'>
                <span className='symbol-label bg-lighten'>
                  <i className='fa fa-minus-circle fa-lg'></i>
                </span>
              </div>
              <div className='d-flex align-items-center flex-wrap w-100'>
                <div className='mb-1 pe-3 flex-grow-1'>
                  <a href='#' className='fs-5 text-gray-800 text-hover-primary fw-bolder'>
                    Planes Inactivos
                  </a>
                  <div className='text-gray-400 fw-bold fs-7'>Listado</div>
                </div>
                <div className='d-flex align-items-center'>
                  <div className='fw-bolder fs-5 text-gray-800 pe-1'>{count_inactive}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
