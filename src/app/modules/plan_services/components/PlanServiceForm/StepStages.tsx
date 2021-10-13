import { Field, Formik, Form, FormikProps } from 'formik';
import Board from 'react-trello'
import { InputSelect } from '../../../global/components/inputs'

const optionsTemplates = [
  {value: '1', label: 'Plantilla1'},
]

const data = {
  lanes: [
    {
      cards: [
        {
          description: 'Creacion de la Asistencia o Servicio',
          id: 'stage_1',
          laneId: 'stages_selected',
          title: 'Etapa 1 Creacion de la Asistencia ',
          draggable: false,
          className: 'bg-secondary my-5 border border-light',
        },
        {
          description: 'Fin de la Asistencia y envio de encuesta de satisfaccción al Afiliado',
          id: 'stage_10',
          laneId: 'stages_selected',
          title: 'Etapa 10 Encuesta de satisfacción',
          className: 'my-5 bg-secondary',
        },
      ],
      currentPage: 1,
      id: 'stages_selected',
      title: 'Etapas Seleccionadas',
    },
    {
      cards: [
        {
          description: 'Busqueda y asignacion del Proveedor al Servicio',
          id: 'stage_2',
          laneId: 'PLANNED',
          title: 'Etapa 2 Asignacion del Proveedor',
          className: 'my-5',
          style: {
            backgroundColor: '#ecf8ff',
            color: '#009ef7',
          },
        },
        {
          description: 'Confirmacion del Servicio del Proveedor y los primeros monitoreos',
          id: 'stage_3',
          laneId: 'PLANNED',
          title: 'Etapa 3 Confirmacion del Proveedor y Monitoreos',
          className: 'my-5',
          style: {
            backgroundColor: '#e8fff3',
            color: '#50cd89',
          },
        },
        {
          description: 'Tiempo estimado y confirmacion del arribo por parte del Proveedor',
          id: 'stage_4',
          laneId: 'PLANNED',
          title: 'Etapa 4 Arribo del Proveedor',
          className: 'my-5',
          style: {
            backgroundColor: '#f8f5ff',
            color: '#7239ea',
          },
        },
        {
          description: 'Contactacion del Afiliado para confirmar el arribo del Proveedor',
          id: 'stage_5',
          laneId: 'PLANNED',
          title: 'Etapa 5 Contactación del Afiliado',
          className: 'my-5',
          style: {
            backgroundColor: '#fff8dd',
            color: '#ffc700',
          },
        },
        {
          description: 'Diagnostico del Servicio por parte del Proveedor ',
          id: 'stage_6',
          laneId: 'PLANNED',
          title: 'Etapa 6 Diagnostico del Servicio',
          className: 'my-5',
          style: {
            backgroundColor: '#fff5f8',
            color: '#f1416c',
          },
        },
        {
          description: 'Costeo del Servicio por parte del Proveedor',
          id: 'stage_7',
          laneId: 'PLANNED',
          title: 'Etapa 7 Costeo del Servicio',
          className: 'my-5',
          style: {
            backgroundColor: '#f0fcff',
            color: '#1ed2ff',
          },
        },
        {
          description: 'Termino del Servicio por parte del Proveedor',
          id: 'stage_8',
          laneId: 'PLANNED',
          title: 'Etapa 8 Termino del Proveedor',
          className: 'my-5',
          style: {
            backgroundColor: '#fef2ff',
            color: '#f563ff',
          },
        },
        {
          description: 'Confirmacion del termino del Servicio con el Afiliado',
          id: 'stage_9',
          laneId: 'PLANNED',
          title: 'Etapa 9 Confirmacion del Termino del Servicio',
          className: 'my-5',
          style: {
            backgroundColor: '#ededed',
            color: '#000000',
          },
        },
      ],
      currentPage: 1,
      id: 'DONE',
      title: 'Etapas disponibles',
    },
  ],
}

export const StepStages = () => {
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
