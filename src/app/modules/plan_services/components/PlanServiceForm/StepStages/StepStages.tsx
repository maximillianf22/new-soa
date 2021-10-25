import {Field, Formik, Form, FormikProps} from 'formik'
import {useDispatch, useSelector} from 'react-redux'
import Board from 'react-trello'
import {InputSelect} from '../../../../global/components/inputs'
import {RootState} from '../../../../../../setup/redux/RootReducer'
import {StagesModel} from '../../../../../redux/reducers/StagesReducer'
import {planServicesTypes} from '../../../../../redux/types/planServicesTypes'
import {ModalTime} from './ModalTime'

const optionsTemplates = [{value: '1', label: 'Plantilla1'}]

export const StepStages = () => {
  const stages: any = useSelector<RootState>(({stages}) => stages.stages)
  const selectedPlanService: any = useSelector<RootState>(
    ({planServices}) => planServices.selectedPlanService
  )
  const dispatch = useDispatch()
  // let eventBus:any = undefined;
  // const setEventBus = (handle:any) => {
  //   eventBus = handle
  // }
  // // eventBus?.publish({type: 'MOVE_CARD', cardId: 'stage_10', index: 10})
  // eventBus.publish({type: 'REMOVE_CARD', laneId: 'PLANNED', cardId: "stage_10"})

  //   let etapasToSbmt = [{
  //     ssOrderIndex: 1,
  //     ssTime: "00:00:00",
  //     ssTimeApp: "00:00:00",
  //     sId: 1
  // }]

  //   const onCardMoveAcrossLanes = (fromLaneId: any, toLaneId: any, cardId: any, index: any) => {
  //     const stage = {
  //       ssOrderIndex: index+1,
  //       ssTime: "00:00:00",
  //       ssTimeApp: "00:00:00",
  //       sId: cardId
  //     }
  //     if(!etapasToSbmt.includes(stage)) {
  //       etapasToSbmt.push(stage)
  //       // etapasToSbmt = etapasToSbmt.filter( s => s.sId === stage.sId)
  //     }
  //     // console.log(fromLaneId, toLaneId, cardId, index)
  //     // console.log(etapasToSbmt)
  //   }

  const newStages = {
    items: [],
  }
  const onDataChange = (newData: any) => {
    const cards = newData.lanes[0].cards
    cards.map((s: any, i: number) => {
      s.sId = s.id
      s.spId = selectedPlanService.spId
      s.ssTime = '00:00:00'
      s.ssTimeApp = '00:00:00'
    })
    newStages.items = cards
    dispatch({type: planServicesTypes.StageValidation, payload: newStages})
  }
  // ################ TODO: cambios en backend para que guarde la data como se maneja en la librería y luego en el front hacer un color picker ################
  const bc = ['ecf8ff', 'e8fff3', 'f8f5ff', 'fff8dd', 'fff5f8', 'f0fcff', 'fef2ff', 'ededed']
  const colors = ['009ef7', '50cd89', '7239ea', 'ffc700', 'f1416c', '1ed2ff', 'f563ff', '000000']

  let stgs
  stgs = stages
    .map((stage: StagesModel, i: number) => {
      if (stage.sstagenumber !== 1 && stage.sstagenumber !== 10) {
        return {
          description: stage.sdescription,
          id: `${stage.sid}`,
          ssOrderIndex: stage.sstagenumber,
          laneId: 'PLANNED',
          title: `Etapa ${stage.sstagenumber} ${stage.sdescription}`,
          className: 'my-5',
          style: {
            backgroundColor: `#${bc[i - 1]}`,
            color: `#${colors[i - 1]}`,
          },
        }
      }
    })
    .filter((stage: StagesModel) => stage !== undefined)

  const data = {
    lanes: [
      {
        cards: [
          {
            description: stages[0].sdescription,
            id: '1',
            ssOrderIndex: 1,
            laneId: 'stages_selected',
            title: `Etapa ${stages[0].sstagenumber} ${stages[0].sdescription}`,
            draggable: false,
            className: 'bg-secondary my-5 border border-light',
          },
          {
            description: stages[9].sdescription,
            id: '10',
            ssOrderIndex: 10,
            laneId: 'stages_selected',
            title: `Etapa ${stages[9].sstagenumber} ${stages[9].sdescription}`,
            className: 'my-5 bg-secondary',
          },
        ],
        currentPage: 1,
        id: 'stages_selected',
        title: 'Etapas Seleccionadas',
      },
      {
        cards: stgs,
        currentPage: 1,
        id: 'DONE',
        title: 'Etapas disponibles',
      },
    ],
  }

  return (
    <>
      <Formik
        initialValues={{}}
        enableReinitialize={true}
        onSubmit={(values) => {
          dispatch({type: planServicesTypes.StageSave, payload: newStages})
          // dispatch({
          //   type: isEditing ? planServicesTypes.Update : planServicesTypes.Create,
          //   payload: values
          // });
          // dispatch({type: planServicesTypes.AsyncLoad})
        }}
      >
        {(props: FormikProps<any>) => (
          <Form>
            <div className='card shadow-none bg-secondary'>
              <div className='card-title bg-white rounded p-10 d-flex bd-highlight'>
                <div className='bd-highlight w-75'>
                  <h3 className='fw-bold m-0'>Configuracion de etapas del Servicio</h3>
                  <p className='text-muted'>
                    Puede mover las etapas que utilizara el servicio pero, las etapas del mismo
                    color van juntas y las que tengan el mismo icono son dependientes (no pueden
                    estar una sin la otra pero pueden ir separadas)
                  </p>
                </div>
                <div className='bd-highlight ms-20 w-50'>
                  <label className='col-form-label fw-bold fs-6 py-2'>Plantillas</label>
                  <Field
                    name={'question_type'}
                    component={InputSelect}
                    options={optionsTemplates}
                  />
                </div>
              </div>
              <div className='card-body'>
                <Board
                  data={data}
                  onDataChange={onDataChange}
                  className='bg-secondary'
                  style={{maxHeight: '1200px'}}
                />
              </div>
            </div>
            <div className='row px-10'>
              <div className='col-3 d-grid gap-2 offset-md-6'>
                <button
                  className='btn btn-lg btn-info me-0 mt-10 mb-6'
                  data-bs-toggle='modal'
                  data-bs-target='#kt_modal_time'
                >
                  Programar tiempos
                  <i className='fa fa-clock svg-icon-3 ms-2 me-0'></i>
                </button>
              </div>
              <div className='col-3 d-grid gap-2'>
                <button type='submit' className='btn btn-lg btn-primary me-0 mt-10 mb-6'>
                  Guardar
                  <i className='fa fa-arrow-right svg-icon-3 ms-2 me-0'></i>
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
      <ModalTime />
    </>
  )
}
