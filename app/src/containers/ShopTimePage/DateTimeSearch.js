import React, { useCallback, useMemo } from 'react'
import * as luxon from 'luxon'
import WrapperWithPropsPassThrough from 'components/wrapperPassPropsThrough'

const handlerTypes = {
  DATE: 'date',
  TIME: 'time',
}

const dateTimeFormatTypes = {
  DATE: 'yyyy-LL-dd',
  DATETIME: 'yyyy-LL-dd HH:mm:ss',
  TIME: 'HH:mm',
}

const DateTimeSearch = ({
  selectedDateTime,
  setSelectedDateTime,
  disabled,
}) => {
  const { defaultDate, defaultTime } = useMemo(() => {
    return {
      defaultDate: luxon.DateTime.fromMillis(selectedDateTime).toFormat(
        dateTimeFormatTypes.DATE,
      ),
      defaultTime: luxon.DateTime.fromMillis(selectedDateTime).toFormat(
        dateTimeFormatTypes.TIME,
      ),
    }
  }, [selectedDateTime])

  const handleOnChange = useCallback(
    type => e => {
      const { value } = e.target
      const selectedDateObj = luxon.DateTime.fromMillis(
        selectedDateTime,
      ).toJSDate()
      switch (type) {
        case handlerTypes.DATE: {
          const time = [
            selectedDateObj.getHours(),
            selectedDateObj.getMinutes(),
            selectedDateObj.getSeconds(),
          ]
          console.log(value)

          setSelectedDateTime(new Date(value).setHours(...time))
          break
        }
        case handlerTypes.TIME: {
          const timeArray = value.split(':')
          const [hour, min] = [+timeArray[0], +timeArray[1]]
          setSelectedDateTime(selectedDateObj.setHours(hour, min))
          break
        }
        default: {
          break
        }
      }
    },
    [selectedDateTime, setSelectedDateTime],
  )
  return (
    <div className='DateTimeSearch'>
      <input
        disabled={disabled}
        value={defaultDate}
        type='date'
        onChange={handleOnChange(handlerTypes.DATE)}
        {...{
          onKeyDown(e) {
            e.preventDefault()
          },
          onKeyUp(e) {
            e.preventDefault()
          },
        }}
      />
      <input
        disabled={disabled}
        value={defaultTime}
        type='time'
        onChange={handleOnChange(handlerTypes.TIME)}
      />
    </div>
  )
}

export default DateTimeSearch
