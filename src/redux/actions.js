import * as types from "./actionTypes"
import { auth, googleAuthProvider, facebookAuthProvider } from "../firebase"

const loginStart = () => ({
  type: types.LOGIN_START,
})

const loginSuccess = (user) => ({
  type: types.LOGIN_SUCCESS,
  payload: user,
})

const loginError = (error) => ({
  type: types.LOGIN_FAIL,
  payload: error,
})

const googleSignInStart = () => ({
  type: types.GOOGLE_SIGN_IN_START,
})

const googleSignInSuccess = (user) => ({
  type: types.GOOGLE_SIGN_IN_SUCCESS,
  payload: user,
})

const googleSignInFail = (error) => ({
  type: types.GOOGLE_SIGN_IN_FAIL,
  payload: error,
})

const fbSignInStart = () => ({
  type: types.FACEBOOK_SIGN_IN_START,
})

const fbSignInSuccess = (user) => ({
  type: types.FACEBOOK_SIGN_IN_SUCCESS,
  payload: user,
})

const fbSignInFail = (error) => ({
  type: types.FACEBOOK_SIGN_IN_FAIL,
  payload: error,
})

export const loginInitiate = (email, password) => {
  return function (dispatch) {
    dispatch(loginStart())
    auth
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(loginSuccess(user))
      })
      .catch((error) => dispatch(loginError(error.message)))
  }
}

export const googleSignInInitiate = () => {
  return function (dispatch) {
    dispatch(googleSignInStart())
    auth
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(googleSignInSuccess(user))
      })
      .catch((error) => dispatch(googleSignInFail(error.message)))
  }
}

export const fbSignInInitiate = () => {
  return function (dispatch) {
    dispatch(fbSignInStart())
    auth
      .signInWithPopup(facebookAuthProvider.addScope("user_birthday, email"))
      .then((result) => {
        dispatch(fbSignInSuccess(result.user))
      })
      .catch((error) => dispatch(fbSignInFail(error.message)))
  }
}
