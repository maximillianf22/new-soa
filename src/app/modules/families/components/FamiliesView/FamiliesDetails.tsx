import React from 'react'
import {Field, Form, Formik, FormikProps} from 'formik'
import {InputSelect} from '../../../global/components/inputs'
import {IFamiliesDetails} from '../../Interfaces/models'

const optionsFamilies = [
  {value: 'id1', label: 'Semanal'},
  {value: 'id2', label: 'Mensual'},
  {value: 'id3', label: 'Anual'},
]

export const FamiliesDetails = ({
  active,
  description,
  created_at,
  updated_at,
  modified_by,
  count_vip,
  count_active,
  count_inactive,
}: IFamiliesDetails) => {
  return (
    <>
      <div className='card'>
        <div className='card-body p-0'>
          <div className='card-header ribbon ribbon-top border-0 min-h-50px bg-primary'>
            <div className={`ribbon-label fw-bolder ${active ? 'bg-success' : 'bg-danger'}`}>
              {active ? 'Activo' : 'Inactivo'}
            </div>
            <Formik
              initialValues={{name: ''}}
              enableReinitialize={true}
              onSubmit={(values) => {
                //   console.log('en submit', values)
              }}
            >
              {(props: FormikProps<any>) => (
                <Form className='w-75 mt-10'>
                  <Field name='accounts' component={InputSelect} options={optionsFamilies} />
                </Form>
              )}
            </Formik>
          </div>
          <div className='px-9 pt-1 h-200px w-100 bg-primary '>
            <div className='d-flex text-center flex-column text-white pt-0'>
              <span className='fw-bolder fs-1 pt-1 text-nowrap'>
                {description}
                <a href='' className='ms-3'>
                  <i className='fa fa-edit fs-3 text-white'></i>
                </a>
              </span>
              <div className='row mt-4'>
                <div className='col-md-6 text-start'>
                  <span className='fs-9 fw-bold text-uppercase'>Creado</span>
                  <br />
                  <span className='fw-bold fs-4'>{created_at}</span>
                </div>
                <div className='col-md-6 text-end'>
                  <span className='fs-8 fw-bold text-uppercase'>Modificado</span>
                  <br />
                  <span className='fw-bold fs-4'>{updated_at}</span>
                  <br />
                  <span className='fs-8 fw-bold text-uppercase'>Por {modified_by}</span>
                </div>
              </div>
            </div>
          </div>
          <div
            className='shadow-xs card-rounded mx-9 mb-9 p-3 position-relative z-index-1 bg-white'
            style={{marginTop: '-80px'}}
          >
            <div className='px-3 py-2 d-flex align-items-center mb-6'>
              <div className='symbol symbol-45px w-40px me-5'>
                <span className='symbol-label bg-warning'>
                  <i className='fa fa-check-circle fa-lg text-black'></i>
                </span>
              </div>
              <a href='' className='w-100'>
                <div className='d-flex align-items-center flex-wrap w-100'>
                  <div className='mb-1 pe-3 flex-grow-1'>
                    <span className='fs-5 text-hover-primary text-warning fw-bolder'>
                      Servicios VIP
                    </span>
                    <div className='text-gray-400 fw-bold fs-7'>Listado</div>
                  </div>
                  <div className='d-flex align-items-center'>
                    <div className='fw-bolder fs-5 text-warning pe-1'>{count_vip}</div>
                  </div>
                </div>
              </a>
            </div>
            <div className='px-3 py-2 d-flex align-items-center mb-6'>
              <div className='symbol symbol-45px w-40px me-5'>
                <span className='symbol-label bg-lighten'>
                  <i className='fa fa-plus-circle fa-lg'></i>
                </span>
              </div>
              <a href='' className='w-100'>
                <div className='d-flex align-items-center flex-wrap w-100'>
                  <div className='mb-1 pe-3 flex-grow-1'>
                    <span className='fs-5 text-gray-800 text-hover-primary fw-bolder'>
                      Servicios Activos
                    </span>
                    <div className='text-gray-400 fw-bold fs-7'>Listado</div>
                  </div>
                  <div className='d-flex align-items-center'>
                    <div className='fw-bolder fs-5 text-gray-800 pe-1'>{count_active}</div>
                  </div>
                </div>
              </a>
            </div>
            <div className='px-3 py-2 d-flex align-items-center mb-0'>
              <div className='symbol symbol-45px w-40px me-5'>
                <span className='symbol-label bg-lighten'>
                  <i className='fa fa-minus-circle fa-lg'></i>
                </span>
              </div>
              <a href='' className='w-100'>
                <div className='d-flex align-items-center flex-wrap w-100'>
                  <div className='mb-1 pe-3 flex-grow-1'>
                    <span className='fs-5 text-gray-800 text-hover-primary fw-bolder'>
                      Servicios Inactivos
                    </span>
                    <div className='text-gray-400 fw-bold fs-7'>Listado</div>
                  </div>
                  <div className='d-flex align-items-center'>
                    <div className='fw-bolder fs-5 text-gray-800 pe-1'>{count_inactive}</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}