/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import Home from './src/components/Home';
import UserDetails from './src/components/UserDetails';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

const AppNavigator = createStackNavigator(
  {
    'Home': Home,
    'UserDetails': UserDetails
  },
  {
    initialRouteName: 'Home'
  }
);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider >
    );
  }
}


