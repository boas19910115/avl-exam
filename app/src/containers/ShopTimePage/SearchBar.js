import React from 'react'
import CurrentTime from 'containers/ShopTimePage/CurrentTime'
import DateTimeSearch from 'containers/ShopTimePage/DateTimeSearch'

const SearchBar = ({ disabled, selectedDateTime, setSelectedDateTime }) => {
  return (
    <div className='SearchBarContainer'>
      <CurrentTime />
      <DateTimeSearch
        {...{ selectedDateTime, setSelectedDateTime, disabled }}
      />
      {/* <button disabled={disabled} className='SearchBar' onClick={handleOnClick}>
        {text}
      </button> */}
    </div>
  )
}

export default SearchBar
