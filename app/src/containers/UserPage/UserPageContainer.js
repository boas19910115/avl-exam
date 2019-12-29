import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'

const UserPageContainer = () => {
  const { user } = useSelector(state => state)
  const { isData, photoURL, ...restInfo } = useMemo(() => {
    try {
      const {
        providerData: [providerDataFisrt],
      } = user
      const { photoURL, ...rest } = providerDataFisrt
      return { photoURL, ...rest, isData: true }
    } catch (error) {
      return { isData: false }
    }
  }, [user])
  return (
    isData && (
      <div className='UserPageContainer'>
        <img src={photoURL} alt='profile' />
        {Object.keys(restInfo).map(k => {
          return (
            <div key={k} className='div-row'>
              <span>{k}</span>
              <span>{restInfo[k] || 'unset'}</span>
            </div>
          )
        })}
      </div>
    )
  )
}

export default UserPageContainer
