import { useEffect } from 'react'
import { shopOpenTime } from 'services/firebase/database'
import { useDispatch } from 'react-redux'
import { loadShopOpenTimeAction } from 'reduxStore/actions'

const useShopOpenTime = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    shopOpenTime.get().then(docs => {
      const list = []
      docs.forEach(doc => {
        const data = doc.data()
        const handledData = Object.keys(data).reduce((pre, cur) => {
          const isClose = data[cur] === 'Closed'
          if (isClose) {
            return {
              ...pre,
              [cur]: {
                isClose,
              },
            }
          }
          const time = data[cur].split('-').map(t => t.trim())
          const start = time[0].split(':')
          const end = time[1].split(':')
          return {
            ...pre,
            [cur]: {
              isClose,
              start: new Date().setHours(+start[0], +start[1]),
              end: new Date().setHours(+end[0], +end[1]),
            },
          }
        }, {})
        // console.log(handledData)

        list.push({
          Name: doc.id,
          ...handledData,
        })
      })
      dispatch(loadShopOpenTimeAction(list))
    })
  }, [dispatch])
}

export default useShopOpenTime
