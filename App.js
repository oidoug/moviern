/**
 * Moviern React Native App
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StatusBar,
  SafeAreaView,
} from 'react-native';

// Routes component controls all screens that can be pushed into the screen stack.
import Routes from './routes';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000"/>
      <Routes />
    </>
  );
};

export default App;
