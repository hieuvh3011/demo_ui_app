import {put, all, takeLatest} from 'redux-saga/effects';
import {DELETE_INFO_SUCCESS, LOG_OUT} from '@app/redux/user/user.type';
import AsyncStorage from '@react-native-async-storage/async-storage';

function* logout() {
  yield AsyncStorage.clear();
  put({type: DELETE_INFO_SUCCESS});
}

function* actionWatcher() {
  yield takeLatest(LOG_OUT, logout);
}

export default function* userSaga() {
  yield all([actionWatcher()]);
}
