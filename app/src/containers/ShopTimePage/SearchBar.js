import React, { useCallback, useState } from 'react'

const SearchBar = ({ isOpen, setIsOpen }) => {
  const [text, setText] = useState(isOpen ? 'OPEN NOW' : 'ALL')
  const handleOnClick = useCallback(() => {
    if (isOpen) {
      setIsOpen(false)
      setText('ALL')
    } else {
      setIsOpen(true)
      setText('OPEN NOW')
    }
  }, [isOpen, setIsOpen])

  return (
    <button className='SearchBar' onClick={handleOnClick}>
      {text}
    </button>
  )
}

export default SearchBar
