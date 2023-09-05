import { Children } from 'react';
import {View, ImageBackground, Dimensions} from 'react-native';

const fullWidth = Dimensions.get('window').width;
const fullHeight = Dimensions.get('window').height;

export function Background(props: any) {
  return (
    <View>
      <ImageBackground source={require('../assets/background/Background.png')} style={{width: fullWidth, height: fullHeight}} resizeMode="cover">
        <View>
          
        </View>
      </ImageBackground>
    </View>
  );
}