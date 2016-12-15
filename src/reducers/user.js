const user = (state = {
  isFetching: false,
  error: null,
  profile: {}
}, action) => {
  switch (action.type) {
    case 'FETCH_USER_REQUEST':
      return Object.assign({}, state, {
        isFetching: true,
        error: null
      })
    case 'FETCH_USER_FAILURE':
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error
      })
    case 'FETCH_USER_SUCCESS':
      return Object.assign({}, state, {
        isFetching: false,
        error: null,
        profile: action.profile
      })
    default:
      return state
  }
}

export default user
