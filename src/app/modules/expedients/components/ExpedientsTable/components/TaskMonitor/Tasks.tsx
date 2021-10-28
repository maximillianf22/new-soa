import React, { useState } from 'react'
import Select from 'react-select'

const options = [
  {value: 'plataforma1', label: 'Plaaforma One'},
  {value: 'plataforma2', label: 'Plataform Two'},
  {value: 'plataforma3', label: 'Plataform Three'},
  {value: 'Plataforma4', label: 'Plataform Four'},
]

export const Tasks = () => {


  return (
    <>
      <div className='px-12 py-5 card'>
        <div className='card-header border-0 pt-0 px-0 mb-2'>
          <h3 className='card-title align-items-start flex-column'>
            <span className='card-label fw-bolder fs-3 mb-1'>Monitor de Novedades</span>
            <span className='text-muted mt-1 fw-bold fs-7'>50 registros</span>
          </h3>
          <div className='card-toolbar'>
            <div>
              <Select
                className='form-control form-control-sm border-0 p-0 w-250px'
                placeholder='Plataforma o Cliente'
                name='selectPlataform'
                options={options}
                id='plataform'
              />
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-5 px-1'>
            <div className='d-flex align-items-sm-center mb-3'>
              <div className='symbol symbol-55px me-3'>
                <span className='symbol-label'>
                  <svg
                    width='47'
                    height='48'
                    viewBox='0 0 47 48'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M44.2493 24.3563C44.2493 36.177 34.7718 45.7238 23.1246 45.7238C11.4775 45.7238 2 36.177 2 24.3563C2 12.5355 11.4775 2.98872 23.1246 2.98872C34.7718 2.98872 44.2493 12.5355 44.2493 24.3563Z'
                      stroke='#FFD6D6'
                      stroke-width='4'
                    />
                    <mask id='path-2-inside-1_458:10303' fill='white'>
                      <path d='M23.1246 2.52624C23.1246 1.67709 23.8138 0.983343 24.661 1.04033C29.4977 1.36567 34.1256 3.22066 37.8782 6.36244C41.6401 9.51205 44.3081 13.7756 45.5194 18.5316C45.7263 19.344 45.1803 20.1394 44.3568 20.2968C43.5289 20.4551 42.7356 19.9083 42.5192 19.0937C41.4436 15.0458 39.1496 11.4203 35.9367 8.73033C32.7302 6.04573 28.7877 4.44305 24.6607 4.12319C23.8141 4.05758 23.1246 3.37539 23.1246 2.52624Z' />
                    </mask>
                    <path
                      d='M23.1246 2.52624C23.1246 1.67709 23.8138 0.983343 24.661 1.04033C29.4977 1.36567 34.1256 3.22066 37.8782 6.36244C41.6401 9.51205 44.3081 13.7756 45.5194 18.5316C45.7263 19.344 45.1803 20.1394 44.3568 20.2968C43.5289 20.4551 42.7356 19.9083 42.5192 19.0937C41.4436 15.0458 39.1496 11.4203 35.9367 8.73033C32.7302 6.04573 28.7877 4.44305 24.6607 4.12319C23.8141 4.05758 23.1246 3.37539 23.1246 2.52624Z'
                      stroke='#F23F44'
                      stroke-width='28'
                      mask='url(#path-2-inside-1_458:10303)'
                    />
                    <path
                      d='M12.736 21.6773V25.1573H14.056C14.128 24.8853 14.352 24.6773 14.736 24.6773C15.224 24.6773 15.488 24.9573 15.488 25.4853C15.488 25.9893 15.264 26.3653 14.744 26.3653C14.296 26.3653 14.064 26.0933 14.008 25.7893H12.672C12.72 26.7973 13.48 27.5253 14.792 27.5253C16.088 27.5253 16.808 26.7253 16.808 25.4933C16.808 24.5493 16.32 23.5813 15.048 23.5813C14.584 23.5813 14.184 23.7493 13.976 23.9813V22.8773H16.472V21.6773H12.736ZM19.3944 27.5253H20.7624V24.1493L22.0264 27.5253H23.1304L24.3864 24.1573V27.5253H25.7544V21.9093H24.1464L22.5864 25.7973L21.0104 21.9093H19.3944V27.5253ZM26.7382 27.5253H28.1062V23.0613H26.7382V27.5253ZM27.4262 22.5973C27.9062 22.5973 28.2342 22.2693 28.2342 21.8613C28.2342 21.4453 27.9062 21.1173 27.4262 21.1173C26.9382 21.1173 26.6102 21.4453 26.6102 21.8613C26.6102 22.2693 26.9382 22.5973 27.4262 22.5973ZM32.1776 27.5253H33.5376V24.9173C33.5376 23.7173 32.8496 23.0133 31.8176 23.0133C31.2176 23.0133 30.7376 23.2773 30.4656 23.6533V23.0613H29.0976V27.5253H30.4656V25.1013C30.4656 24.4933 30.8016 24.1573 31.3216 24.1573C31.8416 24.1573 32.1776 24.4933 32.1776 25.1013V27.5253Z'
                      fill='#000'
                    />
                  </svg>
                </span>
              </div>
              <div className='d-flex align-items-center flex-row-fluid flex-wrap'>
                <div className='flex-grow-1 me-2 text-nowrap'>
                  <div>
                    <p className='text-muted fs-help fw-bolder m-0'>
                      Datos del Servicio - Etapa 10
                    </p>
                    <p className='text-dark fs-5 fw-bolder m-0 lh-1'> Servicio de Remolque</p>
                    <p className='text-muted fs-7 m-0 lh-1'>Alejandro Vallejo - Coordinador</p>
                    <p className='text-muted fs-7 m-0 lh-1'> Asistencia - 39834987</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-5 px-1'>
            <div className='d-flex align-items-sm-end mb-3 text-end'>
              <div className='d-flex align-items-end flex-row-fluid flex-wrap'>
                <div className='flex-grow-1 me-2 text-nowrap'>
                  <div>
                    <p className='text-muted fs-help fw-bolder m-0'>Datos del Afiliado</p>
                    <p className='text-dark fs-5 fw-bolder m-0 lh-1'> Deiner Targaryen</p>
                    <p className='text-muted fs-7 m-0 lh-1'>Alejandro Magno - Proveedor</p>
                    <p className='text-danger fs-7 fw-bolder m-0 lh-1'>
                      Afiliado no confirmo termino
                      <i className='fa fa-map ms-1 text-danger m-0 lh-1'></i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-2'>
            <div className='mt-7 mb-7'>
              <button className='btn btn-primary btn-sm btn-icon me-2'>
                <i className='fs-6 fa fa-eye'></i>
              </button>
              <button className='btn btn-danger btn-sm btn-icon position-relative'>
                <i className='fs-6 fa fa-bell'></i>
                <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger rounded-circle w-17px p-4px'>
                  18
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-5 px-1'>
            <div className='d-flex align-items-sm-center mb-3'>
              <div className='symbol symbol-55px me-3'>
                <span className='symbol-label'>
                  <svg
                    width='47'
                    height='48'
                    viewBox='0 0 47 48'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M44.2493 24.3055C44.2493 36.1263 34.7718 45.6731 23.1246 45.6731C11.4775 45.6731 2 36.1263 2 24.3055C2 12.4848 11.4775 2.938 23.1246 2.938C34.7718 2.938 44.2493 12.4848 44.2493 24.3055Z'
                      stroke='#FAEED5'
                      stroke-width='4'
                    />
                    <mask id='path-2-inside-1_458:10281' fill='white'>
                      <path d='M23.1246 2.47552C23.1246 1.62637 23.8139 0.932623 24.6612 0.989601C30.2331 1.36432 35.5031 3.76735 39.4762 7.7822C43.8129 12.1645 46.2493 18.1081 46.2493 24.3055C46.2493 30.503 43.8129 36.4466 39.4762 40.8289C35.5031 44.8437 30.2331 47.2468 24.6612 47.6215C23.8139 47.6785 23.1246 46.9847 23.1246 46.1356C23.1246 45.2864 23.8141 44.6042 24.6607 44.5386C29.4247 44.1695 33.9222 42.0925 37.3244 38.6545C41.0905 34.8489 43.2062 29.6875 43.2062 24.3055C43.2062 18.9236 41.0905 13.7622 37.3244 9.95658C33.9221 6.51855 29.4247 4.44158 24.6607 4.07245C23.8141 4.00685 23.1246 3.32467 23.1246 2.47552Z' />
                    </mask>
                    <path
                      d='M23.1246 2.47552C23.1246 1.62637 23.8139 0.932623 24.6612 0.989601C30.2331 1.36432 35.5031 3.76735 39.4762 7.7822C43.8129 12.1645 46.2493 18.1081 46.2493 24.3055C46.2493 30.503 43.8129 36.4466 39.4762 40.8289C35.5031 44.8437 30.2331 47.2468 24.6612 47.6215C23.8139 47.6785 23.1246 46.9847 23.1246 46.1356C23.1246 45.2864 23.8141 44.6042 24.6607 44.5386C29.4247 44.1695 33.9222 42.0925 37.3244 38.6545C41.0905 34.8489 43.2062 29.6875 43.2062 24.3055C43.2062 18.9236 41.0905 13.7622 37.3244 9.95658C33.9221 6.51855 29.4247 4.44158 24.6607 4.07245C23.8141 4.00685 23.1246 3.32467 23.1246 2.47552Z'
                      stroke='#FFC600'
                      stroke-width='20'
                      mask='url(#path-2-inside-1_458:10281)'
                    />
                    <path
                      d='M12.4377 27.2119H13.8617V21.3719H11.6457V22.6439H12.4377V27.2119ZM14.7975 24.2119C14.7975 25.9399 15.3815 27.1879 17.0455 27.1879C18.7095 27.1879 19.2935 25.9399 19.2935 24.2119C19.2935 22.4999 18.7095 21.2519 17.0455 21.2519C15.3815 21.2519 14.7975 22.4999 14.7975 24.2119ZM17.9495 24.2119C17.9495 25.1399 17.8535 25.9079 17.0455 25.9079C16.2375 25.9079 16.1415 25.1399 16.1415 24.2119C16.1415 23.3159 16.2375 22.5319 17.0455 22.5319C17.8535 22.5319 17.9495 23.3159 17.9495 24.2119ZM27.9996 27.2119H29.3596V24.6039C29.3596 23.4039 28.6476 22.6999 27.5436 22.6999C26.8956 22.6999 26.3356 23.0599 26.0396 23.5319C25.7356 22.9959 25.1916 22.6999 24.5196 22.6999C23.9356 22.6999 23.4796 22.9479 23.2156 23.3079V22.7479H21.8476V27.2119H23.2156V24.7879C23.2156 24.2039 23.5516 23.8839 24.0716 23.8839C24.5916 23.8839 24.9276 24.2039 24.9276 24.7879V27.2119H26.2876V24.7879C26.2876 24.2039 26.6236 23.8839 27.1436 23.8839C27.6636 23.8839 27.9996 24.2039 27.9996 24.7879V27.2119ZM30.3163 27.2119H31.6843V22.7479H30.3163V27.2119ZM31.0043 22.2839C31.4843 22.2839 31.8123 21.9559 31.8123 21.5479C31.8123 21.1319 31.4843 20.8039 31.0043 20.8039C30.5163 20.8039 30.1883 21.1319 30.1883 21.5479C30.1883 21.9559 30.5163 22.2839 31.0043 22.2839ZM35.7557 27.2119H37.1157V24.6039C37.1157 23.4039 36.4277 22.6999 35.3957 22.6999C34.7957 22.6999 34.3157 22.9639 34.0437 23.3399V22.7479H32.6757V27.2119H34.0437V24.7879C34.0437 24.1799 34.3797 23.8439 34.8997 23.8439C35.4197 23.8439 35.7557 24.1799 35.7557 24.7879V27.2119Z'
                      fill='#000'
                    />
                  </svg>
                </span>
              </div>
              <div className='d-flex align-items-center flex-row-fluid flex-wrap'>
                <div className='flex-grow-1 me-2 text-nowrap'>
                  <div>
                    <p className='text-muted fs-help fw-bolder m-0'>
                      Datos del Servicio - Etapa 10
                    </p>
                    <p className='text-dark fs-5 fw-bolder m-0 lh-1'> Servicio de Remolque</p>
                    <p className='text-muted fs-7 m-0 lh-1'>Alejandro Vallejo - Coordinador</p>
                    <p className='text-muted fs-7 m-0 lh-1'> Asistencia - 39834987</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-5 px-1'>
            <div className='d-flex align-items-sm-end mb-3 text-end'>
              <div className='d-flex align-items-end flex-row-fluid flex-wrap'>
                <div className='flex-grow-1 me-2 text-nowrap'>
                  <div>
                    <p className='text-muted fs-help fw-bolder m-0'>Datos del Afiliado</p>
                    <p className='text-dark fs-5 fw-bolder m-0 lh-1'> Deiner Targaryen</p>
                    <p className='text-muted fs-7 m-0 lh-1'>Alejandro Magno - N/A</p>
                    <p className='text-warning fs-7 fw-bolder m-0 lh-1'>
                      Proveedor no asignado
                      <i className='fa fa-map ms-1 text-warning m-0 lh-1'></i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-2'>
            <div className='mt-7 mb-7'>
              <button className='btn btn-primary btn-sm btn-icon me-2'>
                <i className='fs-6 fa fa-eye'></i>
              </button>
              <button className='btn btn-danger btn-sm btn-icon position-relative'>
                <i className='fs-6 fa fa-bell'></i>
                <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger rounded-circle w-17px p-4px'>
                  18
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-5 px-1'>
            <div className='d-flex align-items-sm-center mb-3'>
              <div className='symbol symbol-55px me-3'>
                <span className='symbol-label'>
                  <svg
                    width='47'
                    height='47'
                    viewBox='0 0 47 47'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M44.2493 23.5682C44.2493 35.3889 34.7718 44.9357 23.1246 44.9357C11.4775 44.9357 2 35.3889 2 23.5682C2 11.7475 11.4775 2.20064 23.1246 2.20064C34.7718 2.20064 44.2493 11.7475 44.2493 23.5682Z'
                      stroke='#D7F9EF'
                      stroke-width='4'
                    />
                    <mask id='path-2-inside-1_457:10157' fill='white'>
                      <path d='M23.1246 1.73816C23.1246 0.889012 23.8138 0.195264 24.6611 0.252266C28.633 0.519498 32.479 1.81933 35.8206 4.03742C39.5915 6.5405 42.5555 10.1036 44.3474 14.2878C46.1392 18.472 46.6806 23.0945 45.9049 27.5857C45.1292 32.077 43.0703 36.2409 39.9818 39.5644C36.8933 42.8878 32.9101 45.2258 28.523 46.2901C24.1359 47.3544 19.5365 47.0986 15.2915 45.5543C11.0464 44.0099 7.3412 41.2444 4.63224 37.5986C2.22497 34.3587 0.697879 30.5494 0.188797 26.5482C0.0828306 25.7153 0.724294 24.9923 1.56218 24.9391C2.40162 24.8857 3.11931 25.5249 3.23377 26.3582C3.70089 29.759 5.01583 32.9934 7.06574 35.7522C9.41821 38.9184 12.6359 41.3199 16.3223 42.661C20.0087 44.0021 24.0028 44.2243 27.8126 43.3C31.6224 42.3757 35.0814 40.3455 37.7635 37.4593C40.4456 34.5732 42.2335 30.9573 42.9072 27.057C43.5808 23.1568 43.1106 19.1426 41.5546 15.5091C39.9985 11.8755 37.4246 8.78125 34.1499 6.60756C31.3046 4.71894 28.0383 3.59693 24.6607 3.33512C23.8141 3.2695 23.1246 2.58731 23.1246 1.73816Z' />
                    </mask>
                    <path
                      d='M23.1246 1.73816C23.1246 0.889012 23.8138 0.195264 24.6611 0.252266C28.633 0.519498 32.479 1.81933 35.8206 4.03742C39.5915 6.5405 42.5555 10.1036 44.3474 14.2878C46.1392 18.472 46.6806 23.0945 45.9049 27.5857C45.1292 32.077 43.0703 36.2409 39.9818 39.5644C36.8933 42.8878 32.9101 45.2258 28.523 46.2901C24.1359 47.3544 19.5365 47.0986 15.2915 45.5543C11.0464 44.0099 7.3412 41.2444 4.63224 37.5986C2.22497 34.3587 0.697879 30.5494 0.188797 26.5482C0.0828306 25.7153 0.724294 24.9923 1.56218 24.9391C2.40162 24.8857 3.11931 25.5249 3.23377 26.3582C3.70089 29.759 5.01583 32.9934 7.06574 35.7522C9.41821 38.9184 12.6359 41.3199 16.3223 42.661C20.0087 44.0021 24.0028 44.2243 27.8126 43.3C31.6224 42.3757 35.0814 40.3455 37.7635 37.4593C40.4456 34.5732 42.2335 30.9573 42.9072 27.057C43.5808 23.1568 43.1106 19.1426 41.5546 15.5091C39.9985 11.8755 37.4246 8.78125 34.1499 6.60756C31.3046 4.71894 28.0383 3.59693 24.6607 3.33512C23.8141 3.2695 23.1246 2.58731 23.1246 1.73816Z'
                      stroke='#0BB783'
                      stroke-width='20'
                      mask='url(#path-2-inside-1_457:10157)'
                    />
                    <path
                      d='M10.0229 26.1319H14.0389V25.0199H11.8789C12.8069 24.3079 13.9509 23.2839 13.9509 22.0039C13.9509 21.0199 13.3589 20.2439 12.0309 20.2439C10.9669 20.2439 10.0469 20.8519 10.0069 22.2679H11.3269C11.3269 21.7159 11.5669 21.3959 11.9749 21.3959C12.3909 21.3959 12.5829 21.6679 12.5829 22.0919C12.5829 23.0759 11.2629 24.0919 10.0229 25.1159V26.1319ZM14.6413 23.2119C14.6413 24.9399 15.2253 26.1879 16.8893 26.1879C18.5533 26.1879 19.1373 24.9399 19.1373 23.2119C19.1373 21.4999 18.5533 20.2519 16.8893 20.2519C15.2253 20.2519 14.6413 21.4999 14.6413 23.2119ZM17.7933 23.2119C17.7933 24.1399 17.6973 24.9079 16.8893 24.9079C16.0813 24.9079 15.9853 24.1399 15.9853 23.2119C15.9853 22.3159 16.0813 21.5319 16.8893 21.5319C17.6973 21.5319 17.7933 22.3159 17.7933 23.2119ZM21.6913 26.2119H23.0593V22.8359L24.3233 26.2119H25.4273L26.6833 22.8439V26.2119H28.0513V20.5959H26.4433L24.8833 24.4839L23.3073 20.5959H21.6913V26.2119ZM29.0351 26.2119H30.4031V21.7479H29.0351V26.2119ZM29.7231 21.2839C30.2031 21.2839 30.5311 20.9559 30.5311 20.5479C30.5311 20.1319 30.2031 19.8039 29.7231 19.8039C29.2351 19.8039 28.9071 20.1319 28.9071 20.5479C28.9071 20.9559 29.2351 21.2839 29.7231 21.2839ZM34.4744 26.2119H35.8344V23.6039C35.8344 22.4039 35.1464 21.6999 34.1144 21.6999C33.5144 21.6999 33.0344 21.9639 32.7624 22.3399V21.7479H31.3944V26.2119H32.7624V23.7879C32.7624 23.1799 33.0984 22.8439 33.6184 22.8439C34.1384 22.8439 34.4744 23.1799 34.4744 23.7879V26.2119Z'
                      fill='#000'
                    />
                  </svg>
                </span>
              </div>
              <div className='d-flex align-items-center flex-row-fluid flex-wrap'>
                <div className='flex-grow-1 me-2 text-nowrap'>
                  <div>
                    <p className='text-muted fs-help fw-bolder m-0'>
                      Datos del Servicio - Etapa 10
                    </p>
                    <p className='text-dark fs-5 fw-bolder m-0 lh-1'> Servicio de Remolque</p>
                    <p className='text-muted fs-7 m-0 lh-1'>Alejandro Vallejo - Coordinador</p>
                    <p className='text-muted fs-7 m-0 lh-1'> Asistencia - 39834987</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-5 px-1'>
            <div className='d-flex align-items-sm-end mb-3 text-end'>
              <div className='d-flex align-items-end flex-row-fluid flex-wrap'>
                <div className='flex-grow-1 me-2 text-nowrap'>
                  <div>
                    <p className='text-muted fs-help fw-bolder m-0'>Datos del Afiliado</p>
                    <p className='text-dark fs-5 fw-bolder m-0 lh-1'> Deiner Targaryen</p>
                    <p className='text-muted fs-7 m-0 lh-1'>Alejandro Magno - N/A</p>
                    <p className='text-success fs-7 fw-bolder m-0 lh-1'>
                      Proveedor no confirmo arribo
                      <i className='fa fa-map ms-1 text-success m-0 lh-1'></i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-2'>
            <div className='mt-7 mb-7'>
              <button className='btn btn-primary btn-sm btn-icon me-2'>
                <i className='fs-6 fa fa-eye'></i>
              </button>
              <button className='btn btn-danger btn-sm btn-icon position-relative'>
                <i className='fs-6 fa fa-bell'></i>
                <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger rounded-circle w-17px p-4px'>
                  18
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-5 px-1'>
            <div className='d-flex align-items-sm-center mb-3'>
              <div className='symbol symbol-55px me-3'>
                <span className='symbol-label'>
                  <svg
                    width='47'
                    height='47'
                    viewBox='0 0 47 47'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M44.2493 23.5682C44.2493 35.3889 34.7718 44.9357 23.1246 44.9357C11.4775 44.9357 2 35.3889 2 23.5682C2 11.7475 11.4775 2.20064 23.1246 2.20064C34.7718 2.20064 44.2493 11.7475 44.2493 23.5682Z'
                      stroke='#D7F9EF'
                      stroke-width='4'
                    />
                    <mask id='path-2-inside-1_457:10157' fill='white'>
                      <path d='M23.1246 1.73816C23.1246 0.889012 23.8138 0.195264 24.6611 0.252266C28.633 0.519498 32.479 1.81933 35.8206 4.03742C39.5915 6.5405 42.5555 10.1036 44.3474 14.2878C46.1392 18.472 46.6806 23.0945 45.9049 27.5857C45.1292 32.077 43.0703 36.2409 39.9818 39.5644C36.8933 42.8878 32.9101 45.2258 28.523 46.2901C24.1359 47.3544 19.5365 47.0986 15.2915 45.5543C11.0464 44.0099 7.3412 41.2444 4.63224 37.5986C2.22497 34.3587 0.697879 30.5494 0.188797 26.5482C0.0828306 25.7153 0.724294 24.9923 1.56218 24.9391C2.40162 24.8857 3.11931 25.5249 3.23377 26.3582C3.70089 29.759 5.01583 32.9934 7.06574 35.7522C9.41821 38.9184 12.6359 41.3199 16.3223 42.661C20.0087 44.0021 24.0028 44.2243 27.8126 43.3C31.6224 42.3757 35.0814 40.3455 37.7635 37.4593C40.4456 34.5732 42.2335 30.9573 42.9072 27.057C43.5808 23.1568 43.1106 19.1426 41.5546 15.5091C39.9985 11.8755 37.4246 8.78125 34.1499 6.60756C31.3046 4.71894 28.0383 3.59693 24.6607 3.33512C23.8141 3.2695 23.1246 2.58731 23.1246 1.73816Z' />
                    </mask>
                    <path
                      d='M23.1246 1.73816C23.1246 0.889012 23.8138 0.195264 24.6611 0.252266C28.633 0.519498 32.479 1.81933 35.8206 4.03742C39.5915 6.5405 42.5555 10.1036 44.3474 14.2878C46.1392 18.472 46.6806 23.0945 45.9049 27.5857C45.1292 32.077 43.0703 36.2409 39.9818 39.5644C36.8933 42.8878 32.9101 45.2258 28.523 46.2901C24.1359 47.3544 19.5365 47.0986 15.2915 45.5543C11.0464 44.0099 7.3412 41.2444 4.63224 37.5986C2.22497 34.3587 0.697879 30.5494 0.188797 26.5482C0.0828306 25.7153 0.724294 24.9923 1.56218 24.9391C2.40162 24.8857 3.11931 25.5249 3.23377 26.3582C3.70089 29.759 5.01583 32.9934 7.06574 35.7522C9.41821 38.9184 12.6359 41.3199 16.3223 42.661C20.0087 44.0021 24.0028 44.2243 27.8126 43.3C31.6224 42.3757 35.0814 40.3455 37.7635 37.4593C40.4456 34.5732 42.2335 30.9573 42.9072 27.057C43.5808 23.1568 43.1106 19.1426 41.5546 15.5091C39.9985 11.8755 37.4246 8.78125 34.1499 6.60756C31.3046 4.71894 28.0383 3.59693 24.6607 3.33512C23.8141 3.2695 23.1246 2.58731 23.1246 1.73816Z'
                      stroke='#0BB783'
                      stroke-width='20'
                      mask='url(#path-2-inside-1_457:10157)'
                    />
                    <path
                      d='M10.0229 26.1319H14.0389V25.0199H11.8789C12.8069 24.3079 13.9509 23.2839 13.9509 22.0039C13.9509 21.0199 13.3589 20.2439 12.0309 20.2439C10.9669 20.2439 10.0469 20.8519 10.0069 22.2679H11.3269C11.3269 21.7159 11.5669 21.3959 11.9749 21.3959C12.3909 21.3959 12.5829 21.6679 12.5829 22.0919C12.5829 23.0759 11.2629 24.0919 10.0229 25.1159V26.1319ZM14.6413 23.2119C14.6413 24.9399 15.2253 26.1879 16.8893 26.1879C18.5533 26.1879 19.1373 24.9399 19.1373 23.2119C19.1373 21.4999 18.5533 20.2519 16.8893 20.2519C15.2253 20.2519 14.6413 21.4999 14.6413 23.2119ZM17.7933 23.2119C17.7933 24.1399 17.6973 24.9079 16.8893 24.9079C16.0813 24.9079 15.9853 24.1399 15.9853 23.2119C15.9853 22.3159 16.0813 21.5319 16.8893 21.5319C17.6973 21.5319 17.7933 22.3159 17.7933 23.2119ZM21.6913 26.2119H23.0593V22.8359L24.3233 26.2119H25.4273L26.6833 22.8439V26.2119H28.0513V20.5959H26.4433L24.8833 24.4839L23.3073 20.5959H21.6913V26.2119ZM29.0351 26.2119H30.4031V21.7479H29.0351V26.2119ZM29.7231 21.2839C30.2031 21.2839 30.5311 20.9559 30.5311 20.5479C30.5311 20.1319 30.2031 19.8039 29.7231 19.8039C29.2351 19.8039 28.9071 20.1319 28.9071 20.5479C28.9071 20.9559 29.2351 21.2839 29.7231 21.2839ZM34.4744 26.2119H35.8344V23.6039C35.8344 22.4039 35.1464 21.6999 34.1144 21.6999C33.5144 21.6999 33.0344 21.9639 32.7624 22.3399V21.7479H31.3944V26.2119H32.7624V23.7879C32.7624 23.1799 33.0984 22.8439 33.6184 22.8439C34.1384 22.8439 34.4744 23.1799 34.4744 23.7879V26.2119Z'
                      fill='#000'
                    />
                  </svg>
                </span>
              </div>
              <div className='d-flex align-items-center flex-row-fluid flex-wrap'>
                <div className='flex-grow-1 me-2 text-nowrap'>
                  <div>
                    <p className='text-muted fs-help fw-bolder m-0'>
                      Datos del Servicio - Etapa 10
                    </p>
                    <p className='text-dark fs-5 fw-bolder m-0 lh-1'> Servicio de Remolque</p>
                    <p className='text-muted fs-7 m-0 lh-1'>Alejandro Vallejo - Coordinador</p>
                    <p className='text-muted fs-7 m-0 lh-1'> Asistencia - 39834987</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-5 px-1'>
            <div className='d-flex align-items-sm-end mb-3 text-end'>
              <div className='d-flex align-items-end flex-row-fluid flex-wrap'>
                <div className='flex-grow-1 me-2 text-nowrap'>
                  <div>
                    <p className='text-muted fs-help fw-bolder m-0'>Datos del Afiliado</p>
                    <p className='text-dark fs-5 fw-bolder m-0 lh-1'> Deiner Targaryen</p>
                    <p className='text-muted fs-7 m-0 lh-1'>Alejandro Magno - N/A</p>
                    <p className='text-success fs-7 fw-bolder m-0 lh-1'>
                      Proveedor no confirmo arribo
                      <i className='fa fa-map ms-1 text-success m-0 lh-1'></i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-2'>
            <div className='mt-7 mb-7'>
              <button className='btn btn-primary btn-sm btn-icon me-2'>
                <i className='fs-6 fa fa-eye'></i>
              </button>
              <button className='btn btn-danger btn-sm btn-icon position-relative'>
                <i className='fs-6 fa fa-bell'></i>
                <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger rounded-circle w-17px p-4px'>
                  18
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-5 px-1'>
            <div className='d-flex align-items-sm-center mb-3'>
              <div className='symbol symbol-55px me-3'>
                <span className='symbol-label'>
                  <svg
                    width='47'
                    height='47'
                    viewBox='0 0 47 47'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M44.2493 23.5682C44.2493 35.3889 34.7718 44.9357 23.1246 44.9357C11.4775 44.9357 2 35.3889 2 23.5682C2 11.7475 11.4775 2.20064 23.1246 2.20064C34.7718 2.20064 44.2493 11.7475 44.2493 23.5682Z'
                      stroke='#D7F9EF'
                      stroke-width='4'
                    />
                    <mask id='path-2-inside-1_457:10157' fill='white'>
                      <path d='M23.1246 1.73816C23.1246 0.889012 23.8138 0.195264 24.6611 0.252266C28.633 0.519498 32.479 1.81933 35.8206 4.03742C39.5915 6.5405 42.5555 10.1036 44.3474 14.2878C46.1392 18.472 46.6806 23.0945 45.9049 27.5857C45.1292 32.077 43.0703 36.2409 39.9818 39.5644C36.8933 42.8878 32.9101 45.2258 28.523 46.2901C24.1359 47.3544 19.5365 47.0986 15.2915 45.5543C11.0464 44.0099 7.3412 41.2444 4.63224 37.5986C2.22497 34.3587 0.697879 30.5494 0.188797 26.5482C0.0828306 25.7153 0.724294 24.9923 1.56218 24.9391C2.40162 24.8857 3.11931 25.5249 3.23377 26.3582C3.70089 29.759 5.01583 32.9934 7.06574 35.7522C9.41821 38.9184 12.6359 41.3199 16.3223 42.661C20.0087 44.0021 24.0028 44.2243 27.8126 43.3C31.6224 42.3757 35.0814 40.3455 37.7635 37.4593C40.4456 34.5732 42.2335 30.9573 42.9072 27.057C43.5808 23.1568 43.1106 19.1426 41.5546 15.5091C39.9985 11.8755 37.4246 8.78125 34.1499 6.60756C31.3046 4.71894 28.0383 3.59693 24.6607 3.33512C23.8141 3.2695 23.1246 2.58731 23.1246 1.73816Z' />
                    </mask>
                    <path
                      d='M23.1246 1.73816C23.1246 0.889012 23.8138 0.195264 24.6611 0.252266C28.633 0.519498 32.479 1.81933 35.8206 4.03742C39.5915 6.5405 42.5555 10.1036 44.3474 14.2878C46.1392 18.472 46.6806 23.0945 45.9049 27.5857C45.1292 32.077 43.0703 36.2409 39.9818 39.5644C36.8933 42.8878 32.9101 45.2258 28.523 46.2901C24.1359 47.3544 19.5365 47.0986 15.2915 45.5543C11.0464 44.0099 7.3412 41.2444 4.63224 37.5986C2.22497 34.3587 0.697879 30.5494 0.188797 26.5482C0.0828306 25.7153 0.724294 24.9923 1.56218 24.9391C2.40162 24.8857 3.11931 25.5249 3.23377 26.3582C3.70089 29.759 5.01583 32.9934 7.06574 35.7522C9.41821 38.9184 12.6359 41.3199 16.3223 42.661C20.0087 44.0021 24.0028 44.2243 27.8126 43.3C31.6224 42.3757 35.0814 40.3455 37.7635 37.4593C40.4456 34.5732 42.2335 30.9573 42.9072 27.057C43.5808 23.1568 43.1106 19.1426 41.5546 15.5091C39.9985 11.8755 37.4246 8.78125 34.1499 6.60756C31.3046 4.71894 28.0383 3.59693 24.6607 3.33512C23.8141 3.2695 23.1246 2.58731 23.1246 1.73816Z'
                      stroke='#0BB783'
                      stroke-width='20'
                      mask='url(#path-2-inside-1_457:10157)'
                    />
                    <path
                      d='M10.0229 26.1319H14.0389V25.0199H11.8789C12.8069 24.3079 13.9509 23.2839 13.9509 22.0039C13.9509 21.0199 13.3589 20.2439 12.0309 20.2439C10.9669 20.2439 10.0469 20.8519 10.0069 22.2679H11.3269C11.3269 21.7159 11.5669 21.3959 11.9749 21.3959C12.3909 21.3959 12.5829 21.6679 12.5829 22.0919C12.5829 23.0759 11.2629 24.0919 10.0229 25.1159V26.1319ZM14.6413 23.2119C14.6413 24.9399 15.2253 26.1879 16.8893 26.1879C18.5533 26.1879 19.1373 24.9399 19.1373 23.2119C19.1373 21.4999 18.5533 20.2519 16.8893 20.2519C15.2253 20.2519 14.6413 21.4999 14.6413 23.2119ZM17.7933 23.2119C17.7933 24.1399 17.6973 24.9079 16.8893 24.9079C16.0813 24.9079 15.9853 24.1399 15.9853 23.2119C15.9853 22.3159 16.0813 21.5319 16.8893 21.5319C17.6973 21.5319 17.7933 22.3159 17.7933 23.2119ZM21.6913 26.2119H23.0593V22.8359L24.3233 26.2119H25.4273L26.6833 22.8439V26.2119H28.0513V20.5959H26.4433L24.8833 24.4839L23.3073 20.5959H21.6913V26.2119ZM29.0351 26.2119H30.4031V21.7479H29.0351V26.2119ZM29.7231 21.2839C30.2031 21.2839 30.5311 20.9559 30.5311 20.5479C30.5311 20.1319 30.2031 19.8039 29.7231 19.8039C29.2351 19.8039 28.9071 20.1319 28.9071 20.5479C28.9071 20.9559 29.2351 21.2839 29.7231 21.2839ZM34.4744 26.2119H35.8344V23.6039C35.8344 22.4039 35.1464 21.6999 34.1144 21.6999C33.5144 21.6999 33.0344 21.9639 32.7624 22.3399V21.7479H31.3944V26.2119H32.7624V23.7879C32.7624 23.1799 33.0984 22.8439 33.6184 22.8439C34.1384 22.8439 34.4744 23.1799 34.4744 23.7879V26.2119Z'
                      fill='#000'
                    />
                  </svg>
                </span>
              </div>
              <div className='d-flex align-items-center flex-row-fluid flex-wrap'>
                <div className='flex-grow-1 me-2 text-nowrap'>
                  <div>
                    <p className='text-muted fs-help fw-bolder m-0'>
                      Datos del Servicio - Etapa 10
                    </p>
                    <p className='text-dark fs-5 fw-bolder m-0 lh-1'> Servicio de Remolque</p>
                    <p className='text-muted fs-7 m-0 lh-1'>Alejandro Vallejo - Coordinador</p>
                    <p className='text-muted fs-7 m-0 lh-1'> Asistencia - 39834987</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-5 px-1'>
            <div className='d-flex align-items-sm-end mb-3 text-end'>
              <div className='d-flex align-items-end flex-row-fluid flex-wrap'>
                <div className='flex-grow-1 me-2 text-nowrap'>
                  <div>
                    <p className='text-muted fs-help fw-bolder m-0'>Datos del Afiliado</p>
                    <p className='text-dark fs-5 fw-bolder m-0 lh-1'> Deiner Targaryen</p>
                    <p className='text-muted fs-7 m-0 lh-1'>Alejandro Magno - N/A</p>
                    <p className='text-success fs-7 fw-bolder m-0 lh-1'>
                      Proveedor no confirmo arribo
                      <i className='fa fa-map ms-1 text-success m-0 lh-1'></i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-2'>
            <div className='mt-7 mb-7'>
              <button className='btn btn-primary btn-sm btn-icon me-2'>
                <i className='fs-6 fa fa-eye'></i>
              </button>
              <button className='btn btn-danger btn-sm btn-icon position-relative'>
                <i className='fs-6 fa fa-bell'></i>
                <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger rounded-circle w-17px p-4px'>
                  18
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
