import {Formik, Form, FormikProps} from 'formik'
import { shallowEqual, useSelector } from 'react-redux';
import { RootState } from '../../../../../../setup/redux/RootReducer';

export const ModalTime = () => {

  const items: any = useSelector<RootState>(({stages}) => stages.validatedStages?.items, shallowEqual);

  let initialValues = {};
    items?.map( (stage: any, i:number) => {
      initialValues = {...initialValues,[stage.sId]: stage.ssTime}
    });
  

  return (
    <>
      <div className='modal' tabIndex={-1} id='kt_modal_time'>
        <div className='modal-dialog modal-dialog-centered modal-sm'>
          <div className='modal-content'>
            <div className='modal-body'>
              <div className='card'>
                <div className='card-body p-0'>
                  <div className='text-center w-100 '>
                    <h2 className='fw-bolder text-center text-dark'>Tiempo por etapa</h2>
                    <p className='text-muted'>Coloque el tiempo en minutos para cada etapa</p>
                  </div>
                  <Formik
                    initialValues={initialValues}
                    enableReinitialize={true}
                    onSubmit={(values) => console.log(values)}
                  >
                    {(props: FormikProps<any>) => (
                      <Form>
                        <table className='table table-borderless table-sm'>
                          <thead>
                            <tr className='fw-bolder text-muted bg-light text-uppercase'>
                              <th scope='col' className='ps-4'>
                                Etapa
                              </th>
                              <th scope='col'>Tiempo</th>
                              <th scope='col'></th>
                            </tr>
                          </thead>
                          <tbody>
                            {items?.map( (stage: any, index:number) => (
                              <tr key={index} className='px-4'>
                                <th scope='row' className='pt-2 fw-bolder fs-5'>
                                  Etapa {stage.sId}
                                </th>
                                <td>
                                  <input
                                    type='text'
                                    name={`${stage.sId}`}
                                    onChange={(time) => {
                                      items.map( (item:any) => item.sId === stage.sId ? item.ssTime =  `00:${time.target.value}:00` : item );
                                      props.setFieldValue(`${stage.sId}`, `00:${time.target.value}:00`);
                                    }}
                                    className='form-control form-control-sm form-control-sm-mod form-control-solid'
                                  />
                                </td>
                              </tr>
                            ) )
                            }
                          </tbody>
                        </table>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
              <div className='modal-footer p-0 m-0 border-0'>
                <button type='button' className='btn btn-primary btn-sm m-0' data-bs-dismiss='modal'>
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
