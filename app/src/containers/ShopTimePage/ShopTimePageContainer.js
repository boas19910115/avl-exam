import React, { useState, useMemo } from 'react'
import useShopOpenTime from 'utils/useShopOpenTime'
import { useSelector } from 'react-redux'
import ShopTimePageList from 'containers/ShopTimePage/ShopTimePageList'
import SearchBar from 'containers/ShopTimePage/SearchBar'
import { dayList } from 'containers/ShopTimePage/shopTimePage.helper'

const ShopTimePageContainer = () => {
  const [isOpen, setIsOpen] = useState(true)
  useShopOpenTime()
  const { shopOpenTime } = useSelector(state => state)

  const currentTime = new Date()
  const currentDay = dayList[currentTime.getDay()]

  const filteredShopTime = useMemo(() => {
    if (isOpen && shopOpenTime) {
      return shopOpenTime.filter(st => {
        const { isClose, start, end } = st[currentDay]
        if (isClose) {
          return false
        } else {
          if (
            currentTime.getTime() >= +start &&
            currentTime.getTime() <= +end
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
  }, [shopOpenTime, isOpen, currentTime, currentDay])

  return (
    <div className='ShopTimePageContainer'>
      <SearchBar {...{ isOpen, setIsOpen, disabled: !shopOpenTime }} />
      {shopOpenTime ? (
        <ShopTimePageList {...{ shopOpenTime: filteredShopTime, isOpen }} />
      ) : (
        'LOADING FROM FIRESTORE...'
      )}
    </div>
  )
}

export default ShopTimePageContainer
