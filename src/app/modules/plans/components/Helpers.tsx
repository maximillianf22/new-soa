import * as Yup from 'yup'
import { ICreatePlans } from '../Interfaces/models'


const createPlansSchemas = Yup.object().shape({
  plName: Yup.string().required('Este campo es requerido'),
  plIsVip: Yup.boolean().required('Este campo es requerido'),
  plStatus: Yup.boolean().required('Este campo es requerido'),
  plStartDate: Yup.date().required('Este campo es requerido'),
  plDueDate: Yup.date().required('Este campo es requerido'),
  plDaysToDue: Yup.number().required('Este campo es requerido'),
  plEventsShared: Yup.boolean().required('Este campo es requerido'),
  plnumEventsShared: Yup.number().required('Este campo es requerido'),
  acId: Yup.number().moreThan(0),
  // plFileUploadPath: Yup.string().required('Este campo es requerido'),
})

const initialValues: ICreatePlans = {
    plId: 0,
    plName: '',
    plIsVip: false,
    plStatus: true,
    plStartDate: '',
    plDueDate: '',
    plDaysToDue: 0,
    plEventsShared: false,
    plnumEventsShared: 0,
    // plFileUploadPath: null,
    acId: 0
}

export {createPlansSchemas, initialValues}
