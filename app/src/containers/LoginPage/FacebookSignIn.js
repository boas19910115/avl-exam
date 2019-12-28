import React, { useCallback } from 'react'
import * as firebase from 'firebase/app'
import { facebookAuthProvider } from 'services/firebase/facebook'

const FacebookSignIn = ({ isSignInCallback }) => {
  const handleOnButtonClick = useCallback(
    () =>
      firebase
        .auth()
        .signInWithPopup(facebookAuthProvider)
        .then(function(result) {
          isSignInCallback(result)
          // const token = result.credential.accessToken
          // const user = result.user
          // ...
        })
        .catch(function(error) {
          console.log(error)
          // const errorCode = error.code
          // const errorMessage = error.message
          // const email = error.email
          // const credential = error.credential
        }),
    [isSignInCallback],
  )

  return (
    <div className='FacebookSignIn'>
      <button onClick={handleOnButtonClick}>FACEBOOK</button>
    </div>
  )
}

export default FacebookSignIn
