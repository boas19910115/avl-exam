import React, { useState, useMemo } from 'react'
import useShopOpenTime from 'utils/useShopOpenTime'
import { useSelector } from 'react-redux'
import ShopTimePageList from 'containers/ShopTimePage/ShopTimePageList'
import SearchBar from 'containers/ShopTimePage/SearchBar'
import { dayList } from 'containers/ShopTimePage/shopTimePage.helper'

const ShopTimePageContainer = () => {
  const [isOpen, setIsOpen] = useState(true)
  const [selectedDateTime, setSelectedDateTime] = useState(new Date().getTime())

  useShopOpenTime()

  const { shopOpenTime } = useSelector(state => state)

  const currentTime = new Date(selectedDateTime)
  const currentDay = dayList[currentTime.getDay()]

  const filteredShopTime = useMemo(() => {
    if (shopOpenTime)
      return shopOpenTime.filter(st => {
        try {
          const currentItem = st[currentDay]
          const { isClose, start, end } = currentItem
          if (isClose) {
            return false
          } else {
            const [selectedHHmm, startHHmm, endHHmm] = [
              selectedDateTime,
              +start,
              +end,
            ].map(ms => {
              const tempDate = new Date(ms)
              return tempDate.getHours() * 60 + tempDate.getMinutes()
            })

            if (selectedHHmm >= startHHmm && selectedHHmm <= endHHmm) {
              return true
            } else {
              return false
            }
          }
        } catch (error) {
          return false
        }
      })
    else {
      return null
    }
  }, [selectedDateTime, currentDay, shopOpenTime])

  return (
    <div className='ShopTimePageContainer'>
      <SearchBar
        {...{
          isOpen,
          setIsOpen,
          disabled: !shopOpenTime,
          selectedDateTime,
          setSelectedDateTime,
        }}
      />
      {shopOpenTime ? (
        <ShopTimePageList
          {...{ shopOpenTime: filteredShopTime, isOpen, currentDay }}
        />
      ) : (
        'LOADING FROM FIRESTORE...'
      )}
    </div>
  )
}

export default ShopTimePageContainer
