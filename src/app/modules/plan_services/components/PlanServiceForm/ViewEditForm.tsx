import { Field, Form, Formik, FormikProps } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import {InputCustom, InputSelect} from '../../../global/components/inputs'
import { RootState } from '../../../../../setup/redux/RootReducer';
import { Link } from 'react-router-dom';
import { ServiceModel } from '../../../services/Interfaces/models';
import Select from 'react-select';
import { IPlanResponse } from '../../../plans/Interfaces/models';


const optionsServices = [
  {value: 'id1', label: 'Servicio Técnico'},
  {value: 'id2', label: 'Plomeria'},
  {value: 'id3', label: 'Cerrajeria'},
]

const optionsPlans = [
  {value: 'id1', label: 'Plan A'},
]

const optionsFrecuencies = [
  {value: 'id1', label: 'Semanal'},
  {value: 'id2', label: 'Mensual'},
  {value: 'id3', label: 'Anual'},
]

const optionsCoins = [
  {value: 'id1', label: 'COP - Peso Colombiano'},
  {value: 'id2', label: 'USD - Dolar Americano'},
]


export const ViewEditForm = () => {
  const selectedPlanService: any = useSelector<RootState>(({planServices}) => planServices.selectedPlanService);
  const services: any = useSelector<RootState>(({services}) => services)
  const plans: any = useSelector<RootState>(({accounts}) => accounts.selectedAccount)

  console.log('GOOOLA',services)

  const {loading, editing: isEditing, viewing: isViewing}: any = useSelector<RootState>(({ui}) => ui);
  const dispatch = useDispatch();

  return (
    <>
      <Formik
        initialValues={{...selectedPlanService}}
        enableReinitialize={true}
        onSubmit={(values) => {
          console.log('en submit', values)
          // dispatch({
          //   type: isEditing ? planServicesTypes.Update : planServicesTypes.Create,
          //   payload: values
          // });
          // dispatch({type: planServicesTypes.AsyncLoad})
        }}
      >
        {(props: FormikProps<any>) => (
        <Form>
          <div className='row'>
            <div className='col-md-9'>
              <div className='card' style={{minHeight: '90vh', maxHeight: '90vh', overflowY: 'auto'}}>
                <div className='card-body'>
                  <p className='fw-bold fs-2 mt-3 m-0 ms-3'>Nuevo Plan Servicio</p>
                  <p className='fw-bold fs-help text-muted ms-3'>Registrar un nuevo servicio</p>
                  <div className='row'>
                  <div className='col-md-6 px-5 fv-row my-3'>
                      <label className='col-form-label required fw-bold fs-6 py-2'>Plan</label>
                      <Select
                        className='form-control p-0'
                        defaultValue={plans.plans?.find( (p:IPlanResponse) => p.plId === selectedPlanService?.plId )}
                        getOptionLabel={(option:any) => option.plName}
                        getOptionValue={(option:any) => option.plId.toString()}
                        isSearchable
                        onChange={(service) => {
                          props.setFieldValue("plId", service?.plId);
                        }}
                        name="plId"
                        options={plans.plans}
                        isDisabled={isViewing}
                      />
                    </div>
                    <div className='col-md-6 px-5 fv-row my-3'>
                      <label className='col-form-label required fw-bold fs-6 py-2'>Servicio</label>
                      <Select
                        className='form-control p-0'
                        defaultValue={services.services?.find( (s:ServiceModel) => s.servId === selectedPlanService?.servId )}
                        getOptionLabel={(option:any) => option.servDescription}
                        getOptionValue={(option:any) => option.servId.toString()}
                        isSearchable
                        onChange={(service) => {
                          props.setFieldValue("servId", service?.servId);
                        }}
                        name="servId"
                        options={services.services}
                        isDisabled={isViewing}
                      />
                    </div>



                    
                    <div className='col-md-6 px-5 fv-row my-3'>
                      <InputCustom type='text' name='spLabelForUser' label='Etiqueta o nombre' required />
                    </div>
                    <div className='col-md-6 px-5 fv-row my-3'>
                      <InputCustom type='file' name='spLogoUploadPath' label='Logo o icono' />
                    </div>
                    <div className='col-md-6 px-5 fv-row my-3'>
                      <InputCustom type='number' name='spNumberOfEvents' label='Cantidad de eventos' />
                    </div>
                    <div className='col-md-6 px-5 fv-row my-3'>
                      <label className='col-form-label required fw-bold fs-6 py-2'>Frecuencia</label>
                      <Field name='spFrecuency' component={InputSelect} options={optionsFrecuencies} />
                    </div>
                    <div className='col-md-6 px-5 fv-row my-3'>
                      <InputCustom type='number' name='spCost' label='Costo' />
                    </div>
                    <div className='col-md-6 px-5 fv-row my-3'>
                      <label className='col-form-label required fw-bold fs-6 py-2'>Moneda</label>
                      <Field name='pId' component={InputSelect} options={optionsCoins} />
                    </div>
                    <div className='col-md-8 px-5 fv-row my-3'>
                      <InputCustom
                        type='textarea'
                        name='spConditionsDescription'
                        label='Descripcion del servicio'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-3'>
              <div className='card' style={{minHeight: '90vh', maxHeight: '90vh', overflowY: 'auto'}}>
                <div className='card-body'>
                  <p className='fw-bold fs-3 text-center'>Configuracion Adicional</p>
                  <div className='col-md-12 px-5 fv-row my-2 text-start'>
                    <label></label>
                    <div className='form-check form-check-custom form-check-solid my-auto h-75'>
                      <InputCustom
                        className='form-check-input h-30px w-30px'
                        type='checkbox'
                        name='spVehicle'
                        id='flexCheckChecked'
                      />
                      <label className='form-check-label ms-5'>Registro de vehiculo</label>
                    </div>
                  </div>
                  <div className='col-md-12 px-5 fv-row my-2 text-start'>
                    <label></label>
                    <div className='form-check form-check-custom form-check-solid my-auto h-75'>
                      <InputCustom
                        className='form-check-input h-30px w-30px'
                        type='checkbox'
                        name='spThreePoints'
                        id='flexCheckChecked'
                      />
                      <label className='form-check-label ms-5'>Ruta de 3 puntos</label>
                    </div>
                  </div>
                  <div className='col-md-12 px-5 fv-row my-2 text-start'>
                    <div className='my-auto h-100 text-center mt-4'>
                      <label></label>
                      <div className='form-check form-check-custom form-check-solid'>
                        <InputCustom
                          className='form-check-input h-30px w-30px'
                          type='checkbox'
                          name='spVideocall'
                          id='flexSwitchChecked'
                        />
                        <label className='form-check-label ms-5'>Video Llamadas</label>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-12 px-5 fv-row my-2 text-start'>
                    <div className='my-auto h-100 text-center mt-4'>
                      <label></label>
                      <div className='form-check form-check-custom form-check-solid'>
                        <InputCustom
                          className='form-check-input h-30px w-30px'
                          type='checkbox'
                          name='spGroupEqualService'
                          id='flexSwitchChecked'
                        />
                        <label className='form-check-label ms-5'>Asistencia simultanea</label>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-12 px-5 fv-row my-2 text-start'>
                    <div className='my-auto h-100 text-center mt-4'>
                      <label></label>
                      <div className='form-check form-check-custom form-check-solid'>
                        <InputCustom
                          className='form-check-input h-30px w-30px'
                          type='checkbox'
                          name='spServApp'
                          id='flexSwitchChecked'
                        />
                        <label className='form-check-label ms-5'>Permite venta por app</label>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-12 px-5 fv-row my-2 text-start'>
                    <div className='my-auto h-100 text-center mt-4'>
                      <label></label>
                      <div className='form-check form-check-custom form-check-solid'>
                        <InputCustom
                          className='form-check-input h-30px w-30px'
                          type='checkbox'
                          name='spGroupService'
                          id='flexSwitchChecked'
                        />
                        <label className='form-check-label ms-5'>Permite encoladas</label>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-12 px-5 fv-row my-2 text-start'>
                    <div className='my-auto h-100 text-center mt-4'>
                      <label></label>
                      <div className='form-check form-check-custom form-check-solid'>
                        <InputCustom
                          className='form-check-input h-30px w-30px'
                          type='checkbox'
                          name='spReAsignProvider'
                          id='flexSwitchChecked'
                        />
                        <label className='form-check-label ms-5'>Reasignacion de proveedor</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='px-5 pt-5 fv-row text-end'>
                  {!isViewing 
                  ?
                    <button 
                      type='submit'
                      className='btn btn-primary'
                      data-bs-dismiss='modal'
                      disabled={!props.dirty || !props.isValid}
                    >
                      {!loading && <span className='indicator-label'>{isEditing? 'Actualizar': 'Guardar'}</span>}
                        {loading && (
                          <span className='indicator-progress' style={{display: 'block'}}>
                            {isEditing? 'Actualizar': 'Guardar'}
                            <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                          </span>
                        )}
                      </button>
                    :
                    <a href='/accounts/detail'>
                      <button type='button' className='btn btn-info mx-8'>
                        Ver planes
                      </button>
                    </a>
                    }
                  <Link to='/plan-service/home' type='button' className='btn btn-primary mx-8' data-bs-dismiss='modal'>
                    Cerrar
                  </Link>
                </div>
            </div>
          </div>
        </Form>
        )}
      </Formik>
    </>
  )
};