import firebase from "firebase/compat/app"
import "firebase/compat/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBPbVOdhYDxdo6tpZmgs5WeA27THfNZFhQ",
  authDomain: "login-fire-3d708.firebaseapp.com",
  projectId: "login-fire-3d708",
  storageBucket: "login-fire-3d708.appspot.com",
  messagingSenderId: "264522811294",
  appId: "1:264522811294:web:84add38622b5c8b86b788f",
  measurementId: "G-260G6VZDG8",
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth() //regular registration
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider()

export { auth, googleAuthProvider, facebookAuthProvider }
