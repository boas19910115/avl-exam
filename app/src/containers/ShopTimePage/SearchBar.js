import React, { useCallback, useState } from 'react'

const textTypes = {
  OPEN: 'OPEN NOW',
  ALL: 'ALL',
}

const SearchBar = ({ isOpen, setIsOpen }) => {
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
    <button className='SearchBar' onClick={handleOnClick}>
      {text}
    </button>
  )
}

export default SearchBar
