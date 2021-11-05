import { Field, Formik, Form, FormikProps } from 'formik';
import {KTSVG} from '../../../../../../_metronic/helpers'
import {InputCustom} from '../../../../global/components/inputs'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../../../setup/redux/RootReducer';
import { useEffect } from 'react';
import { stagesActions } from '../../../../../redux/actions/stagesActions';
import Select from 'react-select';
import { questionsActions } from '../../../../../redux/actions/questionsActions';
import TagsInput from 'react-tagsinput';
import { ModalOptions } from './ModalOptions';
import { QuestionModel } from '../../../Interfaces/models';


const optionsQuestions = [
  {value: 'IN', label: 'Campo'},
  {value: 'TX', label: 'Texto grande'},
  {value: 'DT', label: 'Fecha y hora'},
  {value: 'DI', label: 'Dirección'},
  {value: 'IM', label: 'Imagen'},
  {value: 'FL', label: 'Archivo'},
  {value: 'SG', label: 'Firma'},
  {value: 'LS', label: 'Lista'},
]

const optionsStages = [
  {value: '1', label: 'Etapa 1'},
  {value: '2', label: 'Etapa 2'},
  {value: '3', label: 'Etapa 3'},
]
const optionsCoins = [
  {pId: '1', label: 'COP - Peso Colombiano'},
  {pId: '2', label: 'USD - Dolar Americano'},
]
export const StepQuestions = () => {
  const selectedPlanService: any = useSelector<RootState>(({planServices}) => planServices.selectedPlanService);
  const planServiceStages: any = useSelector<RootState>(({stages}) => stages.planServiceStages);
  const questions: any = useSelector<RootState>(({questions}) => questions.questions);
  const dispatch = useDispatch();
  console.log(questions)
  useEffect(() => {
    dispatch(questionsActions.get(selectedPlanService.spId));
  }, [selectedPlanService]);

  useEffect(() => {
    dispatch(stagesActions.getPlanServiceStages(selectedPlanService.spId));
  }, [questions]);

  const handleView = (selectedQuestion:QuestionModel) => {
    dispatch(questionsActions.selectedQuestion(selectedQuestion));
  };

  const initialValues:IInitialValues = {
    metadata_service_options: [], smName: '', smPlatformType: 4, smIsRequired:false
  }

  interface IInitialValues {
    metadata_service_options: any[], smName: string, smPlatformType: number, smIsRequired:boolean
  }

  return (
    <>
     <Formik
        initialValues={initialValues}
        enableReinitialize={true}
        onSubmit={(values, { resetForm }):any => {
          values.metadata_service_options = values.metadata_service_options.map( (option:any) => {return {smoOptionName: option} } )
          const valuesToSbmt = {
            s_metadata_service: [values],
            s_metadata_service_file: []
          }
          dispatch(questionsActions.createQuestions(valuesToSbmt))
          resetForm();
        }}
      >
        {(props: FormikProps<any>) => (
        <Form>
      <div id='kt_account_profile_details' className='w-100 card'>
        <div className='card-body'>
          <div className='row mb-6'>
            <h3 className='card-title align-items-start flex-column'>
              <span className='card-label fw-bolder fs-3 mb-1'>
                Configuracion de usuario multi-platforma
              </span>
              <br />
              <span className='text-muted mt-1 fw-bold fs-7'>
                Seleccione el cliente, el perfil de usuario de ese cliente y luego en el boton de
                agregar para guardar, esta accion es por cada cliente
              </span>
            </h3>
            <div className='col-md-3 px-5 fv-row my-3'>
              <label className='col-form-label required fw-bold fs-6 py-2'>Tipo de pregunta</label>
              <Select
                className='form-control p-0'
                defaultValue={optionsQuestions[0]}
                getOptionLabel={(option:any) => `${option.label}`}
                getOptionValue={(option:any) => option.value}
                isSearchable
                onChange={(question) => {
                  props.setFieldValue("smFieldType", question?.value);
                }}
                name="smFieldType"
                options={optionsQuestions}
              />
            </div>
            <div id='ti' className='col-md-5 px-5 fv-row my-3'>
              <InputCustom type='text' name='smName' label='Pregunta' maxLength="20"/>
              {/* Este Tags input solo va cuando el tipo de pregunta es de selección el las otras no se muestra */}
              { props.values.smFieldType === 'LS' && 
                <TagsInput
                  className='form-control form-control white h-40px pt-1 mt-0 mt-5'
                  name='metadata_service_options'
                  inputProps={{
                    placeholder: 'Opciones'
                  }}
                  value={props.values.metadata_service_options}
                  onChange={(tag: any) => {
                    props.setFieldValue('metadata_service_options', tag)
                  }}
                />
              }
              {/* Este Tags input solo va cuando el tipo de pregunta es de selección el las otras no se muestra */}

            </div>
            <div className='col-md-2 px-5 fv-row my-3'>
                <div className='my-auto h-100 text-center mt-4'>
                  <label></label>
                  <div className='form-check form-check-custom form-check-solid'>
                    <InputCustom
                      className='form-check-input h-30px w-30px'
                      type='checkbox'
                      name='smIsRequired'
                      id='flexSwitchChecked'
                    />
                    <label className='form-check-label ms-5'>Requerida</label>
                  </div>
                </div>
              </div>
            <div className='col-md-2 px-5 fv-row my-3'>
              <label className='col-form-label required fw-bold fs-6 py-2'>Etapa</label>
              <Select
                className='form-control p-0'
                defaultValue={planServiceStages[0]?.ssId}
                getOptionLabel={(option:any) => `Etapa ${option.ssOrderIndex}`}
                getOptionValue={(option:any) => option.ssId.toString()}
                onChange={(planServiceStage) => {
                  props.setFieldValue("smServiceId", planServiceStage?.ssId);
                }}
                name="smServiceId"
                options={planServiceStages}
                placeholder=""
              />
            </div>
            <div className='col-md-2 mt-13 d-grid gap-2'>
              <button type="submit" className='btn btn-primary btn-form'>
                <i className='fa fa-save fa-lg'></i> Guardar
              </button>
            </div>
          </div>
          </div>
      </div>
      </Form>
        )}
      </Formik>
      <div className='w-100 card mt-5'>
        <div className='card-body'>
          <div className='ps-2 py-5 mb-6'>
            <h3 className='card-title align-items-start flex-column'>
              <span className='card-label fw-bolder fs-3 mb-1'>
                Listado de configuraciones guardadas
              </span>
            </h3>
            <table className='table table-hover table-rounded gy-3 gs-3 table-sm'>
              <thead className='bg-light round'>
                <tr className='fw-bold fs-6 text-gray-800 border-bottom-2 border-gray-200'>
                  <th className='fw-bolder fs-5 text-uppercase text-center w-300px'>Tipo de pregunta</th>
                  <th className='fw-bolder text-center fs-5 text-uppercase'>Pregunta</th>
                  <th className='fw-bolder text-center fs-5 text-uppercase'>
                    <Select
                        className='form-control p-0'
                        defaultValue={planServiceStages[0]?.ssId}
                        getOptionLabel={(option:any) => `Etapa ${option.ssOrderIndex}`}
                        getOptionValue={(option:any) => option.ssId.toString()}
                        onChange={(planServiceStage) => {
                          dispatch(questionsActions.get(planServiceStage?.ssId));
                        }}
                        name="smServiceId"
                        options={planServiceStages}
                        placeholder="Etapas"
                    />
                  </th>
                  <th className='fw-bolder text-uppercase text-end w-250px py-2'>
                    <div className='d-flex align-items-center position-relative d-sm-none d-none d-md-block d-lg-block'>
                      <KTSVG
                        path='/media/icons/duotone/General/Search.svg'
                        className='svg-icon-2 svg-icon-lg-1 svg-icon-gray-500 position-absolute top-50 ms-5 translate-middle-y start-0'
                      />

                      <input
                        type='text'
                        className='form-control form-control-white px-15'
                        name='search'
                        placeholder='Buscar'
                      />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {questions.map( ({smName, smFieldType, smId, metadata_service_options, smIsRequired}:any) => {
                  switch (smFieldType) {
                    case "IN":
                      smFieldType = "Campo"
                      break;
                    case "TX":
                      smFieldType = "Texto grande"
                      break;
                    case "DT":
                      smFieldType = "Fecha y hora"
                      break;
                    case "DI":
                      smFieldType = "Dirección"
                      break;
                    case "IM":
                      smFieldType = "Imagen"
                      break;
                    case "FL":
                      smFieldType = "Archivo"
                      break;
                    case "SG":
                      smFieldType = "Firma"
                      break;
                    case "LS":
                      smFieldType = "Lista"
                      break;
                    default:
                      break;
                  }
                  return (
                      <tr key={smId} >
                        <td className='text-center fs-4 pt-5'>{smFieldType}</td>
                        <td className='fs-4 pt-5 fw-bolder text-center'>{smName}</td>
                        <td>
                          <div className='form-check form-check-custom form-check-solid'>
                            <input
                              className='form-check-input h-30px w-30px'
                              type='checkbox'
                              name='smIsRequired'
                              id='flexSwitchChecked'
                              readOnly
                              checked={smIsRequired}
                            />
                            <label className='form-check-label ms-5'>Requerida</label>
                          </div>
                        </td>
                        <td >
                          <div className='d-flex justify-content-end'>
                            { metadata_service_options?.length > 0 && 
                            <button
                              className='btn btn-info btn-icon btn-sm p-1 me-3'
                              data-bs-toggle='modal'
                              data-bs-target='#kt_modal_options'
                              onClick={() => handleView({smName, smFieldType, smId, metadata_service_options, smIsRequired})}
                              >
                              <i className='fa fa-eye'></i>
                            </button>
                            }
                            <a href='!#' className='btn btn-icon btn-danger btn-sm'>
                              <i className='fa fa-trash'></i>
                            </a>
                          </div>
                        </td>
                      </tr>
                  )
                } )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <ModalOptions />
    </>
  )
}