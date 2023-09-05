import React from 'react';
import Login from './src/screens/login';
import Signup from './src/screens/signup';
import Home from './src/screens/home';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{headerShown: false}}
      initialRouteName='Sign Up'>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name='Sign Up' component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;