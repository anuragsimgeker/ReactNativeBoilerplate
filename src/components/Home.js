import React, { Component, PropTypes } from 'react'
import { ActivityIndicator, Button, View, TextInput, Text, StyleSheet, Image, Alert } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
  }
});

export default class Home extends Component {

  componentDidMount() {
    const { fetchUser } = this.props
    fetchUser()
  }

  render() {
    const {
      isFetching, profile
    } = this.props

    return (
      <View style={styles.container}>
        <Text>Hello {profile.firstName} {profile.lastName}</Text>
        <ActivityIndicator
          animating={isFetching}
        />
      </View>
    )
  }
}

Home.propTypes = {
  fetchUser: PropTypes.func.isRequired,
  isFetching: PropTypes.bool,
  profile: PropTypes.object
}
