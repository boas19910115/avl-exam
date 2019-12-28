import * as firebase from 'firebase/app'

const provider = new firebase.auth.GoogleAuthProvider()

export { provider as googleAuthProvider }
