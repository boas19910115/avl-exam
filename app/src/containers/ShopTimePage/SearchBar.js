import React from 'react'
import CurrentTime from 'containers/ShopTimePage/CurrentTime'
import DateTimeSearchDev from 'containers/ShopTimePage/DateTimeSearch.dev'

const SearchBar = ({ disabled, selectedDateTime, setSelectedDateTime }) => {
  return (
    <div className='SearchBarContainer'>
      <CurrentTime />
      <DateTimeSearchDev
        {...{ selectedDateTime, setSelectedDateTime, disabled }}
      />
    </div>
  )
}

export default SearchBar
