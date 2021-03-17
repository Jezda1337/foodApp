import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import React from 'react';

import Routes from './routes';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
          <Routes />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
