import { connect } from 'react-redux'
import { fetchUser } from '../actions'
import HomeComponent from '../components/Home'

const mapStateToProps = (state) => {
  return {
    isFetching: state.user.isFetching,
    profile: state.user.profile
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: () => {
      dispatch(fetchUser())
    }
  }
}

const Home = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent)

export default Home
