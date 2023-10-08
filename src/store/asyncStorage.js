import AsyncStorage from "@react-native-async-storage/async-storage";
i = 0;
export const get_storage_data = async (dataField) => {
  try {
    const value = await AsyncStorage.getItem(dataField);
    // console.log('get', ++i, value);
    return (value ? JSON.parse(value.toString()) : null);
  }catch (e) {
    console.log(e);
  }
}

export const set_storage_data = async (dataField, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    // console.log('set', dataField, ' ', value);
    await AsyncStorage.setItem(dataField, jsonValue);
  }catch (e){
    console.log('set error',e);
  }
}

export const clear_storage_data = async () => {
  try{
    AsyncStorage.clear();
  }catch (e) {
    console.log(e);
  }
}

export default {get_storage_data, set_storage_data, clear_storage_data};