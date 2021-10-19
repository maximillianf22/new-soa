import React, {useCallback, useRef, useState} from 'react'
import {GoogleMap} from '@react-google-maps/api'
import {Polygon} from '@react-google-maps/api'
import {LoadScript} from '@react-google-maps/api'
import {Field, Form, Formik, FormikProps} from 'formik'
import {InputCustom, InputSelect} from '../../../../global/components/inputs'
import {initialValues} from '../Helpers'
import {Button, OverlayTrigger, Tooltip} from 'react-bootstrap-v5'
import {ModalMapPolygonSave} from './ModalMapPolygonSave'

export const ModalMapPolygon = () => {
  // Poligono
  // Store Polygon path in state
  const [path, setPath] = useState([
    {lat: 4.545633, lng: -74.247139},
    {lat: 4.789348, lng: -74.118159},
    {lat: 4.51081, lng: -74.048294},
  ])
  // Define refs for Polygon instance and listeners
  const polygonRef: any = useRef(null)
  const listenersRef = useRef([])
  // Call setPath with new edited path
  const onEdit = useCallback(() => {
    if (polygonRef.current) {
      const nextPath = polygonRef.current
        .getPath()
        .getArray()
        .map((latLng: any) => {
          return {lat: latLng.lat(), lng: latLng.lng()}
        })
      setPath(nextPath)
    }
  }, [setPath])
  // Bind refs to current Polygon and listeners
  const onLoad = useCallback(
    (polygon) => {
      polygonRef.current = polygon
      const path = polygon.getPath()
      listenersRef.current
        .push
        // path.addListener('set_at', onEdit),
        // path.addListener('insert_at', onEdit),
        // path.addListener('remove_at', onEdit)
        ()
    },
    [onEdit]
  )
  // Clean up refs
  const onUnmount = useCallback(() => {
    listenersRef.current.forEach((lis: any) => lis.remove())
    polygonRef.current = null
  }, [])
  const routesCoords = [
    {lat: 4.60971, lng: -74.08175},
    {lat: 10.96854, lng: -74.78132},
  ]

  const [mapProps, setMapProps] = useState({
    zoom: 10,
    center: {lat: 4.6504486, lng: -74.1413346},
  })

  console.log('The path state is', path)
  const optionsSedes = [
    {value: 'id1', label: 'Principal'},
    {value: 'id2', label: 'Segundaria'},
  ]

  const renderTooltip = (props: any) => (
    <Tooltip id='button-tooltip' {...props}>
      Activar creacion de poligonos en el mapa
    </Tooltip>
  )
  return (
    <>
      <div className='modal fade' tabIndex={-1} id='kt_modal_polygon'>
        <div className='modal-dialog modal-xl modal-dialog-centered'>
          <div className='modal-content'>
            <div className='modal-body p-5'>
              <div className='card' style={{minHeight: '40vh'}}>
                <div className='card-body'>
                  <div className='card-header border-0 p-0 ps-2 pe-4 mb-0'>
                    <h2 className='card-title align-items-start flex-column'>
                      <h3 className='fw-bold m-0'>Configuracion de areas de servicios</h3>
                      <p className='text-muted'>
                        Usando poligonos Ubica en el mapa las areas de servicio del proveedor
                      </p>
                    </h2>
                    <div className='card-toolbar'>
                      <button
                        type='button'
                        className='btn-close'
                        data-bs-dismiss='modal'
                        aria-label='Close'
                      ></button>
                    </div>
                  </div>
                  <Formik
                    initialValues={initialValues}
                    enableReinitialize={true}
                    onSubmit={(values) => {
                      console.log('en submit', values)
                    }}
                  >
                    {(props: FormikProps<any>) => (
                      <Form>
                        <div className='d-flex justify-content-between text-start mb-4'>
                          <div className='col-md-4 fv-row'>
                            <InputCustom
                              type='text'
                              name='direccion'
                              label='Buscar dirección'
                              required
                            />
                          </div>
                          <div className='col-md-2 fv-row'></div>
                          <div className='col-md-3 fv-row px-3'>
                            <label className='col-form-label required fw-bold fs-6 py-2'>
                              Sedes
                            </label>
                            <div className='d-flex justify-content-between text-start'>
                              <Field
                                name='condicion'
                                component={InputSelect}
                                options={optionsSedes}
                              />
                            </div>
                          </div>
                          <div className='col-md-3 fv-row'>
                            <label className='col-form-label required fw-bold fs-6 py-2'>
                              Poligonos
                            </label>
                            <div className='d-flex justify-content-between text-start'>
                              <Field
                                name='condicion'
                                component={InputSelect}
                                options={optionsSedes}
                              />
                              <OverlayTrigger
                                placement='top'
                                delay={{show: 250, hide: 3000}}
                                overlay={renderTooltip}
                              >
                                <button className='btn btn-info btn-icon ms-3 p-4'>
                                  <i className='fa fa-map'></i>
                                </button>
                              </OverlayTrigger>
                            </div>
                          </div>
                        </div>
                      </Form>
                    )}
                  </Formik>
                  <div className='w-100 card mt-7'>
                    <div className='App2'>
                      <div
                        className='btn btn-white text-dark py-3 shadow btn-save-polygon'
                        data-bs-toggle='modal'
                        data-bs-target='#kt_modal_save_polygon'
                      >
                        Guardar <i className='fa fa-save fs-4 text-dark'></i>
                      </div>
                      <div
                        className='btn btn-white text-dark py-3 shadow btn-create-polygon'
                        data-bs-toggle='modal'
                        data-bs-target='#kt_modal_save_polygon'
                      >
                        Nuevo <i className='fa fa-draw-polygon fs-4 text-dark'></i>
                      </div>
                      <LoadScript
                        id='script-loader'
                        googleMapsApiKey='AIzaSyAVqj3iCGPfniWznDShImSfe8XQzjdiQrM'
                        language='en'
                        region='us'
                      >
                        <GoogleMap
                          mapContainerClassName='App-map'
                          center={mapProps.center}
                          zoom={mapProps.zoom}
                          version='weekly'
                          on
                        >
                          <Polygon
                            // Make the Polygon editable / draggable
                            editable
                            draggable
                            path={path}
                            // Event used when manipulating and adding points
                            onMouseUp={onEdit}
                            // Event used when dragging the whole Polygon
                            onDragEnd={onEdit}
                            onLoad={onLoad}
                            onUnmount={onUnmount}
                          />
                        </GoogleMap>
                      </LoadScript>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalMapPolygonSave />
    </>
  )
}
