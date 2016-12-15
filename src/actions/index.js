import { getAccessToken, setAccessToken } from '../utils/storage'
import { Actions } from 'react-native-router-flux'
import { Alert } from 'react-native'
import { config } from '../utils/config';

export const loginRequest = () => {
  return {
    type: 'LOGIN_REQUEST'
  }
}

export const loginFailure = (error) => {
  return {
    type: 'LOGIN_FAILURE',
    error
  }
}

export const loginSuccess = (accessToken) => {
  return {
    type: 'LOGIN_SUCCESS',
    accessToken
  }
}

export const doLogin = (username, password) => {
  return function (dispatch) {
    dispatch(loginRequest())

    return fetch(`${config.apiEndpoint}/user/login`, {
      method: 'POST',
      body: `username=${username}&password=${password}`,
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
    })
      .then(function(response) {
        return response.json().then((json) => {
          if (!response.ok) throw Error(json.error)
          return json;
        })
      })
      .then((json) => {
        dispatch(loginSuccess(json.accessToken))
        setAccessToken(json.accessToken)  // store in persistent AsyncStorage
        Actions.home()
      })
      .catch(error => dispatch(loginFailure(error.message)))
  }
}

export const fetchUserRequest = () => {
  return {
    type: 'FETCH_USER_REQUEST'
  }
}

export const fetchUserFailure = (error) => {
  return {
    type: 'FETCH_USER_FAILURE',
    error
  }
}

export const fetchUserSuccess = (profile) => {
  return {
    type: 'FETCH_USER_SUCCESS',
    profile
  }
}

export const fetchUser = () => {
  return function (dispatch) {
    dispatch(fetchUserRequest())
    getAccessToken()
      .then((accessToken) => {
        return fetch(`${config.apiEndpoint}/user`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${accessToken}`
          },
        })
          .then(function(response) {
            return response.json().then((json) => {
              if (!response.ok) throw Error(json.error)
              return json;
            })
          })
          .then((json) => {
            dispatch(fetchUserSuccess(json))
          })
          .catch(error => dispatch(fetchUserFailure(error.message)))
      })
  }
}

export const verifyAccessToken = () => {
  return function (dispatch) {
    getAccessToken()
      .then((accessToken) => {
        if (!accessToken) {
          Actions.login()
        } else {
          Actions.home()
        }
      })
  }
}
