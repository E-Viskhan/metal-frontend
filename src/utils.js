import AsyncStorage from "@react-native-async-storage/async-storage";

let accessToken;

export const getAccessToken = async () => {
  if (!accessToken) {
      accessToken = await AsyncStorage.getItem('accessToken');
  }

  return accessToken;
};