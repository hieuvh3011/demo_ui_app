import {put, all, takeLatest} from 'redux-saga/effects';
import {
  DELETE_INFO_SUCCESS,
  LOG_OUT,
  ON_PRESS_GENDER,
  SELECT_GENDER,
} from '@app/redux/user/user.type';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {initialState} from './user.reducer';

function* logout() {
  yield AsyncStorage.clear();
  put({type: DELETE_INFO_SUCCESS});
}

function* onPressSelectGender(action) {
  const selectedGender = action?.payload?.data;
  selectedGender.isSelect = true;
  const newList = [];
  initialState.genderList.map((item, index) => {
    item.isSelect = item.id === selectedGender.id;
    // nếu item có id trùng với selected gender thì
    // chuyển trạng thái isSelect về true, ko thì chuyển về false
    newList.push(item);
  });
  yield put({type: SELECT_GENDER, payload: {data: newList}});
}

function* actionWatcher() {
  yield takeLatest(LOG_OUT, logout);
  yield takeLatest(ON_PRESS_GENDER, onPressSelectGender);
}

export default function* userSaga() {
  yield all([actionWatcher()]);
}
