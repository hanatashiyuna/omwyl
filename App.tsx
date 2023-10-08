import React, {useEffect} from 'react';

import CloudMessage from './src/services/clouldMessage';
import {PermissionsAndroid, Platform, StatusBar, UIManager} from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query';
import {Provider as PaperProvider} from 'react-native-paper';
import { CounterProvider } from './src/contexts/counter';
import { ToastProvider } from './src/contexts/toastcontext';
import RootStackNavigation from './src/navigators/RootStackNavigation';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const queryClient = new QueryClient();

function App() {

  return (
    <PaperProvider> 
      <QueryClientProvider client={queryClient}>
        <CounterProvider>
          <ToastProvider>
            <StatusBar translucent backgroundColor="rgba(0, 0, 0, 0.3)" />
            <RootStackNavigation />
            <CloudMessage />
          </ToastProvider>
        </CounterProvider>
      </QueryClientProvider>
    </PaperProvider>
  );
}

export default App;