/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import { Actions, Router, Scene } from 'react-native-router-flux';

// Containers
import LoginContainer from './src/containers/Login'
import LaunchContainer from './src/containers/Launch'
import HomeContainer from './src/containers/Home'

// Reducer
import rootReducer from './src/reducers'

// Redux store
let store = createStore(rootReducer, applyMiddleware(thunk))

// Router scenes
const scenes = Actions.create(
  <Scene key="root">
    <Scene key="launch" component={LaunchContainer} hideNavBar={true} initial={true} />
    <Scene key="login" component={LoginContainer} hideNavBar={true} />
    <Scene key="home" component={HomeContainer} hideNavBar={true} />
  </Scene>
);

export default class ReactNativeBoilerplate extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router scenes={scenes} />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('ReactNativeBoilerplate', () => ReactNativeBoilerplate);
