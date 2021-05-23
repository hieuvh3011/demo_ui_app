/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {Text, TextInput} from 'react-native';
import {name as appName} from './app.json';

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;
TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.allowFontScaling = false;
AppRegistry.registerComponent(appName, () => App);