import React, { useState, useEffect } from 'react'
import { Dimensions, ImageBackground, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';
import { ActivityIndicator } from 'react-native-paper';
import IconFontisto from 'react-native-vector-icons/Fontisto';

const fullWidth = Dimensions.get('window').width;
const fullHeight = Dimensions.get('window').height;

function Login({navigation}) {
  const basicUrl = 'http://ims-api.viendong.edu.vn/api/v1';
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({UserId: '', Password: ''});

  const handleInputUserId = (value) => {
    setUser({...user, UserId: value});
  };

  const handleInputPassword = (value) => {
    setUser({...user, Password: value});
  };

  const handleLogin = (userid, password) => {
    setLoading(true);
    // if(userid.length == 0){
      axios.post((basicUrl + '/login'), {"userid": "2006010003", "pass": "123456", "type": "local"})
      .then(function(response){
        navigation.navigate('Home', {api: response['data']});
        setLoading(false);
      })
      .catch(function(error){
        console.log(error);
        setTimeout(() => setLoading(false), 2000);
      })
    // }else{
    //   setTimeout(() => setLoading(false), 2000);
    // };
  }

  return (
    <SafeAreaView>
      <StatusBar hidden/>
      {loading ? <View style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: fullWidth,
        height: fullHeight,
        backgroundColor: 'rgba(183, 255, 251, 1)',
      }}>
        <ActivityIndicator animating={true} />
        <Text style={{paddingTop: 10}}>Get Data</Text>
      </View> : <View style={styles.container}>
        <ImageBackground 
        source={require('../assets/background/Background.png')}
        resizeMode='cover'
        style={styles.background}>
          <View style={styles.containerLogin}>
            <View
            style={{
              height: 59,
              marginHorizontal: 40,
            }}>
              <Text style={styles.title}>Hallo</Text>
              <Text style={{
                alignSelf: 'center',
                fontSize: 12
              }}>Welcome back to Omwyl</Text>
            </View>
            <View style={{
              marginTop: 60,
            }}>
              <TouchableOpacity style={styles.input}>
                <Icon name="person" size={24} />
                <TextInput
                value={user.UserId}
                onChangeText={handleInputUserId}
                placeholder="1234567891"
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.input}>
                <Icon name="person" size={24} />
                <TextInput
                  value={user.Password}
                  onChangeText={handleInputPassword}
                  placeholder="Abc!123456789"
                  keyboardType='default'
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
            style={styles.btnLogin}
            onPress={()=> {
              handleLogin(user.UserId, user.Password);
            }}>
              <Text style={{color: '#fff', fontWeight: '600'}}>Login</Text>
            </TouchableOpacity>
            <View style={{
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <View style={{marginTop: 20, alignSelf: 'center', flexDirection: 'row'}}>
                <Text>You don't have account? </Text>
                <TouchableOpacity onPress={() => {
                  navigation.navigate('Sign Up')
                }}>
                  <Text style={{color: 'rgb(0, 209, 255)'}}>Sign up</Text>
                </TouchableOpacity>
              </View>
              <Text style={{marginTop: 10}}>Follow we</Text>
              <View style={{width: 150, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
                <TouchableOpacity onPress={() => {

                }}>
                  <IconFontisto name="youtube-play" size={24} color={'rgb(255, 0, 0)'}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                  
                }}>
                  <IconFontisto name="messenger" size={26} color={'rgb(0, 102, 255)'}/>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: fullWidth,
    height: fullHeight,
  },
  background: {
    width: fullWidth,
    height: fullHeight,
  },
  containerLogin: {
    backgroundColor: "rgba(255, 255, 255, .55)",
    width: 260,
    height: 550,
    alignSelf: 'center',
    marginTop: 80,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingTop: 46,
  },
  title: {
    alignSelf: 'center',
    fontSize: 26,
    fontWeight: "600",
  },
  btnLogin: {
    marginTop: 90,
    backgroundColor: 'rgb(0, 209, 255)',
    alignSelf: 'center',
    borderRadius: 10,
    paddingHorizontal: 90,
    paddingVertical: 10
  },
  input: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: 'rgb(255, 255, 255)',
    borderRadius: 10,
    paddingHorizontal: 10
  }
})

export default Login