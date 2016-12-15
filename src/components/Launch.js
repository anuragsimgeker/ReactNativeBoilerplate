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

export default class Launch extends Component {

  componentDidMount() {
    const { verifyAccessToken } = this.props
    setTimeout(() => {
      verifyAccessToken()
    }, 500)
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    )
  }
}

Launch.propTypes = {
  verifyAccessToken: PropTypes.func.isRequired
}
