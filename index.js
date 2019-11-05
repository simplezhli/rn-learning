/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {Setup} from './src/boot/Setup';

// 应用程序的运行入口函数
AppRegistry.registerComponent(appName, () => Setup);
