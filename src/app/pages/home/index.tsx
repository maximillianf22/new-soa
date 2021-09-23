/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC} from 'react'
import {PageTitle} from '../../../_metronic/layout/core'


const HomePage: FC = () => (
  <>
    <div className='row gy-5 gx-xl-8'>
      <div className='col-xl-12x'>
        <h1>Este es el inicio</h1>
      </div>
    </div>
  </>
)

const IndexPage: FC = () => {
  return (
    <>
      <PageTitle breadcrumbs={[]}>Inicio</PageTitle>
      <HomePage />
    </>
  )
}

export {IndexPage}
