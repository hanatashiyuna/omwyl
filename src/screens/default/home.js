import React, {useEffect, useState} from 'react';
import { Image, ImageBackground, StyleSheet, View } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import theme from '../../theme';
import assets from '../../assets';
import { Avatar, Button, Searchbar, Text } from 'react-native-paper';
import asyncStorage from '../../store/asyncStorage';
import { SafeAreaView } from 'react-native-safe-area-context';
import utils from './utils';

function Home({navigation}) {

  const api = async () => await asyncStorage.get_storage_data('accessToken');;
  const [token, setToken] = useState('');
  // const [active, setActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = query => setSearchQuery(query);

  useEffect(()=>{
    if(api['success']){
      setToken(api['token']);
    }
  });
  
  return (
    <SafeAreaView>
      <ImageBackground
      source={assets.image.ganyuImg}
      style={styles.screen}>
        <View style={styles.header}>
          <FeatherIcon
          name="menu"
          size={30}
          onPress={()=>{
            // active ? setActive(false) : setActive(true);
          }}/>
          <Searchbar
            placeholder='Search any'
            textAlignVertical='top'
            onChangeText={onChangeSearch}
            value={searchQuery}
            onIconPress={()=>{
              console.log(searchQuery);
            }}
            style={{
              width: theme.DefaultTheme.widthScreen * .75,
              height: 40,
              justifyContent: 'center',
              borderRadius: 15,
            }}
          />
          <Avatar.Image source={assets.graphic.ultGanyu} size={35}/>
        </View>
        <View
        style={styles.contentTop}>
          <Text>Name</Text>
          <Button
          onPress={() => {
            console.log('press');
          }}>Refresh</Button>
        </View>
        <View
        style={styles.contentBottom}>
          <Button
          onPress={()=>{
            utils.logOut(navigation);
          }}>Log out</Button>

        </View>
        <View style={{
          backgroundColor: 'white',
          width: theme.DefaultTheme.widthScreen,
          height: 50,
          position: 'absolute',
          bottom: 0
        }}>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen: {
    width: theme.DefaultTheme.widthScreen,
    height: theme.DefaultTheme.heightScreen * 1.07,
    position: 'relative'
  },
  header: {
    width: theme.DefaultTheme.widthScreen,
    height: theme.DefaultTheme.heightScreen * .05,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contentTop: {
    width: theme.DefaultTheme.widthScreen * .95,
    height: theme.DefaultTheme.heightScreen * .3,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    margin: 10,
    borderRadius: 15
  },
  contentBottom: {
    width: theme.DefaultTheme.widthScreen,
    height: theme.DefaultTheme.heightScreen * .3,
    backgroundColor: 'white',
  }
});

export default Home;
