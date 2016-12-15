import { connect } from 'react-redux'
import { verifyAccessToken } from '../actions'
import LaunchComponent from '../components/Launch'

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    verifyAccessToken: () => {
      dispatch(verifyAccessToken())
    }
  }
}

const Launch = connect(
  mapStateToProps,
  mapDispatchToProps
)(LaunchComponent)

export default Launch
