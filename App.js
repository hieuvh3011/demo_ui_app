/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar} from 'react-native';
import RootNavigator from '@app/navigation/RootNavigator';
import {Provider} from 'react-redux';
import store from '@app/redux/store';
import Colors from '@app/utils/colors';
import Toast from 'react-native-toast-message';

import * as Sentry from '@sentry/react-native';

Sentry.init({
  dsn: 'https://9fc7a63c7fcc429fb657cb441805de78@o914809.ingest.sentry.io/5854225',
});

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar
        barStyle={'dark-content'}
        translucent={true}
        backgroundColor={Colors.transparent}
      />
      <RootNavigator />
      <Toast ref={ref => Toast.setRef(ref)} />
    </Provider>
  );
};

export default App;
