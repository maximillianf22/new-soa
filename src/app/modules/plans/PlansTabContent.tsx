import React from 'react'
import { ContentItem } from '../catalogs/components/CatalogsTab/components/ContentItem'

export const PlansTabContent = () => {
  return (
    <>
      <ContentItem vip name='Planes' pilot='(305)260-7055' count={28} tableRef='#kt_table_1' />
      <ContentItem name='Planes 2' pilot='(305)260-7055' count={28} tableRef='#kt_table_2' />
      <ContentItem name='Planes 3' pilot='(305)260-7055' count={28} tableRef='#kt_table_3' />
    </>
  )
}
