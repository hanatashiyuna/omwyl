import React from 'react';
import {View} from 'react-native';
import { ActivityIndicator, Text } from 'react-native-paper';

function Loading() {
  return (
    <View style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: fullWidth,
      height: fullHeight,
      backgroundColor: 'rgba(183, 255, 251, 1)',
    }}>
      <ActivityIndicator animating={true} />
      <Text style={{paddingTop: 10}}>Get Data</Text>
    </View>
  )
}

export default Loading;
