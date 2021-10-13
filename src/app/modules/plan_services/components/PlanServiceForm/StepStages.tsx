import { Field, Formik, Form, FormikProps } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import Board from 'react-trello'
import { InputSelect } from '../../../global/components/inputs'
import { stagesTypes } from '../../../../redux/types/stagesTypes';
import { RootState } from '../../../../../setup/redux/RootReducer';
import { StagesModel } from '../../../../redux/reducers/StagesReducer';
import { useEffect } from 'react';

const optionsTemplates = [
  {value: '1', label: 'Plantilla1'},
]



export const StepStages = () => {
  const stages: any = useSelector<RootState>(({stages}) => stages.stages);
  

  const bc = ['ecf8ff', 'e8fff3', 'f8f5ff', 'fff8dd', 'fff5f8', 'f0fcff', 'fef2ff', 'ededed'];
  const colors = ['009ef7' ,'50cd89' ,'7239ea' ,'ffc700' ,'f1416c' ,'1ed2ff' ,'f563ff' ,'000000'];
  let stgs;
    stgs = stages.map( (stage: StagesModel, i:number) => {
      if (stage.sstagenumber !==1 && stage.sstagenumber !==10) {
        return {
          description: stage.sdescription,
          id: `stage_${stage.sid}`,
          laneId: 'PLANNED',
          title: `Etapa ${stages.sstagenumber} ${stages.sdescription}`,
          className: 'my-5',
          style: {
            backgroundColor: `#${bc[i-1]}`,
            color: `#${colors[i-1]}`,
          }
        }
      }
    }).filter( (stage:StagesModel) => stage !== undefined );
  console.log(stgs)

  const data = {
    lanes: [
      {
        cards: [
          {
            description: stages[0].sdescription,
            id: 'stage_1',
            laneId: 'stages_selected',
            title: `Etapa ${stages[0].sstagenumber} ${stages[0].sdescription}`,
            draggable: false,
            className: 'bg-secondary my-5 border border-light',
          },
          {
            description: stages[9].sdescription,
            id: 'stage_10',
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
      <div className='card shadow-none bg-secondary'>
        <div className='card-title bg-white rounded p-10 d-flex bd-highlight'>
          <div className='bd-highlight w-75'>
            <h3 className='fw-bold m-0'>Configuracion de etapas del Servicio</h3>
            <p className='text-muted'>
              Puede mover las etapas que utilizara el servicio pero, las etapas del mismo color van
              juntas y las que tengan el mismo icono son dependientes (no pueden estar una sin la
              otra pero pueden ir separadas)
            </p>
          </div>
          <div className='bd-highlight ms-20 w-50'>
          <label className='col-form-label fw-bold fs-6 py-2'>Plantillas</label>
              <Field name={'question_type'} component={InputSelect} options={optionsTemplates} />
          </div>
        </div>
        <div className='card-body'>
          <Board data={data} className='bg-secondary' style={{maxHeight: '700px'}} />
        </div>
      </div>
      </Form>
        )}
      </Formik>
    </>
  )
}
