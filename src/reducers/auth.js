const auth = (state = {
  isFetching: false,
  accessToken: null,
  error: null
}, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return Object.assign({}, state, {
        isFetching: true,
        error: null,
        accessToken: null
      })
    case 'LOGIN_FAILURE':
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error
      })
    case 'LOGIN_SUCCESS':
      return Object.assign({}, state, {
        isFetching: false,
        error: null,
        accessToken: action.accessToken
      })
    default:
      return state
  }
}

export default auth
