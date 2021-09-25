import React from 'react'
import {shallowEqual, useSelector} from 'react-redux'
import {RootState} from '../../../../../../setup'
import { IAccountInfo } from '../../../Interfaces/models'
import { TableBodyItem } from './TableBodyItem'

export const TableBody: React.FC = () => {
  const table: any = useSelector<RootState>(({table}) => table, shallowEqual)
  const {
    tableBody: {tableHeads, tableContent},
  } = table

  const sortByVip = (array: IAccountInfo[]) => {  
    return array.sort(function(x, y) {
      // false values first
      return (x.acIsVip !== y.acIsVip)? 0 : x? -1 : 1;
      // true values first
      // return (x.acIsVip === y.acIsVip)? 0 : x? 1 : -1;
    });
  }
  sortByVip(tableContent)

  return (
    <>
      <div className='card-body py-3'>
        <div className='table-responsive'>
          <table className='table table-row-dashed table-hover table-row-gray-300 align-middle gs-0 gy-3 mb-0'>
            <thead>
              <tr className='fw-bolder text-muted'>
                {tableHeads &&
                  tableHeads.map((th: string, i: number) => (
                    <th key={i} className=''>
                      {th}
                    </th>
                  ))}
                <th className='min-w-80px text-end'>Opciones</th>
              </tr>
            </thead>
            <tbody>
              {tableContent &&
                tableContent.map(
                  ( item: IAccountInfo, i: number) => (
                      <TableBodyItem item={item} key={i} />
                  )
                )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
