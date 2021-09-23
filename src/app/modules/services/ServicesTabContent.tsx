import React from 'react'
import { ContentItem } from '../catalogs/components/CatalogsTab/components/ContentItem'

export const ServicesTabContent = () => {
  return (
    <>
      <ContentItem vip name='Servicios' pilot='(305)260-7055' count={28} tableRef='#kt_table_1' />
      <ContentItem name='Servicios 2' pilot='(305)260-7055' count={28} tableRef='#kt_table_2' />
      <ContentItem name='Servicios 3' pilot='(305)260-7055' count={28} tableRef='#kt_table_3' />
    </>
  )
}
