import React, {useEffect, useState} from 'react'
import { SafeAreaView, StatusBar, View } from 'react-native'
import { Text } from 'react-native-paper';

function Home({route}) {

  const {api} = route.params;
  const [token, setToken] = useState('');

  useEffect(()=>{
    if(api['success']){
      setToken(api['token']);
    }
  });
  
  return (
    <SafeAreaView>
      <StatusBar/>
      <View><Text>{String(api['user']['hocVien']['ho'])} {api['user']['hocVien']['ten']} </Text></View>
    </SafeAreaView>
  )
}

export default Home
