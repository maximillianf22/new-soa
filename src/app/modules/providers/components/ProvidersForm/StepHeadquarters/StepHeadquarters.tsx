import ReactDOM from 'react-dom'
import React, {useState, useRef, useCallback} from 'react'
import {LoadScript, GoogleMap, Polygon, Marker, InfoWindow} from '@react-google-maps/api'
import './styles.css'
import {MapInfoWindows} from './MapInfoWindows'
import {Field, Form, Formik, FormikProps} from 'formik'
import {InputCustom, InputSelect} from '../../../../global/components/inputs'
import {initialValues} from '../Helpers'
import {Button, OverlayTrigger, Tooltip} from 'react-bootstrap-v5'

export function StepHeadquarters() {
  const [showInfowindows, setShowInfowindows] = useState(false)
  const [mapProps, setMapProps] = useState({
    zoom: 6,
    center: {lat: 4.570868, lng: -74.297333},
  })
  const handleClickMarker = ({lat, lng}: any) => {
    console.log('handleClickMarker')
    setMapProps({
      zoom: 12,
      center: {lat: lat, lng: lng},
    })
    setShowInfowindows((show) => !show)
  }

  const optionsSedes = [
    {value: 'id1', label: 'Principal'},
    {value: 'id2', label: 'Segundaria'},
  ]

  const renderTooltip = (props: any) => (
    <Tooltip id='button-tooltip' {...props}>
      Activar creacion de markadores en el mapa
    </Tooltip>
  )

  return (
    <>
      <div className='card-title bg-white rounded d-flex bd-highlight'>
        <div className='bd-highlight w-75'>
          <h3 className='fw-bold m-0'>Configuracion de sedes de los proveedores</h3>
          <p className='text-muted'>
            Ubica en el mapa las sedes que tenga registrada el proveedor y guardalas
          </p>
        </div>
      </div>
      <div className='App'>
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
                  <InputCustom type='text' name='direccion' label='Buscar dirección' required />
                </div>
                <div className='col-md-4 fv-row'>
                  <label className='col-form-label required fw-bold fs-6 py-2'>Sedes</label>
                  <div className='d-flex justify-content-between text-start'>
                    <Field name='condicion' component={InputSelect} options={optionsSedes} />
                    <OverlayTrigger
                      placement='top'
                      delay={{show: 250, hide: 400}}
                      overlay={renderTooltip}
                    >
                      <button className='btn btn-info btn-icon ms-3 p-4'>
                        <i className='fa fa-map-marker-alt'></i>
                      </button>
                    </OverlayTrigger>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>

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
            <Marker
              position={{lat: 4.570868, lng: -74.297333}}
              onClick={() => handleClickMarker({lat: 4.570868, lng: -74.297333})}
            ></Marker>

            <Marker
              position={{lat: 4.590868, lng: -74.299333}}
              onClick={() => handleClickMarker({lat: 4.590868, lng: -74.299333})}
            ></Marker>

            {showInfowindows && (
              <InfoWindow
                options={{pixelOffset: {height: -45, width: -2}}}
                position={mapProps.center}
                onCloseClick={() => setShowInfowindows((show) => !show)}
              >
                <div className='p-5'>
                  <MapInfoWindows />
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        </LoadScript>
      </div>
    </>
  )
}
