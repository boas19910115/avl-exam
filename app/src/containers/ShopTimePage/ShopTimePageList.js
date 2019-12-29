import React, { useCallback } from 'react'
import * as luxon from 'luxon'
const headerTypes = ['Name', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const ShopTimePageList = ({ shopOpenTime: shopOpenTimeList }) => {
  const TableHeader = useCallback(() => {
    return headerTypes.map(h => <th key={h}>{h}</th>)
  }, [])

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
                const time = `${start}-${end}`

                return <td key={`col-${ii}-${item.Name}`}>{time}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default ShopTimePageList
