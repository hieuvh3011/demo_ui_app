/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import RootNavigator from '@app/navigation/RootNavigator';
import {Provider} from 'react-redux';
import store from '@app/redux/store';
import Colors from '@app/utils/colors';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        translucent={true}
        backgroundColor={Colors.transparent}
      />
      <RootNavigator />
    </Provider>
  );
};

export default App;
