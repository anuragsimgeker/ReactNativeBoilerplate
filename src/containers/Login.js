import { connect } from 'react-redux'
import { doLogin } from '../actions'
import LoginFormComponent from '../components/LoginForm'

const mapStateToProps = (state) => {
  return {
    accessToken: state.auth.accessToken,
    isFetching: state.auth.isFetching,
    error: state.auth.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (username, password) => {
      dispatch(doLogin(username, password))
    }
  }
}

const Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginFormComponent)

export default Login
