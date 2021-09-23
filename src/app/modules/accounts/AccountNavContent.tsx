import React from 'react'
import { ContentItem } from '../catalogs/components/CatalogsTab/components/ContentItem'

export const AccountNavContent = () => {
  return (
    <>
      <ContentItem vip name='Cuenta' pilot='(305)260-7055' count={28} tableRef='#kt_table_1' />
      <ContentItem name='Cuenta 2' pilot='(305)260-7055' count={28} tableRef='#kt_table_2' />
      <ContentItem name='Cuenta 3' pilot='(305)260-7055' count={28} tableRef='#kt_table_3' />
    </>
  )
}
