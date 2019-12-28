import * as firebase from 'firebase/app'

const provider = new firebase.auth.FacebookAuthProvider()
provider.setCustomParameters({
  display: 'popup',
})
export { provider as facebookAuthProvider }
