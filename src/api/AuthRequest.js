import {callApi, postApi} from '@app/api/ApiRequest';
import {baseAuthUrl, loginUrl} from '@app/api/ApiUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ACCESS_TOKEN, SESSION_ID, USER_ID} from '@app/utils/StorageKeys';

export const callLoginDefault = async () => {
  const body = {
    email: 'api@kazootechnology.com',
    password: 'dmrwN7KAL',
  };
  const response = await callApi('POST', baseAuthUrl, body, true);
  const token = response?.data?.data?.access_token;
  if (token) {
    await AsyncStorage.setItem(ACCESS_TOKEN, token);
  }
};

export const loginRequest = async (email = '', password = '') => {
  await callLoginDefault();
  const body = {email, password};
  const response = await postApi(loginUrl, body);
  const userId = response?.data?.user_id;
  const sessionId = response?.data?.session_id;
  if (userId && sessionId) {
    await AsyncStorage.setItem(USER_ID, userId.toString());
    await AsyncStorage.setItem(SESSION_ID, sessionId.toString());
  }
  return response;
};
