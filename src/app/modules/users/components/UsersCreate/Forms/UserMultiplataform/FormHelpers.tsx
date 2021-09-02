import * as Yup from 'yup'

export interface ICreateUser {
  accountType: string
  accountTeamSize: string
  accountName: string
  accountPlan: string
  businessName: string
  businessDescriptor: string
  businessType: string
  businessDescription: string
  businessEmail: string
  nameOnCard: string
  cardNumber: string
  cardExpiryMonth: string
  cardExpiryYear: string
  cardCvv: string
  saveCard: string
}

const createUserSchemas = [
  Yup.object({
    accountType: Yup.string().required().label('Account Type'),
  }),
  Yup.object({
    accountType: Yup.string().required().label('Account Type'),
  }),
  Yup.object({
    accountType: Yup.string().required().label('Account Type'),
  }),
]

const inits: ICreateUser = {
  accountType: 'personal',
  accountTeamSize: '50+',
  accountName: '',
  accountPlan: '1',
  businessName: 'Keenthemes Inc.',
  businessDescriptor: 'KEENTHEMES',
  businessType: '1',
  businessDescription: '',
  businessEmail: 'corp@support.com',
  nameOnCard: 'Max Doe',
  cardNumber: '4111 1111 1111 1111',
  cardExpiryMonth: '1',
  cardExpiryYear: '2025',
  cardCvv: '123',
  saveCard: '1',
}

export {createUserSchemas, inits}