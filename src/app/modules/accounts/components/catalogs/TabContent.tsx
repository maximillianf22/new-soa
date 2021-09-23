import React from 'react'
import {TabContentItem} from '../global/TabContentItem'

export const TabContent = () => {
  return (
    <>
      <TabContentItem vip name='Cuenta' pilot='(305)260-7055' count={28} tableRef='#kt_table_1' />
      <TabContentItem name='Cuenta 2' pilot='(305)260-7055' count={28} tableRef='#kt_table_2' />
      <TabContentItem name='Cuenta 3' pilot='(305)260-7055' count={28} tableRef='#kt_table_3' />
    </>
  )
}
