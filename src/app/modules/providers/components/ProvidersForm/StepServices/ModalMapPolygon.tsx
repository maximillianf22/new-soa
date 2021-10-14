import React, {useCallback, useRef, useState} from 'react'
import {GoogleMap} from '@react-google-maps/api'
import {Polygon} from '@react-google-maps/api'
import {LoadScript} from '@react-google-maps/api'
import {Field, Form, Formik, FormikProps} from 'formik'
import {InputCustom, InputSelect} from '../../../../global/components/inputs'
import {initialValues} from '../Helpers'
import {Button, OverlayTrigger, Tooltip} from 'react-bootstrap-v5'

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
            <div className='modal-body'>
              <div className='card' style={{minHeight: '40vh'}}>
                <div className='card-body'>
                  <div className='card-title bg-white rounded d-flex bd-highlight'>
                    <div className='bd-highlight w-75'>
                      <h3 className='fw-bold m-0'>Configuracion de areas de servicios</h3>
                      <p className='text-muted'>
                        Usando poligonos Ubica en el mapa las areas de servicio del proveedor
                      </p>
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
                          <div className='col-md-5 fv-row'>
                            <label className='col-form-label required fw-bold fs-6 py-2'>
                              Sedes
                            </label>
                            <div className='d-flex justify-content-between text-start'>
                              <Field
                                name='condicion'
                                component={InputSelect}
                                options={optionsSedes}
                              />
                              <OverlayTrigger
                                placement='top'
                                delay={{show: 250, hide: 400}}
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
                    <div className='App'>
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
                <div className='modal-footer p-0 m-0 border-0 pe-8'>
                  <button type='button' className='btn btn-danger' data-bs-dismiss='modal'>
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
