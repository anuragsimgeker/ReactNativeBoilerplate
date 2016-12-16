import React, { PropTypes } from 'react'
import { ActivityIndicator, Button, View, TextInput, Text, StyleSheet, Alert } from 'react-native'

const LoginForm = ({ onSubmit, isFetching, error, accessToken }) => (
  <View style={styles.container}>
    <TextInput
      placeholder="Username"
      autoCapitalize="none"
      autoCorrect={false}
      style={styles.textInput}
      onChangeText={(text) => this.username = text}
    />
    <TextInput
      placeholder="Password"
      style={styles.textInput}
      onChangeText={(text) => this.password = text}
      secureTextEntry={true}
    />
    <Button
      onPress={() => {
        onSubmit(this.username, this.password)
      }}
      disabled={isFetching}
      title="Login"
      accessibilityLabel="Login"
    />
    <Text>{error}</Text>
    <ActivityIndicator
      animating={isFetching}
    />
  </View>
)

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isFetching: PropTypes.bool,
  error: PropTypes.string,
  accessToken: PropTypes.string
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    alignSelf: 'stretch',
  },
  textInput: {
    height: 50,
  }
});

export default LoginForm
