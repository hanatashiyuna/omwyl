import React from 'react';
import {Alert} from 'react-native';
import asyncStorage from '../../store/asyncStorage';

const logOut = async navigation => {
  try {
    Alert.alert('Log Out', 'Are you sure you want to log out?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          asyncStorage.clear_storage_data();
          navigation.reset({
            index: 0,
            routes: [{name: 'splash'}],
          });
        },
      },
    ]);
  } catch (error) {
    console.log(error);
  }
};

export default {logOut};
