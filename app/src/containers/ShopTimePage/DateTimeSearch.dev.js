import React, { useCallback, useState, useEffect } from 'react'
import DateTimePicker from 'react-datetime-picker'

const DateTimeSearchDev = ({
  selectedDateTime,
  setSelectedDateTime,
  disabled,
}) => {
  const [dateTime, setDateTime] = useState(new Date(selectedDateTime))
  const handleOnChangeEvent = useCallback((...ev) => {
    setDateTime(ev[0])
  }, [])

  useEffect(() => {
    const millis = new Date(dateTime).getTime()
    setSelectedDateTime(millis)
  }, [dateTime, setSelectedDateTime])
  return (
    <div className='DateTimeSearch-dev'>
      <DateTimePicker
        format='y-MM-dd HH:mm:ss'
        onChange={handleOnChangeEvent}
        value={dateTime}
        disabled={disabled}
      />
    </div>
  )
}

export default DateTimeSearchDev
