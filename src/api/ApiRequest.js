import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {backToLogin} from '@app/navigation/NavigatorHelper';
import {Alert} from 'react-native';
import store from '@app/redux/store';
import {DELETE_USER_INFO} from '@app/redux/user/user.type';

const instance = axios.create({
  baseURL: 'https://github.com/Sotatek-HieuVu',
  timeout: 30000,
});

instance.interceptors.request.use(
  async function (config) {
    if (__DEV__) {
      console.log('request config = ', config);
    }
    return config;
  },
  async function (error) {
    console.log('request error = ', error);
    return await error;
  },
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    if (__DEV__) {
      console.log('response = ', response);
      console.log('response string = ', JSON.stringify(response));
    }
    return response;
  },
  async function (error) {
    if (__DEV__) {
      console.log('response error = ', error.response);
      console.log('response error string = ', JSON.stringify(error.response));
    }
    if (
      error?.response?.status === 401 &&
      error?.response?.data?.message === 'Unauthorized'
    ) {
      console.log('vao day');
      await handleExpiredToken();
    }
    return await error.response;
  },
);

const handleExpiredToken = async () => {
  await AsyncStorage.clear();
  Alert.alert('Error', 'Your token is expired, please login again', [
    {
      text: 'OK',
      onPress: () => {
        store.dispatch({type: DELETE_USER_INFO});
        backToLogin();
      },
    },
  ]);
};

export const callApi = async (
  method = 'GET',
  params,
  url = 'https://github.com/Sotatek-HieuVu',
) => {
  let result;
  const headers = await _getHeader();
  let config;
  if (method === 'GET') {
    config = {
      method,
      url,
      headers,
      params: params,
    };
  } else {
    config = {
      method,
      url,
      headers,
      data: params,
    };
  }
  result = await instance(config);
  return result;
};

export const getApi = async (url, params = {}) => {
  // remove undefined field
  Object.keys(params).forEach(key => {
    if (typeof params[key] === 'undefined') {
      delete params[key];
    }
  });
  return callApi('GET', url, params);
};

export const postApi = async (url, data = {}) => {
  return callApi('POST', url, data);
};

export const putApi = async (url, data = {}) => {
  return callApi('PUT', url, data);
};

export const deleteApi = async (url, data = {}) => {
  return callApi('DELETE', url, data);
};

const _getHeader = async () => {
  const accessToken = (await AsyncStorage.getItem('access_token')) || '';
  return {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${accessToken}`,
    'Access-Control-Allow-Origin': '*',
  };
};
