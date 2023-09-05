import React, {useEffect, useState} from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

function Clock() {

  const [time, setTime] = useState('');
  const [attendance, setAttendance] = useState(false);

  let compareDate = useEffect(() => {
    if (Date.now() < Date.parse(time)){
      setAttendance(false);
    }else{
      setAttendance(true);
    }
  });

  return (
    <View>
      <TouchableOpacity
      onPress={() => {
        setTime(Date.now.toString);
      }}>
        <Text>Reset</Text>
      </TouchableOpacity>
      <Text>{attendance ? 'true' : 'false'}</Text>
      <Text>Now: {time} </Text>
    </View>
  )
}

export default Clock;
