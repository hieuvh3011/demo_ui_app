import {all, put, takeLatest} from 'redux-saga/effects';
import {
  GET_CLASSES_LIST,
  REFRESH_CLASSES,
} from '@app/redux/classes/classes.type';
import {getClassroomList} from '@app/api/ClassroomRequest';
import {receiveClasses, setRefresher} from '@app/redux/classes/classes.action';
import {initialState} from '@app/redux/classes/classes.reducer';

function* fetchClassroom() {
  const response = yield getClassroomList();
  // console.log('classroom list = ', response?.data);
  if (response?.status === 200) {
    yield put(receiveClasses(response?.data));
  }
}

function* refreshClassroom() {
  yield put(setRefresher(true));
  const response = yield getClassroomList();
  yield put(setRefresher(false));
  if (response?.status === 200) {
    // const data = response?.data || [];
    yield put(receiveClasses(response?.data));
  }
}

function handleDuplicate(list = []) {
  const result = [];
  initialState.listClasses.map((item, index) => {

  });
}

function* actionWatcher() {
  yield takeLatest(GET_CLASSES_LIST, fetchClassroom);
  yield takeLatest(REFRESH_CLASSES, refreshClassroom);
}

export default function* classesSaga() {
  yield all([actionWatcher()]);
}
