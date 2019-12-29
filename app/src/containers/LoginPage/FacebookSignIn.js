import React, { useCallback } from 'react'
import * as firebase from 'firebase/app'
import 'firebase/auth'
import { facebookAuthProvider } from 'services/firebase/facebook'
import { googleAuthProvider } from 'services/firebase/google'

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
          const { code, credential } = error
          switch (code) {
            case 'auth/account-exists-with-different-credential':
              googleAuthProvider.setCustomParameters({
                login_hint: error.email,
              })
              firebase
                .auth()
                .signInWithPopup(googleAuthProvider)
                .then(function(result) {
                  // Link Facebook credential to Google account.
                  result.user.linkWithCredential(credential)
                  isSignInCallback(result)
                })
              break
            default:
              break
          }
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
