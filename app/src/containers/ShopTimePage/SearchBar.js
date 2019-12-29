import React, { useCallback, useState } from 'react'
import CurrentTime from 'containers/ShopTimePage/CurrentTime'

const textTypes = {
  OPEN: 'OPEN NOW',
  ALL: 'ALL',
}

const SearchBar = ({ isOpen, setIsOpen, disabled }) => {
  const [text, setText] = useState(isOpen ? textTypes.OPEN : textTypes.ALL)
  const handleOnClick = useCallback(() => {
    if (isOpen) {
      setIsOpen(false)
      setText(textTypes.ALL)
    } else {
      setIsOpen(true)
      setText(textTypes.OPEN)
    }
  }, [isOpen, setIsOpen])

  return (
    <div className='SearchBarContainer'>
      <CurrentTime />
      <button disabled={disabled} className='SearchBar' onClick={handleOnClick}>
        {text}
      </button>
    </div>
  )
}

export default SearchBar
