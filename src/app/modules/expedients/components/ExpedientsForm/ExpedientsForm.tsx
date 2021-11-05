import {Formik, Form, FormikProps, Field} from 'formik'
import { AssistancesTable } from '../../../assistances/components/AssistancesTable/AssistancesTable'
import {InputCustom, InputSelect} from '../../../global/components/inputs'
import {initialValues} from '../Helpers'
import {ModalSAC} from './ModalSAC'
import { ModalUbications } from './ModalUbications/ModalUbications'

const optionsUnits = [{value: 'id', label: 'Kilometros'}]

export const ExpedientsForm = () => {
  return (
    <>
      <Formik initialValues={initialValues} enableReinitialize={true} onSubmit={(values) => {}}>
        {(props: FormikProps<any>) => (
          <Form>
            <div className='card mb-5'>
              <div className='card-body pt-9 pb-0'>
                <a data-bs-toggle='modal' data-bs-target='#kt_modal_SAC'>
                  <div className='d-flex bd-highlight w-25 mb-10'>
                    <div className='pe-3 flex-fill bd-highlight w-100'>
                      <label className={`col-form-label required fw-bold fs-6 py-2`}>
                        Busqueda de afiliados
                      </label>
                      <Field name={'dueDate'} component={InputSelect} options={{}} />
                    </div>
                    <div className='px-0 flex-fill bd-highlight mt-10'>
                      <button className='btn btn-icon btn-info btn-form'>
                        <i className='fa fa-filter'></i>
                      </button>
                    </div>
                  </div>
                </a>
                <div className='d-flex flex-wrap flex-sm-nowrap mb-3'>
                  <div className='me-7 mb-4'>
                    <div className='symbol symbol-100px symbol-lg-160px symbol-fixed position-relative'>
                      <img
                        src='https://t3.ftcdn.net/jpg/03/91/19/22/360_F_391192211_2w5pQpFV1aozYQhcIw3FqA35vuTxJKrB.jpg'
                        alt='Metornic'
                      />
                      <div className='position-absolute translate-middle top-0 start-100 mb-6 bg-success rounded-circle border border-4 border-white h-20px w-20px'></div>
                    </div>
                  </div>
                  <div className='flex-grow-1'>
                    <div className='d-flex justify-content-between align-items-start flex-wrap mb-2'>
                      <div className='d-flex flex-column'>
                        <div className='d-flex align-items-center mb-2'>
                          <a
                            href='#'
                            className='text-gray-800 text-hover-primary fs-2 fw-bolder me-1'
                          >
                            Maximillian Fernandez Smith
                          </a>
                          <a href='#'>
                            <span className='svg-icon svg-icon-1 svg-icon-primary'></span>
                          </a>
                        </div>
                        <div className='d-flex flex-wrap fw-bold fs-6 mb-4 pe-2'>
                          <a
                            href='#'
                            className='d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2'
                          >
                            <span className='svg-icon svg-icon-4 me-1'></span>
                            <b>Clave AF:</b> 27849987
                          </a>
                          <a
                            href='#'
                            className='d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2'
                          >
                            <span className='svg-icon svg-icon-4 me-1'></span>
                            CC: 1007345398
                          </a>
                          <a
                            href='#'
                            className='d-flex align-items-center text-gray-400 text-hover-primary mb-2'
                          >
                            <span className='svg-icon svg-icon-4 me-1'></span>
                            (309)7894567 - (308)9848909
                          </a>
                        </div>
                      </div>
                      <div className='d-flex my-4'>
                        <a
                          href='#'
                          className='btn btn-sm btn-primary me-3'
                          data-bs-toggle='modal'
                          data-bs-target='#kt_modal_offer_a_deal'
                        >
                          Editar Afiliado
                        </a>
                        <div className='me-0'>
                          <button className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'>
                            <i className='fa fa-cog'></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className='d-flex flex-wrap flex-stack'>
                      <div className='d-flex flex-column flex-grow-1 pe-8'>
                        <div className='d-flex flex-wrap'>
                          <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
                            <div className='d-flex align-items-center'>
                              <span className='svg-icon svg-icon-3 svg-icon-success me-2'></span>
                              <div className='fs-4 fw-bolder'>Estado comercial</div>
                            </div>
                            <div className='fw-bold fs-6 text-success badge badge-light-success '>
                              Activo
                            </div>
                          </div>
                          <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
                            <div className='d-flex align-items-center'>
                              <span className='svg-icon svg-icon-3 svg-icon-danger me-0'></span>
                              <div className='fs-4 fw-bolder'>Vigencia</div>
                            </div>
                            <div className='fw-bold fs-6 text-gray-400 '>
                              <b>12/09/2021</b> al <b>15/12/2021</b>
                            </div>
                          </div>
                          <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
                            <div className='d-flex align-items-center'>
                              <span className='svg-icon svg-icon-3 svg-icon-success'></span>
                              <div className='fs-4 fw-bolder'>Cuenta</div>
                            </div>
                            <div className='fw-bold fs-6 text-gray-400'>Claro</div>
                          </div>
                          <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
                            <div className='d-flex align-items-center'>
                              <span className='svg-icon svg-icon-3 svg-icon-success'></span>
                              <div className='fs-4 fw-bolder'>Plan</div>
                            </div>
                            <div className='fw-bold fs-6 text-gray-400'>Noches a Mil</div>
                          </div>
                        </div>
                      </div>
                      <div className='d-flex align-items-center w-150px w-sm-300px flex-column mt-3'>
                        <div className='d-flex justify-content-between w-100 mt-auto mb-2'>
                          <span className='fw-bold fs-6 text-gray-400'>345 dias restante</span>
                          <span className='fw-bolder fs-6'>50%</span>
                        </div>
                        <div className='h-5px mx-3 w-100 bg-light mb-3'>
                          <div className='bg-success rounded h-5px' role='progressbar'></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='d-flex overflow-auto h-75px border-top'>
                  <ul className='nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap justify-content-between w-100'>
                    <li className='nav-item'>
                      <a
                        className='nav-link text-active-primary me-6 false'
                        href='/metronic8/react/demo1/crafted/pages/profile/overview'
                      >
                        <i className='fas fa-chart-line me-3'></i> 250 Reinicidencias
                      </a>
                    </li>
                    <li className='nav-item'>
                      <a
                        className='nav-link text-active-primary me-6 false'
                        href='/metronic8/react/demo1/crafted/pages/profile/projects'
                      >
                        <i className='fas fa-users me-3'></i> 4 Beneficiarios
                      </a>
                    </li>
                    <li className='nav-item'>
                      <a
                        className='nav-link text-active-primary me-6 false'
                        href='/metronic8/react/demo1/crafted/pages/profile/campaigns'
                      >
                        <i className='fas fa-map me-3'></i> 8 Ubicaciones
                      </a>
                    </li>
                    <li className='nav-item'>
                      <a
                        className='nav-link text-active-primary me-6 false'
                        href='/metronic8/react/demo1/crafted/pages/profile/documents'
                      >
                        <i className='fas fa-list me-3'></i> Historicos
                      </a>
                    </li>
                    <li className='nav-item'>
                      <a
                        className='nav-link text-active-primary me-6 false'
                        href='/metronic8/react/demo1/crafted/pages/profile/connections'
                      >
                        <i className='fas fa-list-alt me-3'></i> Reclamos
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='card mb-5'>
              <div className='card-body pt-9 pb-0'>
                <div className='row'>
                  <div className='col-md-8'>
                    <h2 className='card-title align-items-start flex-column'>
                      <span className='card-label fw-bolder fs-2 mb-1'>
                        Etapa 1 Creación del expediente
                      </span>
                      <span className='text-muted mt-1 fw-bold fs-6'>
                        <br />
                        Etapa de creacion del expediente con datos iniciales
                      </span>
                    </h2>
                  </div>
                  <div className='col-md-4 text-end'>
                    <button className='btn btn-success'>Autorizacion</button>
                    <button className='btn btn-info ms-4'>Copiar info Afiliado</button>
                  </div>
                </div>
              </div>
              <div className='row p-10'>
                <div className='col-md-3 px-5 fv-row my-3'>
                  <InputCustom type='text' name='documento' label='Descripcion' required />
                </div>
                <div className='col-md-3 px-5 fv-row my-3'>
                  <InputCustom type='text' name='mnombres' label='Nombres' required />
                </div>
                <div className='col-md-3 px-5 fv-row my-3'>
                  <InputCustom type='text' name='appaterno' label='Apellido Paterno' required />
                </div>
                <div className='col-md-3 px-5 fv-row my-3'>
                  <InputCustom type='text' name='appmaterno' label='Apellido Materno' required />
                </div>
                <div className='col-md-3 px-5 fv-row my-3'>
                  <InputCustom type='text' name='appmaterno' label='Telefono 1' required />
                </div>
                <div className='col-md-3 px-5 fv-row my-3'>
                  <InputCustom type='text' name='appmaterno' label='Telefono 2' required />
                </div>
                <div className='col-md-3 px-5 fv-row my-3'>
                <div className='d-flex bd-highlight w-100 mb-10'>
                    <div className='pe-3 flex-fill bd-highlight w-100'>
                    <InputCustom type='text' name='ubications' label='Ubicación' required />
                    </div>
                    <div className='px-0 flex-fill bd-highlight mt-10'>
                      <button className='btn btn-icon btn-info btn-form' data-bs-toggle="modal" data-bs-target="#kt_modal_ubications"  data-bs-dismiss='modal'>
                        <i className='fa fa-map-pin fs-3'></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className='col-md-3 px-5 fv-row my-3 d-grid gap-2'>
                  <button
                    className='btn btn-primary mt-10'
                  >
                    Grabar expediente <i className='fa fa-save ms-3'></i>
                  </button>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
      <AssistancesTable />
      <ModalUbications />
      <ModalSAC />
    </>
  )
}
