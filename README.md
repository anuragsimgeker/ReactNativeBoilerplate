# React Native Boilerplate

A React-Native boilerplate mobile app with authentication.

### Demo
<img width=250 src="https://cloud.githubusercontent.com/assets/1322724/21243823/75fca1a8-c2cf-11e6-93a2-53427e16f405.gif">


### Tech

ReactNativeBoilerplate uses a number of open source projects:

* [redux] - Predictable state container for JavaScript apps.
* [react-redux] - Official React bindings for Redux.
* [redux-thunk] - Thunk middleware for Redux.
* [react-native-router-flux] - React Native Router based on new React Native Navigation API.
* [react-native-simple-store] - A minimalistic wrapper around React Native's AsyncStorage.
* And many more&hellip;

And of course ReactNativeBoilerplate itself is open source with a [public repository][ReactNativeBoilerplate] on GitHub.

### Prerequisites

ReactNativeBoilerplate requires [Node.js](https://nodejs.org/),  [Watchman](https://facebook.github.io/watchman/) and [Reach-Native CLI](https://facebook.github.io/react-native/docs/getting-started.html#content) to run.

### Installation

```sh
$ git clone git@github.com:anuragsimgeker/ReactNativeBoilerplate.git
$ cd ReactNativeBoilerplate
$ npm install
```

### Usage

#### Start REST API server (Skip if you have your own server)
```sh
$ cd server
$ npm install
$ npm start
```

Checkout my [koa-api] API backend boilerplate with authentication and db for a real API server.

#### Start client
```sh
$ react-native run-ios
```

### Author
[Anurag Simgeker](https://github.com/anuragsimgeker)


License
----

MIT

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [redux]: <http://redux.js.org/>
   [react-native-router-flux]: <https://github.com/aksonov/react-native-router-flux>
   [react-redux]: <https://github.com/reactjs/react-redux>
   [react-native-simple-store]: <https://github.com/jasonmerino/react-native-simple-store>
   [redux-thunk]: <https://github.com/gaearon/redux-thunk>
   [ReactNativeBoilerplate]: <https://github.com/anuragsimgeker/ReactNativeBoilerplate>
   [koa-api]: <https://github.com/anuragsimgeker/koa-api>
