import React from 'react';
import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import childStacks from './childStack';

const Stack = createStackNavigator();
const navigationRef = createNavigationContainerRef();

export default () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName={'splash'}>
        {childStacks._default.map((page, index) => (
          <Stack.Screen
            key={index}
            name={page.name}
            component={page.component}
            options={{headerShown: false}}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
