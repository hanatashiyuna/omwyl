import React from 'react';
import { Image } from 'react-native';
import { createAppContainer, createStackNavigator} from 'react-navigation';

import Home from '../screens/home';
import Login from '../screens/login';
import Signup from '../screens/signup';

import { theme } from '../theme/theme';

const screens = createStackNavigator({
	Login,
	Signup,
	Home,
}, {
	defaultNavigationOptions: {
		headerStyle: {},
		headerBackImage: <Image />,
		headerBackTitle: null,
		headerLeftContainerStyle: {},
		headerRightContainerStyle: {}
	}
});

export default createAppContainer(screens);