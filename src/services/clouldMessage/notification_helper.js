import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';

const on = async (title, message) => {
  PushNotification.localNotification({
    message: message,
    allowWhileIdle: false,
    repeatTime: 1,
    priority: 'max',
    bigLargeIcon: 'ic_launcher_round',
    largeIcon: 'ic_launcher_round',
    smallIcon: 'ic_launcher_round',
    channelId: 'init-channel-id',
    title: title,
    // picture: msg['imageUrl'] ? msg['imageUrl'] : '',
    // bigPictureUrl: msg['imageUrl'] ? msg['imageUrl'] : null,
    invokeApp: true,
  });
};
  
const getPermission = async () => {
  try {
    return await new Promise(async resolve => {
      PushNotificationIOS.checkPermissions(permission =>
        resolve(permission?.authorizationStatus),
      );
    });
  } catch (error) {
    console.log(error);
  }
};

async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enable =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enable) {
        console.log('Authorization status: ', authStatus);
        GetFCMToken();
    }
}

async function GetFCMToken() {
    let fcmtoken = await AsyncStorage.getItem("fcmtoken");
    if(!fcmtoken){
        try{
            const fcmtoken = await messaging().getToken();
            if(fcmtoken){
                await AsyncStorage.setItem("fcmtoken", fcmtoken);
                console.log(fcmtoken, 'new');
            }
        }catch (error) {
            console.log(error, " error in fcmtoken");
        }
    }

    return fcmtoken;
}

function NotificationListener () {
    messaging().onNotificationOpenedApp(remoteMessage => {
        console.log(
            'Notification caused app to open from background state: ',
            remoteMessage.notification,
        );
        return remoteMessage.notification;
    });

    messaging()
    .getInitialNotification()
    .then(remoteMessage => {
        if (remoteMessage){
            console.log(
                'Notification caused app to open from quit state: ',
                remoteMessage.notification,
            );
            return remoteMessage.notification;
        }
    });

    console.log('......');
    messaging().onMessage(async remoteMessage => {
        console.log("notification on froground state.....", remoteMessage);
        return remoteMessage;
    });

    return null;
}

export default {requestUserPermission, NotificationListener};