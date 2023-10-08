import {useEffect} from 'react';
import cloudMessageUtils from './notification_helper';
import {PermissionsAndroid} from 'react-native';

PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);

export default CLoudMessageProvider = () => {
  useEffect(() => {
    cloudMessageUtils.requestUserPermission();
    cloudMessageUtils.NotificationListener();
  }, []);
  return null;
};

export {cloudMessageUtils};