import React, {useEffect} from 'react';
import { ImageBackground } from 'react-native';
import asyncStorage from '../../../store/asyncStorage';
import assets from '../../../assets';
import theme from '../../../theme';

function Flash({navigation}) {
  const init = async () => {
    try {
      const localData = await asyncStorage.get_storage_data('dataDetail');
      const token = await asyncStorage.get_storage_data('accessToken');
      const old_user = await asyncStorage.get_storage_data('old_user'); //check first open app

      if ((localData != undefined) & (token != undefined)) {
        navigation.replace('home');
        asyncStorage.set_storage_data('login_status', 0);
        console.log(old_user);
      }else if(old_user != undefined){
        navigation.replace('signup');
        asyncStorage.set_storage_data('old_user', 0);
      }else {
        asyncStorage.set_storage_data('login_status', 0);
        navigation.replace('login');
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <ImageBackground
    source={assets.image.backgroundImg}
    style={{
      width: theme.DefaultTheme.widthScreen,
      height: theme.DefaultTheme.heightScreen
    }}>

    </ImageBackground>
  )
}

export default Flash;
