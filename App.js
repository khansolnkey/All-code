import React from 'react';
import 'react-native-gesture-handler';

import { Text, View } from 'react-native';
import Router from './src/navigation/Router';
import {LogBox} from "react-native";

LogBox.ignoreLogs([
  "ViewPropTypes will be removed",
  "ColorPropType will be removed",
  ])
const App = () => {
  return (
    <View style={{ flex: 1, }}>
      <Router/>
    </View>
  );
}

export default App;