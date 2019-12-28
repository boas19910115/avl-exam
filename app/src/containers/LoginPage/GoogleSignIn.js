import React, { useCallback } from 'react'
import * as firebase from 'firebase/app'
import { googleAuthProvider } from 'services/firebase/google'

const GoogleSignIn = ({ isSignInCallback }) => {
  const handleOnButtonClick = useCallback(
    () =>
      firebase
        .auth()
        .signInWithPopup(googleAuthProvider)
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
    <div className='GoogleSignIn'>
      <button onClick={handleOnButtonClick}>GOOGLE</button>
    </div>
  )
}

export default GoogleSignIn
