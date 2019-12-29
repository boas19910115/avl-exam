import React, { useState, useMemo } from 'react'
import useShopOpenTime from 'utils/useShopOpenTime'
import { useSelector } from 'react-redux'
import ShopTimePageList from 'containers/ShopTimePage/ShopTimePageList'
import SearchBar from 'containers/ShopTimePage/SearchBar'

const dayList = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const ShopTimePageContainer = () => {
  const [isOpen, setIsOpen] = useState(false)
  useShopOpenTime()
  const { shopOpenTime } = useSelector(state => state)

  const currentTime = new Date()
  const day = dayList[currentTime.getDay()]

  const filteredShopTime = useMemo(() => {
    if (isOpen) {
      return shopOpenTime.filter(st => {
        const { isClose, start, end } = st[day]
        if (isClose) {
          return false
        } else {
          if (
            currentTime.getMilliseconds() >= +start &&
            currentTime.getMilliseconds() <= +end
          ) {
            return true
          } else {
            return false
          }
        }
      })
    } else {
      return shopOpenTime
    }
  }, [shopOpenTime, isOpen, currentTime, day])

  return (
    <div className='ShopTimePageContainer'>
      <SearchBar {...{ isOpen, setIsOpen }} />
      {shopOpenTime ? (
        <ShopTimePageList {...{ shopOpenTime: filteredShopTime, isOpen }} />
      ) : (
        'LOADING...'
      )}
    </div>
  )
}

export default ShopTimePageContainer
