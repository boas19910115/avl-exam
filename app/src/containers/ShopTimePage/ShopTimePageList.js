import React, { useCallback } from 'react'
import * as luxon from 'luxon'
import { dayList } from 'containers/ShopTimePage/shopTimePage.helper'
const headerTypes = ['Name', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const footerTypes = ['Count', ...headerTypes.slice(1)]

const ShopTimePageList = ({ shopOpenTime: shopOpenTimeList }) => {
  const TableHeader = useCallback(() => {
    return headerTypes.map(h => <th key={h}>{h}</th>)
  }, [])
  const TableFooter = useCallback(() => {
    return footerTypes.map(h =>
      h === 'Count' ? (
        <th key={h}>{`${h}: ${shopOpenTimeList.length}`}</th>
      ) : (
        <th key={h}>{h}</th>
      ),
    )
  }, [shopOpenTimeList.length])

  return (
    <table className='ShopTimePageList'>
      <thead>
        <tr>
          <TableHeader />
        </tr>
      </thead>
      <tbody>
        {shopOpenTimeList.map((item, i) => {
          return (
            <tr key={`row-${i}`}>
              {headerTypes.map((h, ii) => {
                const currentDay = dayList[new Date().getDay()]

                if (h === 'Name') {
                  return <td key={`col-${ii}-${item.Name}`}>{item.Name}</td>
                }
                const timeObj = item[h]
                if (timeObj.isClose) {
                  return <td key={`col-${ii}-${item.Name}`}>CLOSE</td>
                }
                const start = luxon.DateTime.fromMillis(
                  +timeObj.start,
                ).toFormat('HH:mm')
                const end = luxon.DateTime.fromMillis(+timeObj.end).toFormat(
                  'HH:mm',
                )
                const time = `${start} - ${end}`

                const isCurrentDay = currentDay === h

                return (
                  <td
                    className={isCurrentDay ? 'currentDay' : ''}
                    key={`col-${ii}-${item.Name}`}
                  >
                    {time}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
      <tfoot>
        <tr>
          <TableFooter />
        </tr>
      </tfoot>
    </table>
  )
}

export default ShopTimePageList
