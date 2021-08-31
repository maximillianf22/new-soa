/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
// import {
//   UsersTable,
// } from '../../modules/users/usersTable'

const HomePage: FC = () => (
  <>
    {/* begin::Row */}
    <div className='row gy-5 gx-xl-8'>
      <div className='col-xl-12x'>
        {/* <UsersTable className='card-xxl-stretch mb-5 mb-xl-8' /> */}
        <h1>Este es el inicio</h1>
      </div>
    </div>
    {/* end::Row */}
  </>
)

const IndexPage: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>Inicio</PageTitle>
      <HomePage />
    </>
  )
}

export {IndexPage}