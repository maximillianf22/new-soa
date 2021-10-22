import {Formik, Form, FormikProps, Field} from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../../setup/redux/RootReducer';
import { InputCustom } from '../../global/components/inputs/InputCustom';
import { InputDueDate } from '../../global/components/inputs/InputDueDate';
import Select from 'react-select';
import { FamilyModel } from '../../families/Interfaces/models';
import { servicesTypes } from '../../../redux/types/types';

const optionsGroups = [
  {value: 'vehicular', label: 'Vehicular'},
  {value: 'medica', label: 'Medica'},
  {value: 'servicio', label: 'Servicio'},
]

export const ServicesViewEditForm = () => {
  const selectedService: any = useSelector<RootState>(({services}) => services.selectedService)
  const families: any = useSelector<RootState>(({families}) => families)
  const {loading, editing: isEditing, viewing: isViewing}: any = useSelector<RootState>(({ui}) => ui)
  const dispatch = useDispatch();


  return (
    <>
      <Formik
        initialValues={{...selectedService}}
        enableReinitialize={true}
        onSubmit={(values) => {
          console.log('en submit', values)
          dispatch({
            type: isEditing ? servicesTypes.Update : servicesTypes.Create,
            payload: values
          });
          dispatch({type: servicesTypes.AsyncLoad})
        }}
      >
        {(props: FormikProps<any>) => (
          <Form>
            <div className='card'>
              <div className='card-body'>
                <div className='row'>
                  <div className='col-md-12 px-5 fv-row my-3'>
                    <InputCustom type='text' name='servDescription' label='Descripcion' required disabled={isViewing} />
                  </div>
                  <Select
                    className='form-control p-0'
                    defaultValue={families.families?.find( (f:FamilyModel) => f.fmId === selectedService?.fmId )}
                    getOptionLabel={(option:any) => option.fmDescription}
                    getOptionValue={(option:any) => option.fmId.toString()}
                    isSearchable
                    onChange={(family) => {
                      props.setFieldValue("fmId", family?.fmId);
                    }}
                    name="fmId"
                    options={families.families}
                    isDisabled={isViewing}
                  />
                  <div className='col-md-4 px-5 fv-row my-3'>
                    {selectedService ? (
                      <InputDueDate
                        init_name="servStartDate"
                        end_name="servDueDate"
                      />
                    ) : (
                      <InputDueDate />
                    )}
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
                    <button type='button' className='btn btn-info mx-8'>
                      Ver servicios
                    </button>
                    }
                  <button type='button' className='btn btn-primary mx-8' data-bs-dismiss='modal'>
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  )
}
