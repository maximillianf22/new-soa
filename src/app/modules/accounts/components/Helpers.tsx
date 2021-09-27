import * as Yup from 'yup'
import { ICreateAccounts } from '../Interfaces/models'


const createAccountsSchemas = Yup.object().shape({
  acName: Yup.string().required('Este campo es requerido'),
  acPilotNumber: Yup.string().required('Este campo es requerido'),
  acStatus: Yup.boolean().required('Este campo es requerido'),
  acIsVip: Yup.boolean().required('Este campo es requerido'),
  acHasBeneficiaries: Yup.boolean().required('Este campo es requerido')
})

const initialValues: ICreateAccounts = {
  acName: '',
  acPilotNumber: '',
  acStatus: true,
  acIsVip: false,
  acHasBeneficiaries: false,
  acPilotProviderNumber: '',
}

export {createAccountsSchemas, initialValues}
