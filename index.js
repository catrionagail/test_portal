/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
// import DashboardTest from './src/components/DashboardTest';
import LandingPage from './src/components/LandingPage';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => LandingPage);
