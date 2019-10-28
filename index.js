/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import ViewLearning from './src/screens/ViewLearning';
import TextLearning from './src/screens/TextLearning';

AppRegistry.registerComponent(appName, () => TextLearning);
