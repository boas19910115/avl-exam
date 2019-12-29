import React, { useState, useEffect } from 'react'
import * as luxon from 'luxon'

const CurrentTime = () => {
  const [currentDate, setCurrentDate] = useState(new Date())

  useEffect(() => {
    setInterval(() => {
      setCurrentDate(new Date())
    }, 1000)
  }, [setCurrentDate])

  return (
    <div className='CurrentTime'>
      {luxon.DateTime.fromJSDate(currentDate).toFormat('ccc dd LLL HH:mm:ss')}
    </div>
  )
}

export default CurrentTime
